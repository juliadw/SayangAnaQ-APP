import {
  FETCH_INGREDIENTS,
  FETCH_INGREDIENTS_ERROR,
  FETCH_INGREDIENTS_SUCCESS
} from './types';

import {API_APP_URL} from '@env';
import Axios from 'axios';

export const fetchIngredient = () => ({
  type: FETCH_INGREDIENTS
})

export const fetchIngredientSuccess = (payload) => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  payload
})

export const fetchIngredientError = error => ({
  type: FETCH_INGREDIENTS_ERROR,
  error
})

export const getIngredients = () => dispatch => {
  dispatch(fetchIngredient());
  try {
    Axios.get(`${API_APP_URL}/listIngredients`)
    .then(data => {
      if(!data.error){
        dispatch(fetchIngredientSuccess(data))
      }else{
        dispatch(fetchIngredientError(data.error))
      }
    })
  } catch (error) {
    console.log(error);
  }
};