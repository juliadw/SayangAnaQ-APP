import {
    FETCH_DASHBOARD_MENU,
    FETCH_DASHBOARD_MENU_ERROR,
    FETCH_DASHBOARD_MENU_SUCCESS
} from '../Actions/types';

const initialState = {
    loading: false,
    error: null,
    data: []
}

const DashboardMenuReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_DASHBOARD_MENU:
    return {
      ...state,
      loading: true,
      error: null
    }
    case FETCH_DASHBOARD_MENU_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      data: action.payload
    }
    case FETCH_DASHBOARD_MENU_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        data: []
      }
    default: 
      return state;
  }
}

export default DashboardMenuReducer;