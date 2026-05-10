import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './actionTypes';

const API_PRODUCTS = 'http://localhost:8001/products';

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await fetch(API_PRODUCTS);
    if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
    const data = await response.json();
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
};