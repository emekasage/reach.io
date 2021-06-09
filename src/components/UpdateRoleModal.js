import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";
export default function UpdateRoleModal(props) {
  const { updateRole, allPermissions, getPermission } =
    useContext(providerFunctions);
  const [permissionData, setPermissionData] = useState([]);
  const [page, setPage] = useState(1);
  const [changeRole, setChangeRole] = useState({
    name: "",
    permission: 0,
  });

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
                <h5>Update Role</h5>
              </div>
            </div>
            <div className="my-2 mod-form">
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                value={
                  typeof changeRole["name"] === "undefined"
                    ? ""
                    : changeRole["name"]
                }
                onChange={(e) => {
                  var cc = { ...changeRole };
                  cc.name = e.target.value;
                  setChangeRole(cc);
                  console.log(cc);
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
                          var cc = { ...changeRole };
                          cc.permission = e.target.value;
                          setChangeRole(cc);
                          console.log(thisPermissionName.id);
                        }}
                        checked={
                          changeRole.permission === thisPermissionName.id
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
                  updateRole(changeRole);
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
              <Link to="roles">
                {" "}
                <button
                  onClick={() => {
                    // eslint-disable-next-line react/prop-types
                    props.setShowModal(false);
                  }}
                >
                  Go back to Dashboard
                </button>
              </Link>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
