import produce from 'immer';

import {
  SIGN_IN_FACEBOOK_FAILURE,
  SIGN_IN_FACEBOOK_REQUEST,
  SIGN_IN_FACEBOOK_SUCCESS,
} from '../types';

const INITIAL_STATE = {
  user: null,
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case action.type === SIGN_IN_FACEBOOK_REQUEST: {
        break;
      }
      case action.type === SIGN_IN_FACEBOOK_SUCCESS: {
        draft.user = action.payload.user;
        break;
      }
      case action.type === SIGN_IN_FACEBOOK_FAILURE: {
        break;
      }
      default:
    }
  });
}
