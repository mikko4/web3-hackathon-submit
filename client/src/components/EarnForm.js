import React, { useState } from "react";
import "../styles/EarnForm.css";

const EarnForm = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const codes = new Map();
  codes.set("swag", 1);
  codes.set("money", 69);

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = inputText.title.trim();
    if (validateCode(input)) {
      props.rewardUser(codes.get(input));
      setInputText({
        title: "",
      });
    }
  };

  const validateCode = (s) => {
    return codes.has(s);
  };

  return (
    <form id="earn-form" action="/checkValidCode" method="POST">
      <input
        type="text"
        id="code-input"
        placeholder="Enter code..."
        value={inputText.title}
        name="title"
        onChange={onChange}
        required
      ></input>
      <button
        id="code-submit"
        type="submit"
        onClick={handleSubmit}
      >
        Earn Tokens
      </button>
    </form>
  );
};

export default EarnForm;
