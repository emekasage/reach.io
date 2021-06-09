import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";
export default function CreateUserModal(props) {
  const { createUser, managedRoles, rolesManagement } =
    useContext(providerFunctions);
  const [rolesData, setRolesData] = useState([]);
  const [page, setPage] = useState(1);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    confirm_password: "",
    role: 0,
  });

  useEffect(() => {
    rolesManagement();
  }, []);

  useEffect(() => {
    // console.log(managedRoles.Roles);
    if (typeof managedRoles.Roles !== "undefined") {
      if (typeof managedRoles.Roles.data !== "undefined") {
        setRolesData(managedRoles.Roles.data);
      }
    }
  }, [managedRoles]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {page === 1 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Add New User</h5>
              </div>
            </div>
            <div className="my-2 mod-form">
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                value={
                  typeof newUser["name"] === "undefined" ? "" : newUser["name"]
                }
                onChange={(e) => {
                  var cc = { ...newUser };
                  cc.name = e.target.value;
                  setNewUser(cc);
                  console.log(cc);
                }}
                id="campaign_name"
                placeholder="Name"
              />
            </div>

            <div className="my-2 mod-form">
              <input
                type="email"
                className="form-control form-control-lg mod-input"
                value={
                  typeof newUser["email"] === "undefined"
                    ? ""
                    : newUser["email"]
                }
                onChange={(e) => {
                  var cc = { ...newUser };
                  cc.email = e.target.value;
                  setNewUser(cc);
                }}
                id="campaign_email"
                placeholder="Email"
              />
            </div>
            <div className="my-2 mod-form">
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                value={
                  typeof newUser["company"] === "undefined"
                    ? ""
                    : newUser["company"]
                }
                onChange={(e) => {
                  var cc = { ...newUser };
                  cc.company = e.target.value;
                  setNewUser(cc);
                }}
                id="new_company"
                placeholder="Company"
              />
            </div>
            <div className="my-2 mod-form">
              <input
                type="password"
                className="form-control form-control-lg mod-input"
                value={
                  typeof newUser["password"] === "undefined"
                    ? ""
                    : newUser["password"]
                }
                onChange={(e) => {
                  var cc = { ...newUser };
                  cc.password = e.target.value;
                  setNewUser(cc);
                }}
                id="new_user_password"
                placeholder="Password"
              />
            </div>
            <div className="my-2 mod-form">
              <input
                type="password"
                className="form-control form-control-lg mod-input"
                value={
                  typeof newUser["confirm_password"] === "undefined"
                    ? ""
                    : newUser["confirm_password"]
                }
                onChange={(e) => {
                  var cc = { ...newUser };
                  cc.confirm_password = e.target.value;
                  setNewUser(cc);
                }}
                id="new_confirm_password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="my-2 mod-form">
              <select
                className="form-select form-select-lg mod-select"
                aria-label="Default select example"
                onChange={(e) => {
                  var cc = { ...newUser };
                  cc.role = e.target.value;
                  parseInt("10", 10);
                  setNewUser(cc);
                  console.log(cc);
                }}
                // value={
                //   typeof newUser["role"] === "undefined" ? "" : newUser["role"]
                // }
                placeholder="Role"
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                {rolesData.map((thisRoleName, index) => {
                  return (
                    <option value={5} key={index}>
                      {thisRoleName.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  createUser(newUser);
                  setPage(8);
                }}
              >
                Add User
              </button>
            </div>
          </div>
        )}

        {page === 8 && (
          <div className="last-body">
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>New User Created</h5>
              </div>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(1);
                }}
              >
                Go back
              </a>
            </div>

            <div className="success-page">
              <i className="bi bi-check-circle"></i>
              <p>You have successfully created a new user.</p>
            </div>

            <div className="my-3 mod-btn">
              <Link to="clients">
                {" "}
                <button
                  onClick={() => {
                    // eslint-disable-next-line react/prop-types
                    props.setShowModal(false);
                  }}
                >
                  Go back to Admin
                </button>
              </Link>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
