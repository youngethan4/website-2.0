import React from "react";
import { connect } from "react-redux";
import { resetMessageState } from "../redux/actions/messageActions";

export const ContactHandler = ({
  messageSent,
  messageError,
  resetMessageState,
}) => {
  if (messageError || messageSent) {
    setTimeout(() => {
      resetMessageState();
    }, 5000);
  }

  const success = <p className="success">Message sent successfully.</p>;

  const error = <p className="error">Error sending message.</p>;

  return (
    <div>
      {messageSent ? success : ""}
      {messageError ? error : ""}
    </div>
  );
};

const mapStateToProps = (state) => ({
  messageSent: state.message.messageSent,
  messageError: state.message.messageError,
});

const mapDispatchToProps = {
  resetMessageState,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactHandler);
