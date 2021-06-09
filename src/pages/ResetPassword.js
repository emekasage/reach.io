import React, { useContext } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function ResetPassword() {
  const { resetPassword, setResetPass, showForgotPasswordSuccess } =
    useContext(providerFunctions);

  return (
    <div className="login-page">
      <div className="row">
        <div className="col-md-12">
          <span>
            <img src="assets/img/Group-73.png" alt="" />
          </span>
          {showForgotPasswordSuccess !== "" && (
            <div className="reset-msg">
              <i className="bi bi-check-circle reset-success"></i>
              <p>Check your inbox, we have sent a link to reset password</p>
            </div>
          )}

          {showForgotPasswordSuccess === "" && (
            <div>
              <div className="page-text mt-5">
                <p>Reset Password</p>
              </div>
              <div className="rectangle-5 mt-3">
                <form>
                  <span className="form-text">
                    Enter the email address associated with your account to get
                    your reset password link
                  </span>
                  <div className="mb-3 mt-3">
                    <input
                      type="email"
                      className="form-control input-bx"
                      id="exampleInputEmail1"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => setResetPass(e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      className="submit-btn"
                      type="button"
                      onClick={() => resetPassword()}
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
