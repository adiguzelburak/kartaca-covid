import { all, call, put, takeLatest } from "redux-saga/effects";
import covidService from "./covidService";
import { covidActions } from "./covidSlice";

function* getStatisticsSaga({ payload: { country, onSuccess, onFailure } }) {
  try {
    const { data, status } = yield call(covidService.getStatistics, country);
    if (status !== 200 || data.message !== "OK") throw errors;

    yield put(covidActions.setStatistics({
      key: country,
      data: data.data
    }))


    if (onSuccess) onSuccess();
  } catch (e) {
    if (onFailure) onFailure(e);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(covidActions.getStatisticsRequest.type, getStatisticsSaga),
  ]);
}
