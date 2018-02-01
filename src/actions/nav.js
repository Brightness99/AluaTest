// @flow
/**
 * @module Actions/Nav
 * @desc Actions for Nav
**/

import { NavConstants } from '../constants';

/**
 * navigateTo
 * @param member
 *
 * @returns {Object}
**/

export function navigateTo(member): Object {
  return {
    type: NavConstants.NAVIGATE_TO,
    payload: {
      member
    }
  }
}


