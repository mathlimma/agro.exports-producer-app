import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as Facebook from 'expo-facebook';
import axios from 'axios';
import { SIGN_IN_FACEBOOK_REQUEST } from '../types';
import api from '../../../services/api';
import * as authActions from './actions';

export function* signInRequest() {
  try {
    yield call(Facebook.initializeAsync, '2765038933518909');
    const login = yield call(Facebook.logInWithReadPermissionsAsync, {
      permissions: ['public_profile'],
    });

    if (login.type === 'success') {
      const user = yield call(
        axios.get,
        `https://graph.facebook.com/me?fields=id,name,email,birthday,picture.height(150).width(150)&access_token=${login.token}`
      );
      const { name, id, picture, email } = user.data;
      const response = yield call(api.post, 'auth', {
        fullname: name,
        facebook_id: id,
        photo_url: picture.data.url,
        email,
      });

      yield put(authActions.signInFacebookSuccess(response.data));
    }
  } catch (error) {
    console.tron.log(error);
    yield put(authActions.signInFacebookFailure());
  }
}
export default all([takeLatest(SIGN_IN_FACEBOOK_REQUEST, signInRequest)]);
