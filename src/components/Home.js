import React from "react";
import "../assets/homepage.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { auth } from "../config";
import { Link } from "react-router-dom";

function Home(props) {
  const signOut = (event) => {
    event.preventDefault();
    setTimeout(() => {
      auth.signOut();
    }, 3000);
  };

  return (
    <>
      <div className="generate-quote-container">
        <div className="current-user">
          <p>Hi, {props.displayName}</p>
          <button onClick={signOut}>
            <BiLogOut size={17} />
          </button>
        </div>
        <Link to="/generate" className="generate-quote">
          Generate Quote
        </Link>
      </div>
      <div className="home">
        <hr></hr>
        <p className="quote">
          Bad programmers worry about the code. Good programmers worry about the
          data structure and their relationships
        </p>
        <hr></hr>
        <p className="author">LINUS TORVALDS</p>

        <div className="control-button">
          <button>
            <FiChevronLeft size={30} />
          </button>
          <button>
            <FiChevronRight size={30} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
