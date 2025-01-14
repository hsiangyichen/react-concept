import React, { useState } from "react";

const CardForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();

    const title = event.target.elements.titleValue.value;
    const content = event.target.elements.contentValue.value;
    console.log("Title:", title);
    console.log("Content:", content);

    event.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="titleValue" required />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="contentValue" required></textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CardForm;
