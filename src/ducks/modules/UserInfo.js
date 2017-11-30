import { put, takeLatest } from 'redux-saga/effects';
import { getData } from '../../env';
import { FULLFIELD, PENDING, REJECTED } from '../helpers/loadStatusConstatnts';
import SagasManager from '../helpers/sagasManager';


const GET_SELF_INFO = 'USER_INFO/GET_SELF_INFO';
// const SET_SELF_INFO = 'USER_INFO/SET_SELF_INFO';

const intialState = {
  SELF: {},
};

export const UserInfo = (state = intialState, { type, payload }) => {
  switch (type) {
    case `${ GET_SELF_INFO }${ FULLFIELD }`:
      return {
        ...state,
        SELF: payload,
      };
    case `${ GET_SELF_INFO }${ REJECTED }`:
    default: return { ...state };
  }
};


export const getSelfInfo = () => ({
  type: GET_SELF_INFO,
});

const getSelfInfoFullField = (payload) => ({
  type: `${ GET_SELF_INFO }${ FULLFIELD }`,
  payload,
});
const getSelfInfoRejected = (payload) => ({
  type: `${ GET_SELF_INFO }${ REJECTED }`,
  payload,
});

function* watchGetSelfInfo() {
  yield put({
    type: `${ GET_SELF_INFO }${ PENDING }`,
  });
  try {
    const res = yield getData('SELF');
    if (res.meta.code === 200) {
      yield put(getSelfInfoFullField(res.data));
    }
  } catch (e) {
    yield put(getSelfInfoRejected(e));
  }
}


SagasManager.addSagaToRoot(function* () {
  yield takeLatest(GET_SELF_INFO, watchGetSelfInfo);
});
