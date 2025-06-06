import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const { setUser } = useContext(UserContext);

  const submitform = (e) => {
    e.preventDefault();
    setUser({ username, pass });
  };

  return (
    <div>
      <h2>Login Form</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button onClick={submitform}>SUBMIT</button>
    </div>
  );
}

export default Login;
