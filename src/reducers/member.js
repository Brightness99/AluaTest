// users reducer
import { MemberConstants } from '../constants';

const initialState = {
  isRunning: false,
  isLoaded: false,
  offset: 0,
  member: {},
};

export default function members(state = initialState, action) {
  switch (action.type) {
    case MemberConstants.MEMBER_FETCH_REQUEST:
    const offset = action.payload.offset;
      return {
        ...state,
        offset,
        isRunning: true,
        isLoaded: false,
      };

    case MemberConstants.MEMBER_FETCH_SUCCESS:
      const member = action.member;
      return {
        ...state,
        member: member,
        isRunning: false,
        isLoaded: true,
      };

    case MemberConstants.MEMBER_FETCH_FAIL:
      return {
        ...state,
        member: null,
        isRunning: false,
        isLoaded: true,
      };
      break;

    // initial state
    default:
      return state;
  }
}