// users reducer
import { NavConstants } from '../constants';

const initialState = {
  member: {
    from: '',
    to: '',
    params: {},
  }
};

export default function nav(state = initialState, action) {
  switch (action.type) {
    case NavConstants.NAVIGATE_TO:
      const member = action.payload.member;
      return {
        member
      };
    default:
      return state;
  }
}