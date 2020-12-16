import {
  ADD_CHILD_DATA,
  ADD_CHILD_DATA_ERROR,
  ADD_CHILD_DATA_SUCCESS,
  DELETE_CHILD_DATA,
  DELETE_CHILD_DATA_ERROR,
  DELETE_CHILD_DATA_SUCCESS,
  FETCH_CHILD_DATA,
  FETCH_CHILD_DATA_ERROR,
  FETCH_CHILD_DATA_SUCCESS,
  SET_FORM_CHILD_DATA
} from './types';

import {API_APP_URL} from '@env';
import Axios from 'axios';
import { ToastAndroid } from 'react-native';

export const fetchChildData = () => ({
  type: FETCH_CHILD_DATA
})

export const fetchChildDataSuccess = (payload) => ({
  type: FETCH_CHILD_DATA_SUCCESS,
  payload
})

export const fetchChildDataError = error => ({
  type: FETCH_CHILD_DATA_ERROR,
  error
})
export const deletedChildData = () => ({
  type: DELETE_CHILD_DATA
})

export const deletedChildDataSuccess = (id) => ({
  type: DELETE_CHILD_DATA_SUCCESS,
  id
})

export const deletedChildDataError = error => ({
  type: DELETE_CHILD_DATA_ERROR,
  error
})

export const setFormChildData = (inputType, value) => ({
  type: SET_FORM_CHILD_DATA,
  inputType: inputType,
  inputValue: value,
})

export const addChildData = () => ({
  type: ADD_CHILD_DATA
})

export const addChildDataSuccess = (payload) => ({
  type: ADD_CHILD_DATA_SUCCESS,
  payload
})

export const addChildDataError = error => ({
  type: ADD_CHILD_DATA_ERROR,
  error
})

export const getChildData = () => dispatch => {
  dispatch(fetchChildData());
  try {
    Axios.get(`${API_APP_URL}/childData`)
    .then(data => {
      if(!data.error){
        dispatch(fetchChildDataSuccess(data))
      }else{
        dispatch(fetchChildDataError(data.error))
      }
    })
  } catch (error) {
    console.log(error);
  }
};

export const deleteChildDataId = (item) => dispatch => {
  dispatch(deletedChildData());
  try {
    Axios.delete(`${API_APP_URL}/childData/${item.id}`)
    .then(data => {
      if(!data.error){
        dispatch(deletedChildDataSuccess(data))
        dispatch(getChildData())
        ToastAndroid.show('Sukses', ToastAndroid.SHORT);
      }else{
        dispatch(deletedChildDataError(data.error))
        ToastAndroid.show('Gagal', ToastAndroid.SHORT);
      }
    })
  } catch (error) {
    console.log(error);
  }
};