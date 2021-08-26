import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const initialValues = { username: "", password: "" };

const Login = () => {
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState('');

  const handleChanges = e => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
  };

  const handleSubmit = e => {
      e.preventDefault();
      axios
          .post(`https://bw-water-my-plants-07-back-end.herokuapp.com/api/auth/login`, formValues)
          .then((res) => {
              if (res.data.token) {
                  window.localStorage.setItem('token', res.data.token);
                    // ⬇⬇⬇ GET RID OF THIS AFTER DEVELOPMENT - HUGE SECURITY RISK !
                    console.log(`Login successful. Token generated: ${res.data.token}`);
                    push('/home');
              } else { setError("Invalid Credentials") }
          })
          .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h1>Welcome to Water Your Plants!</h1>
      <div className="login-form">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            data-testid="username"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChanges}
          >
          </input>

          <label htmlFor="password">Password</label>
          <input            
            data-testid="password"
            id="password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChanges}
          >
          </input>

          <button>Login</button>
        </form>
      </div>

      <p className="error">{error}</p>
    </div>
  );
};

export default Login;