import {FETCH_INGREDIENTS, FETCH_INGREDIENTS_ERROR, FETCH_INGREDIENTS_SUCCESS} from '../Actions/types';

const initialState = {
    loading: false,
    error: null,
    data: []
}

const ListIngredientReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_INGREDIENTS:
    return {
      ...state,
      loading: true,
      error: null
    }
    case FETCH_INGREDIENTS_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      data: action.payload
    }
    case FETCH_INGREDIENTS_ERROR:
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

export default ListIngredientReducer;