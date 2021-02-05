import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <div>
      <Header active="contact" />
      <ContactForm />
    </div>
  );
}

export default ContactPage;
