import { all, fork } from "redux-saga/effects";

import covidSaga from "./covid/covidSaga";

function* rootSaga() {
  yield all([fork(covidSaga)]);
}

export default rootSaga;
