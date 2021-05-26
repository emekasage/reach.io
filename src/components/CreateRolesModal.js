import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";
export default function CreateUserModal(props) {
  const { createRoles, allPermissions, getPermission } = useContext(
    providerFunctions
  );
  const [permissionData, setPermissionData] = useState([]);
  const [page, setPage] = useState(1);
  const [newRole, setNewRole] = useState([]);
  const [newRoleName, setNewRoleName] = useState("");

  useEffect(() => {
    getPermission();
  }, []);

  useEffect(() => {
    // console.log(allPermissions.Roles);
    if (typeof allPermissions.Permission !== "undefined") {
      setPermissionData(allPermissions.Permission);
    }
  }, [allPermissions]);

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
                <h5>New Roles and Permissions</h5>
              </div>
            </div>
            <div className="my-2 mod-form">
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                value={typeof newRoleName === "undefined" ? "" : newRoleName}
                onChange={(e) => {
                  setNewRoleName(e.target.value);
                  console.log(e.target.value);
                }}
                id="role_name"
                placeholder="Name"
              />
            </div>
            <div className="my-2 mod-form">
              {permissionData.map((thisPermissionName, index) => {
                return (
                  <div className="inner-chck" key={index}>
                    <div className="form-check prm-chck">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="permission"
                        value={thisPermissionName.id}
                        key={index}
                        onChange={(e) => {
                          console.log(e.target);
                          var cc = [...newRole];
                          if (e.target.checked) {
                            cc.push(e.target.value);
                          } else {
                            var index = cc.indexOf(e.target.value);
                            if (index !== -1) {
                              cc.splice(index, 1);
                            }
                          }
                          setNewRole(cc);
                          console.log(newRole);
                        }}
                        defaultChecked={
                          newRole.permission === thisPermissionName.id
                            ? true
                            : false
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        {thisPermissionName.name}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  createRoles(newRole, newRoleName);
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
                <h5>New Role Created</h5>
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
              <p>You have successfully created a new role.</p>
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
