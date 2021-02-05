import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sorry...</h1>
      <br></br>
      <h6>{"This page doesn't seem to exist :("}</h6>
      <br></br>
      <h4>
        <Link to="/">Click here</Link> to return to the home page!
      </h4>
    </div>
  );
}

export default NotFoundPage;
