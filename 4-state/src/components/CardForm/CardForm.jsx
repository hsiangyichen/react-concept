import React, { useState } from "react";
import "./CardForm.scss";

const CardForm = ({ addCard }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    addCard(title, content);

    console.log("Title:", title);
    console.log("Content:", content);

    event.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          required
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          required
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CardForm;
