import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(providerFunctions);
  return (
    <div className="login-page">
      <div className="row">
        <div className="col-md-12 mt-3">
          <span className="reachio-logo">
            <img src="assets/img/Group-73.png" alt="" />
          </span>
          <div className="page-text mt-5">
            <p>Login to access dashboard</p>
          </div>
          <div className="rectangle-5 mt-3">
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control input-bx"
                  onChange={(e) => setUsername(e.target.value)}
                  id="exampleInputEmail1"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control input-bx"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span>
                  <Link to="/resetpassword" className="forgot-pass">
                    Forgot Password?
                  </Link>
                </span>
                <span>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label login-pg"
                    htmlFor="exampleCheck1"
                    style={{ paddingRight: "5px" }}
                  >
                    Remember me
                  </label>
                </span>
              </div>
              <button
                className="mt-4 submit-btn"
                type="button"
                onClick={() => login(username, password)}
              >
                Login to dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
