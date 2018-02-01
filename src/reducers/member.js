// users reducer
import { MemberConstants } from '../constants';

const initialState = {
  isRunning: false,
  isLoaded: false,
  endpoint: '',
  member: {},
};

export default function members(state = initialState, action) {
  switch (action.type) {
    case MemberConstants.MEMBER_FETCH_REQUEST:
    const endpoint = action.payload.endpoint;
      return {
        ...state,
        endpoint,
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