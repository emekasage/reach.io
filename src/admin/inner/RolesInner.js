/* eslint-disable react/jsx-key */
import React, { useContext, useState, useEffect } from "react";
import { providerFunctions } from "../../provider/FunctionsProvider";
import DateTime from "../../components/DateTime";
import moment from "moment";

export default function ClientsInner() {
  const {
    showSideBar,
    managedRoles,
    rolesManagement,
    getAllUsers,
  } = useContext(providerFunctions);
  const [rolesData, setRolesData] = useState([]);

  // const [paginatedClients, setpaginatedClients] = useState([]);
  // const [clientsToDisplay, setClientsToDisplay] = useState([]);
  // const [innerPage, setInnerPage] = useState(1);
  // const [page, setPage] = useState(1);
  // const [perPage] = useState(10);
  // const [pageCount, setPageCount] = useState(0);
  // const [viewAll, setViewAll] = useState(false);
  // const [rows, setRows] = useState([]);
  // const [searchData, setSearchData] = useState("");
  // const [userProf, setUserProf] = useState({});
  // const [userCD, setUserCD] = useState({});
  useEffect(() => {
    getAllUsers();
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

  return (
    <div className={`pagebody ${showSideBar ? "" : "expand"}`}>
      <div className="container-fluid p-0">
        <div>
          <div className="d-flex justify-content-between user-val">
            <div className="heading-col">
              <h5>
                <strong>Roles and Permissions</strong>
              </h5>
            </div>
            <div className="date-form">
              <DateTime />
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-12 col-xxl-12 d-flex user-tab">
              <div className="card flex-fill">
                <div className="card-header table-card-head d-flex justify-content-between">
                  <h5 className="card-title mb-0 table-title">
                    Roles and Permissions
                  </h5>
                  <div className="dashboard-attr">
                    <button type="button" className="btn-dashboard">
                      <i className="bi bi-person-plus user-plus"></i>
                      New Roles and Permissions
                    </button>
                  </div>
                </div>
                <table className="table table-hover my-1 table-responsive">
                  <thead>
                    <tr>
                      <th scope="col">S/N</th>
                      <th style={{ width: "20%" }}>User</th>
                      <th style={{ width: "20%" }}>Roles</th>
                      <th style={{ width: "20%" }}>Permissions</th>
                      <th style={{ width: "30%" }}>Created On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rolesData.map((thisRolesData, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="user-lnk">{thisRolesData.name}</div>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <div className="user-lnk">
                              {/* {thisRolesData.email} */}
                            </div>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <div className="user-lnk">
                              {/* {thisRolesData.phone} */}
                            </div>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            {moment(thisRolesData.created_at).format("lll")}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
