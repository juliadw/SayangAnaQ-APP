import {
  SET_FORM_REGISTER,
  SUBMIT_REGISTER_ERROR,
  SUBMIT_REGISTER_REQUESTED,
  SUBMIT_REGISTER_SUCCESS
} from './types'

import {API_APP_URL} from '@env'
import Axios from 'axios';

export function setFormSignUp(inputType, value) {
  return {
    type: SET_FORM_REGISTER,
    inputType: inputType,
    inputValue: value,
  };
}

export function submitRegisterRequested () {
  return {
    type: SUBMIT_REGISTER_REQUESTED
  };
}

export function submitRegisterSuccess (payload) {
  return {
    type: SUBMIT_REGISTER_SUCCESS,
    payload
  };
}

export function submitRegisterError (error) {
  return {
    type: SUBMIT_REGISTER_ERROR,
    error
  };
}

export const postDataUser = (form) => dispatch => {
  dispatch(submitRegisterRequested(form));
  try {
    Axios.post(`${API_APP_URL}/users`, form)
    .then(data => {
     if(!data.error){
       dispatch(submitRegisterSuccess(data))
     }else{
       dispatch(submitRegisterError(data.error))
     }
  })  
  } catch (error) {
    console.log(error);
  }
};