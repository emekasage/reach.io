import React, { useContext, useState, useMemo } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import Select from "react-select";
import countryList from "react-select-country-list";
export default function Login() {
  const { registerUser, signUpData, setSignUpData } =
    useContext(providerFunctions);

  const [page, setPage] = useState(1);

  const handleSignUpChange = (value, key) => {
    var sd = { ...signUpData };
    sd[key] = value;
    setSignUpData(sd);
    console.log(sd);
  };
  const [value, setValue] = useState("");

  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="login-page">
      <div className="row">
        <div className="col-md-12 mt-3">
          <span className="reachio-logo">
            <img src="assets/img/Group-73.png" alt="" />
          </span>
          {page === 1 && (
            <>
            <div className="page-text mt-5">
              <p>Sign up</p>
            </div>
            <div className="rectangle-5 mt-3">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control input-bx"
                    onChange={(e) =>
                      handleSignUpChange(e.target.value, e.target.name)
                    }
                    name="name"
                    id="user-name"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control input-bx"
                    name="email"
                    onChange={(e) =>
                      handleSignUpChange(e.target.value, e.target.name)
                    }
                    id="user-email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control input-bx"
                    onChange={(e) =>
                      handleSignUpChange(e.target.value, e.target.name)
                    }
                    name="company"
                    id="company-name"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-3">
                  <Select
                    options={options}
                    className="sel-input-bx"
                    value={value}
                    onChange={(value) => {
                      handleSignUpChange(value.label, "country");
                      setValue(value);

                    }}
                    name="country"
                    id="country-name"
                    placeholder="Select Country"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control input-bx"
                    name="password"
                    id="user-password"
                    onChange={(e) =>
                      handleSignUpChange(e.target.value, e.target.name)
                    }
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control input-bx"
                    name="confirm_password"
                    id="user-confirm-password"
                    onChange={(e) =>
                      handleSignUpChange(e.target.value, e.target.name)
                    }
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="mt-4">
                  <button
                    className="submit-btn"
                    type="button"
                    onClick={() => {
                      registerUser();
                      setPage(2);
                    }}
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </>
          )}

          {page === 2 && (
            <>
              <span className="verify_txt my-5">Please check your email for verification</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
