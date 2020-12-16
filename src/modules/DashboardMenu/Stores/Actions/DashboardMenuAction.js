import {
    FETCH_DASHBOARD_MENU,
    FETCH_DASHBOARD_MENU_ERROR,
    FETCH_DASHBOARD_MENU_SUCCESS
} from './types';

import {API_APP_URL} from '@env';
import Axios from 'axios';

export const fetchDashboardMenu = () => ({
    type: FETCH_DASHBOARD_MENU
  })
  
  export const fetchDashboardMenuSuccess = (payload) => ({
    type: FETCH_DASHBOARD_MENU_SUCCESS,
    payload
  })
  
  export const fetchDashboardMenuError = error => ({
    type: FETCH_DASHBOARD_MENU_ERROR,
    error
  })
  
  export const getDashboardMenu = () => dispatch => {
    dispatch(fetchDashboardMenu());
      Axios.get(`${API_APP_URL}/article`,
    ).then(data => {
        if(!data.error){
          dispatch(fetchDashboardMenuSuccess(data))
        }else{
          dispatch(fetchDashboardMenuError(data.error))
        }
    })
  };