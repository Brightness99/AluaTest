// @flow
/**
 * @module Actions/Member
 * @desc Actions for Member
**/

import { MemberConstants } from '../constants';

/**
 * Login
 * @param offset
 *
 * @returns {Object}
**/

export function getMembers(offset): Object {
  return {
    type: MemberConstants.MEMBER_FETCH_REQUEST,
    payload: {
      offset: offset
    }
  }
}