import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/");
  }, [user, loading]);

  return (
    <div className="login">
      <div className="loginContainer">
        <h1>Log In</h1>
        <div className="signupText" >Email</div>
        <input
          type="text"
          className="loginTextBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="rcsid@rpi.edu"
        />
        <div className="signupText" >Password</div>
        <input
          type="password"
          className="loginTextBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="loginBtn"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/signup">Sign Up</Link> now.
        </div>
      </div>
    </div>
  );
}

export default LoginForm;