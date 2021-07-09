import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function VerifyEmail() {
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");
  console.log(token);
  const {verifyEmail} = useContext(providerFunctions);
  useEffect(() => {
    console.log(token);
  }, []);

  return (
    <div className="login-page">
      <div className="row">
        <div className="col-md-12 mt-3">
          <span className="reachio-logo">
            <img src="assets/img/Group-73.png" alt="" />
          </span>
          <div className="page-text mt-5">
            <p>Verify Email</p>
            <span>Click on the button to verify your email address</span>
          </div>
          <div className="rectangle-5 mt-3">
            
            <div className="mt-4">
              <button
                className="submit-btn"
                type="button"
                onClick={() =>verifyEmail(token)}
              >
                Verify Email Address
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
