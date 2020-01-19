import {
  SIGN_IN_FACEBOOK_FAILURE,
  SIGN_IN_FACEBOOK_REQUEST,
  SIGN_IN_FACEBOOK_SUCCESS,
} from '../types';

export function signInFacebookRequest() {
  return {
    type: SIGN_IN_FACEBOOK_REQUEST,
  };
}

export function signInFacebookSuccess(user) {
  return {
    type: SIGN_IN_FACEBOOK_SUCCESS,
    payload: { user },
  };
}

export function signInFacebookFailure() {
  return {
    type: SIGN_IN_FACEBOOK_FAILURE,
  };
}
