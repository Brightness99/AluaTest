import { call, put } from "redux-saga/effects";
import ApiMember from "../api/member";

// fetch the user's list
export function* memberFetch(action) {
  // call the api to get the users list
  const { payload } = action;
  const member = yield call(ApiMember.getMember, payload);
  yield put({
    type: 'MEMBER_FETCH_SUCCESS',
    member: member,
  });
}
