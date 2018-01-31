import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { memberFetch } from "./member";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'MEMBER_FETCH_REQUEST', memberFetch),
  ];
}