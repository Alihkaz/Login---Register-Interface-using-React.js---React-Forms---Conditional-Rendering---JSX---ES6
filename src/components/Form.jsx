import React from "react";
import Input from "./input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />

      {props.status === "Register" ? (
        <div>
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
        </div>
      ) : (
        <div>
          <Input type="password" placeholder="Password" />
        </div>
      )}


      <button type="submit">{props.status}</button>
    </form>
  );
}

export default Form;
