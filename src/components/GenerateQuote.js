import React from "react";
import "../assets/generatorpage.css";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

function GenerateQuote() {
  return (
    <>
      <div className="back-home">
        <Link to="/">
          <FiArrowLeft size={25} />
        </Link>
      </div>
      <div className="generate-quotes">
        <div className="quote-input">
          <p>Enter Quote:</p>
          <textarea type="text" maxLength={300}>
            "Siri Ekpnum Ekpnum Sallai Mai"
          </textarea>
        </div>

        <div className="author-input">
          <p>Author:</p>
          <textarea type="text" maxLength={30}>
            - Sanu Habib
          </textarea>
        </div>

        <div>
          <button>Generate</button>
        </div>
      </div>
    </>
  );
}

export default GenerateQuote;
