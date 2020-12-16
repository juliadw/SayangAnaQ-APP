import {
    FETCH_RECOMENDATION_MENU,
    FETCH_RECOMENDATION_MENU_ERROR,
    FETCH_RECOMENDATION_MENU_SUCCESS
} from '../Actions/types';

const initialState = {
    loading: false,
    error: null,
    data: []
}

const RecomendationMenuReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_RECOMENDATION_MENU:
        return {
          ...state,
          loading: true,
          error: null
        }
        case FETCH_RECOMENDATION_MENU_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          data: action.payload
        }
        case FETCH_RECOMENDATION_MENU_ERROR:
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

export default RecomendationMenuReducer
