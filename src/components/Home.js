import React, { useEffect, useState } from "react";
import "../assets/homepage.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { auth } from "../config";
import { Link } from "react-router-dom";
import axios from "axios";

function Home(props) {
  const [quote, setQuote] = useState(
    "Bad programmers worry about the code. Good programmers worry about the data structure and their relationships"
  );
  const [author, setAuthor] = useState("LINUS TORVALDS");
  const [count, setCount] = useState(0);

  const signOut = (event) => {
    event.preventDefault();
    setTimeout(() => {
      auth.signOut();
    }, 3000);
  };

  useEffect(() => {
    axios
      .get("https://goquotes-api.herokuapp.com/api/v1/random?count=50")
      .then((response) => {
        for (let i = 0; i < 50; i++) {
          sessionStorage.setItem(i, JSON.stringify(response.data.quotes[i]));
        }
        console.log(response);
      });
  }, []);

  const nextQuote = (event) => {
    event.preventDefault();
    if (count === sessionStorage.length) setCount(0);
    console.log(sessionStorage.length);
    var storageQuote = JSON.parse(sessionStorage.getItem(count.toString()));
    setQuote(storageQuote.text);
    setAuthor(storageQuote.author.toUpperCase());
    setCount((prev) => prev + 1);
  };

  const previousQuote = (event) => {
    event.preventDefault();
    if (count > 0) {
      setCount((prev) => prev - 1);
      var storageQuote = JSON.parse(sessionStorage.getItem(count.toString()));
      setQuote(storageQuote.text);
      setAuthor(storageQuote.author.toUpperCase());
    }
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
        <p className="quote">{quote}</p>
        <hr></hr>
        <p className="author">{author}</p>

        <div className="control-button">
          <button onClick={previousQuote}>
            <FiChevronLeft size={30} />
          </button>
          <button onClick={nextQuote}>
            <FiChevronRight size={30} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
