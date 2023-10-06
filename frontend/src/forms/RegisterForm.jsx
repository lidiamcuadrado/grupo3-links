// Importamos los prop-types.
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// Importamos los hooks.
import { useState } from "react";
import { getToken } from "../utils/getToken";

const RegisterForm = ({ authRegister, loading }) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/users/login`;
    navigate(path);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="auth-form-container">
        <h1>WeShare!</h1>

        <div className="auth-form">

        <h2>Register</h2>
        <form
          className="register-form"
          onSubmit={(e) => {
            e.preventDefault();
            authRegister(username, email, password);
            const token = getToken();
            console.log(token);
          }}
        >

          <label htmlFor="username">Username</label>
          <input
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            placeholder="Username"
=======
          <label htmlFor="name">Username</label>
          <input
            value={username}
            name="name"
            onChange={(e) => setUsername(e.target.value)}
            id="name"
            placeholder="User name"

            autoFocus
            required
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
          />
          <button className="log" disabled={loading}>
            Register
          </button>
        </form>
        <button className="link-btn" onClick={routeChange}>
          Already have an account? Login here.
        </button>

        </div>

      </div>
    </>
  );
};

RegisterForm.propTypes = {
  authRegister: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default RegisterForm;
