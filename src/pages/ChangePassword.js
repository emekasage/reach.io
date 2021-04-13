import React, { useContext, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { providerFunctions } from "../provider/FunctionsProvider";
export default function ChangePassword() {
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");
  console.log(token);

  const {
    changePassword,
    changePass,
    setChangePass,
    setPasswordToken,
  } = useContext(providerFunctions);
  useEffect(() => {
    console.log(token);
    setPasswordToken(token);
    var pwt = "";
    handleChangePassword(pwt, "passwordToken");
  }, []);
  const handleChangePassword = (value, key) => {
    var cp = { ...changePass };
    cp[key] = value;
    setChangePass(cp);
  };

  return (
    <div className="login-page">
      <div className="row">
        <div className="col-md-12 mt-3">
          <span className="reachio-logo">
            <img src="assets/img/Group-73.png" alt="" />
          </span>
          <div className="page-text mt-5">
            <p>Change Password</p>
          </div>
          <div className="rectangle-5 mt-3">
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control input-bx"
                  name="email"
                  onChange={(e) =>
                    handleChangePassword(e.target.value, e.target.name)
                  }
                  id="user-email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control input-bx"
                  name="password"
                  id="user-password"
                  onChange={(e) =>
                    handleChangePassword(e.target.value, e.target.name)
                  }
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control input-bx"
                  name="password_confirmation"
                  id="user-confirm-password"
                  onChange={(e) =>
                    handleChangePassword(e.target.value, e.target.name)
                  }
                  placeholder="Confirm Password"
                />
              </div>
              <div className="mt-4">
                <button
                  className="submit-btn"
                  type="button"
                  onClick={() => changePassword()}
                >
                  Change password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
