// users reducer
import { NavConstants } from '../constants';

const initialState = {
  member: {
    from: '',
    to: '',
    scroll: 0,
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
    case NavConstants.NAVIGATE_TO:
      const backInfo = action.payload.backInfo;
      return {
        ...state,
        from: backInfo.from,
        to: backInfo.to,
        params: {},
      };
    default:
      return state;
  }
}