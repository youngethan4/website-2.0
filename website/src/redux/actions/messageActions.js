import { MESSAGE_SENT_SUCCESS, MESSAGE_SENT_FAILED } from "./actionTypes";
import axios from "axios";
const API_URL = "http://localhost:3003/api/contact";

export const sendMessage = (data) => async (dispatch) => {
  try {
    await axios.post(API_URL, data);
    dispatch({ type: MESSAGE_SENT_SUCCESS });
  } catch (error) {
    console.error(error);
    dispatch({ type: MESSAGE_SENT_FAILED });
  }
};
