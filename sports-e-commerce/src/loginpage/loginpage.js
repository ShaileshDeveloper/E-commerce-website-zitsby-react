import React from "react";
import logoimg from "../images/logo-white.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./loginpage.css";
import { auth } from "../firebase";


function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const authVerificationForSigningAccount =
        await auth.signInWithEmailAndPassword(email, password);
      if (authVerificationForSigningAccount) {
        console.log("shailesh")
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert(error.message, "dobara karo toh");
    }
  };


  const registerSubmit = async (e) => {
    e.preventDefault();

    try {
      const authVerificationForCreatingAccount =
        await auth.createUserWithEmailAndPassword(email, password);
      if (authVerificationForCreatingAccount) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }

    // console.log("shailesh")
    //  auth.createUserWithEmailAndPassword(email , password).then((auth) => {console.log(auth)}).catch((err) =>alert(err.message))
  };

  return (
    <>
      <div className="login__logo__container">
        <div className="login__logo">
          <NavLink to="/">
            <img src={logoimg} alt="ss" />
          </NavLink>
        </div>
      </div>
      <div className="login__container__body">
        <div className="login__container">
          <form>
            <h5>Username</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login__signInButton">
              <button type="submit" onClick={(e) => loginSubmit(e)}>
                Sign-in
              </button>
            </div>
          </form>
          <p>
            This is going to be a rollercoaster <br />
            ride for you .. are you ready
          </p>
          <button
            className="login__signUpButton"
            type="submit"
            onClick={(e) => registerSubmit(e)}
          >
            Create your redstore account
          </button>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
