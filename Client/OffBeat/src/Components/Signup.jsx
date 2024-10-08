import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";

function App() {
  const [signupError, setSignupError] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { password } = data;

    if (password.length < 10) {
      setSignupError("Password should be more than 10 characters");
      return;
    }

    setSignupSuccess(true);
    sessionStorage.setItem('login', true);
    sessionStorage.setItem('username', data.username);
    navigate("/cards"); // Redirect to home or desired page on successful signup
  };

  return (
    <div>
      <div>
        <nav>
          <div className="logo">SIGNUP Page</div>
        </nav>
      </div>
      <div className="contain">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="app">
            {signupSuccess && <p className="success">REGISTRATION SUCCESSFUL!</p>}
            {signupError && <p className="error">{signupError}</p>}

            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              {...register("username", {
                required: "Username is Required!",
                minLength: {
                  value: 3,
                  message: "username must be more than 3 characters",
                },
                maxLength: {
                  value: 30,
                  message: "username must be less than 30 characters",
                },
              })}
            />
            {errors.username && <p className="mon">{errors.username.message}</p>}

            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is Required!",
                minLength: {
                  value: 10,
                  message: "Password must be more than 10 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Password must be less than 30 characters",
                },
                pattern: {
                  value: /.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-].*/,
                  message: "Please include at least one special character",
                },
              })}
            />
            {errors.password && <p className="mon">{errors.password.message}</p>}

            <div className="button">
              <input type="submit" value="SIGNUP" />
            </div>

            <p className="usser">
              Already a user? <NavLink to="/login" className="signup-link">Login</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
