import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));