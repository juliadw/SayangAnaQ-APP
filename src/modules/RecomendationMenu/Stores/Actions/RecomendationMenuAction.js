import {
    FETCH_RECOMENDATION_MENU,
    FETCH_RECOMENDATION_MENU_ERROR,
    FETCH_RECOMENDATION_MENU_SUCCESS
} from './types';

import {API_APP_URL} from '@env';
import Axios from 'axios';

export const fetchRecomendationMenu = () => ({
    type: FETCH_RECOMENDATION_MENU
})

export const fetchRecomendationMenuSuccess = (payload) => ({
    type: FETCH_RECOMENDATION_MENU_SUCCESS,
    payload
})

export const fetchRecomendationMenuError = error => ({
    type: FETCH_RECOMENDATION_MENU_ERROR,
    error
})
  
  export const getRecomendationMenu = () => dispatch => {
    dispatch(fetchRecomendationMenu());
    try {
      Axios.get(`${API_APP_URL}/menu`)
      .then(data => {
        if(!data.error){
          dispatch(fetchRecomendationMenuSuccess(data))
        }else{
          dispatch(fetchRecomendationMenuError(data.error))
        }
      })
    } catch (error) {
      console.log(error);
    }
  };