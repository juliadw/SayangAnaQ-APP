import {
  SET_FORM_LOGIN,
  SUBMIT_LOGIN_ERROR,
  SUBMIT_LOGIN_REQUESTED,
  SUBMIT_LOGIN_SUCCESS
} from './types'

import {API_APP_URL} from '@env'
import Axios from 'axios';

export function setFormLogin(inputType, value) {
  return {
    type: SET_FORM_LOGIN,
    inputType: inputType,
    inputValue: value,
  };
}

export function submitLoginRequested () {
  return {
    type: SUBMIT_LOGIN_REQUESTED
  };
}

export function submitLoginSuccess (payload) {
  return {
    type: SUBMIT_LOGIN_SUCCESS,
    payload
  };
}

export function submitLoginError (error) {
  return {
    type: SUBMIT_LOGIN_ERROR,
    error
  };
}