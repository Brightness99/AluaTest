// @flow
/**
 * @module Actions/Member
 * @desc Actions for Member
**/

import { MemberConstants } from '../constants';

/**
 * Login
 * @param null
 *
 * @returns {Object}
**/

export function getMembers(): Object {
  return {
    type: MemberConstants.MEMBER_FETCH_REQUEST,
    payload: {}
  }
}