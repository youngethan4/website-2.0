import {
  MESSAGE_SENT_SUCCESS,
  MESSAGE_SENT_FAILED,
  MESSAGE_STATE_RESET,
} from "../actions/actionTypes";

const initialState = {
  messageSent: false,
  messageError: false,
};

const messageReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case MESSAGE_SENT_SUCCESS:
      return { messageSent: true, messageError: false };
    case MESSAGE_SENT_FAILED:
      return { messageSent: false, messageError: true };
    case MESSAGE_STATE_RESET:
      return { messageSent: false, messageError: false };
    default:
      return state;
  }
};

export default messageReducer;
