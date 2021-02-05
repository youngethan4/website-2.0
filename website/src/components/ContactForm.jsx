import React, { useState } from "react";
import { connect } from "react-redux";
import { sendMessage } from "../redux/actions/messageActions";
import "../scss/eStyle.scss";
import "../scss/form.scss";

const ContactForm = ({ sendMessage, messageSent, messageError }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage(formData);
  };
  return (
    <div>
      <div className="content">
        <div className="formBody">
          <p className="formTitle">
            <strong>Send me a message</strong>
          </p>
          <p className="success">
            {messageSent ? "Message sent successfully." : ""}
          </p>
          <p className="error">
            {messageError ? "Error sending message, please try again." : ""}
          </p>
          <form id="myForm" onSubmit={onSubmit}>
            Name:
            <br></br>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
            <br></br>
            Email:
            <br></br>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <br></br>
            Message:
            <br></br>
            <textarea name="message" value={message} onChange={handleChange} />
            <br></br>
            <input className="button" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  messageSent: state.message.messageSent,
  messageError: state.message.messageError,
});

const mapDispatchToProps = {
  sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
