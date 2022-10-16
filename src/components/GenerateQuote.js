import React from "react";
import "../assets/generatorpage.css";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

function GenerateQuote() {
  const [quote, setQuote] = useState({ value: "" });
  const [author, setAuthor] = useState({ value: "" });
  const [count, setCount] = useState(51);

  const generate = (event) => {
    event.preventDefault();
    sessionStorage.setItem(
      count,
      JSON.stringify({ text: quote.value, author: author.value })
    );
    setCount((prev) => prev + 1);
  };

  const handleQuote = (event) => {
    event.preventDefault();
    setQuote({ value: event.target.value });
  };

  const handleAuthor = (event) => {
    event.preventDefault();
    setAuthor({ value: event.target.value });
  };

  return (
    <>
      <div className="back-home">
        <Link to="/">
          <FiArrowLeft size={25} />
        </Link>
      </div>
      <form onSubmit={generate}>
        <div className="generate-quotes">
          <div className="quote-input">
            <p>Enter Quote:</p>
            <textarea
              type="text"
              maxLength={300}
              placeholder='"Siri Ekpnum Ekpnum Sallai Mai"'
              value={quote.value}
              onChange={handleQuote}
            ></textarea>
          </div>

          <div className="author-input">
            <p>Author:</p>
            <textarea
              type="text"
              maxLength={30}
              placeholder="- Sanu Habib"
              value={author.value}
              onChange={handleAuthor}
            ></textarea>
          </div>

          <div>
            <input type="submit" value="Generate" />
          </div>
        </div>
      </form>
    </>
  );
}

export default GenerateQuote;
