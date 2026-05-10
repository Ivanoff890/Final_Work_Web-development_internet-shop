import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
} from './actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_ORDER_SUCCESS:
      return { ...state, loading: false, items: [...state.items, action.payload] };
    case CREATE_ORDER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default ordersReducer;