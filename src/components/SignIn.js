import React, { useEffect, useState } from "react";
import Home from "./Home";
import "../assets/signin.css";
import {
  auth,
  provider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
} from "../config";

function SignIn() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  const signIn = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) console.log(result.user);
        else {
          //...
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedIn(true);
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <Home displayName={user.displayName} />
      ) : (
        <div className="welcome-page">
          <div className="logo">
            <p>"Kwotes"</p>
          </div>
          <div className="welcome-back">
            <h1>Welcome back!</h1>
            <p>Hello, kindly sign-in with google to gain access</p>
            <button onClick={signIn}>Sign In</button>
          </div>
        </div>
      )}
    </>
  );
}

export default SignIn;
