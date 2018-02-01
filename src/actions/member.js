// @flow
/**
 * @module Actions/Member
 * @desc Actions for Member
**/

import { MemberConstants } from '../constants';

/**
 * Login
 * @param endpoint
 *
 * @returns {Object}
**/

export function getMembers(endpoint): Object {
  return {
    type: MemberConstants.MEMBER_FETCH_REQUEST,
    payload: {
      endpoint: endpoint,
    }
  }
}