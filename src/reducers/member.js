// users reducer

const initialState = {
  isRunning: false,
  isLoaded: false,
  member: {},
};

export default function members(state = initialState, action) {
  switch (action.type) {
    case 'MEMBER_FETCH_REQUEST':
      return {
        ...state,
        isRunning: true,
        isLoaded: false,
      };

    case 'MEMBER_FETCH_SUCCESS':
      const member = action.member;
      return {
        member: member,
        isRunning: false,
        isLoaded: true,
      };

    case 'MEMBER_FETCH_FAIL':
      return {
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