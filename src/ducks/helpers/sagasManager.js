import { fork, all } from 'redux-saga/effects';

class SagasManager {
  constructor() {
    this.sagasWithArguments = [];
  }

  addSagaToRoot(...sagaWithArguments) {
    this.sagasWithArguments.push([...sagaWithArguments]);
  }

  getRootSaga() {
    const self = this;

    return function* rootSaga() {
      yield all(self.sagasWithArguments.map((sagaWithArguments) => fork(...sagaWithArguments)));
    };
  }
}

export default new SagasManager();
