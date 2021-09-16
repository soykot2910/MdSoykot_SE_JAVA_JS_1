import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {});

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-wrapper">
      <div className="container py-5">
        <div className="login-form p-5 rounded-2">
          <h2 className="pb-3 text-center">Sign In</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                className="form-control"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid ">
              <button className="btn btn-submit p-2" type="submit">
                CONTINUE
              </button>
            </div>
            <div className="d-flex justify-content-between py-3">
              <p className="">
                New User?
                <Link to="/register" className="ms-1">
                  Signup
                </Link>
              </p>
              <a href="e">Forgot your password</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
