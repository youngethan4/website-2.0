import {
  MESSAGE_SENT_SUCCESS,
  MESSAGE_SENT_FAILED,
  MESSAGE_STATE_RESET,
} from "./actionTypes";
import axios from "axios";
const API_URL =
  process.env.REACT_APP_API_URL + process.env.REACT_APP_CONTACT_ENDPOINT;

export const sendMessage = (data) => async (dispatch) => {
  try {
    await axios.post(API_URL, data);
    dispatch({ type: MESSAGE_SENT_SUCCESS });
  } catch (error) {
    console.error(error);
    dispatch({ type: MESSAGE_SENT_FAILED });
  }
};

export const resetMessageState = () => (dispatch) => {
  dispatch({ type: MESSAGE_STATE_RESET });
};
