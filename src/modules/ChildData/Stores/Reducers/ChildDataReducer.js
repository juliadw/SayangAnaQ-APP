import {
  DELETE_CHILD_DATA,
  DELETE_CHILD_DATA_ERROR,
  DELETE_CHILD_DATA_SUCCESS,
  FETCH_CHILD_DATA,
  FETCH_CHILD_DATA_ERROR,
  FETCH_CHILD_DATA_SUCCESS
} from '../Actions/types';

const initialState = {
    loading: false,
    error: null,
    data: [],
    selectIdData: ''
}

const ChildDataReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_CHILD_DATA:
    return {
      ...state,
      loading: true,
      error: null
    }
    case FETCH_CHILD_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      data: action.payload
    }
    case FETCH_CHILD_DATA_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
      data: []
    }
    case DELETE_CHILD_DATA:
    return {
      ...state,
      loading: true,
      error: null
    }
    case DELETE_CHILD_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      selectIdData: action.id
    }
    case DELETE_CHILD_DATA_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
      selectIdData: ''
    }
    default: 
      return state;
  }
}

export default ChildDataReducer;