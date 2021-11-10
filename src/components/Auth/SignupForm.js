import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "./SignupForm.css"
// import { useAuth } from "./AuthContext"
import {
  auth, signUp,
} from '../../firebase';


function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const signup = () => {
    if (!name) alert("Please enter name");
    if (/@rpi.edu\s*$/.test(email) === false) {
      alert("Please enter rpi email");
    }else if (password !== passwordConfirmation) alert("Passwords don't match");
    else signUp(name, email, password);
  }
  console.log('this is auth', auth);

  useEffect(() => {
    console.log('user in the signup', user);
    if (loading) return;
    if (user) history.replace("/");
  }, [user, loading]);

  return (
    <div className="signup">
      <div className="signupContainer">
        <h1>Sign Up</h1>
        <div className="signupText" >Full Name</div>
        <input
          type="text"
          className="signupTextBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
        />
        <div className="signupText" >Email</div>
        <input
          type="text"
          className="signupTextBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="rcsid@rpi.edu"
        />

        <div className="signupText" >Password</div>
        <input
          type="password"
          className="signupTextBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="signupText" >Password Confirmation</div>
        <input
          type="password"
          className="signupTextBox"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Password"
        />
        <div style={{
          fontSize: "12px", marginTop: "0px",marginBottom: "10px"
        }}>Use 6 or more characters with letters, numbers & symbols</div>

        <button className="signupBtn" onClick={signup}>
          Sign Up
        </button>

        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
  );
}

export default SignupForm;