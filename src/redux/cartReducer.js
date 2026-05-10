import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY, CLEAR_CART } from './actionTypes';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case REMOVE_FROM_CART:
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case CLEAR_CART:
      return { ...state, items: [] };
    default:
      return state;
  }
};

export default cartReducer;