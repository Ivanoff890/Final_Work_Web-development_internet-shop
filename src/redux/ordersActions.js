import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
} from './actionTypes';

const API_ORDERS = 'http://localhost:8002/orders';

export const createOrder = (orderData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    const response = await fetch(API_ORDERS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });
    if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
    const data = await response.json();
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
    throw error;
  }
};