import React, { useContext, useEffect, useState } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import DateTime from "../components/DateTime";

export default function LinkedlnUserInner() {
  const {
    showSideBar,
    getLinkedlnUser,
    linkedlnUsers,
    setShowModal,
    setModalPage,
  } = useContext(providerFunctions);

  useEffect(() => {
    getLinkedlnUser();
  }, []);

  const [linkUser, setLinkUser] = useState([]);

  useEffect(() => {
    if (typeof linkedlnUsers.linkedinUsers !== "undefined") {
      console.log(linkedlnUsers.linkedinUsers);
      setLinkUser(linkedlnUsers.linkedinUsers);
    }
  }, [linkedlnUsers]);

  return (
    <div className={`pagebody ${showSideBar ? "" : "expand"}`}>
      <div className="dashboardbox">
        <main className="content">
          <div className="container-fluid p-0">
            <div className="d-flex justify-content-between user-val">
              <div className="heading-col">
                <h5>
                  <strong>Add Linkedln Users</strong>
                </h5>
              </div>
              <div className="date-form">
                <DateTime />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-12 col-xxl-12 d-flex">
                <div className="card flex-fill">
                  <div className="card-header table-card-head d-flex justify-content-between">
                    <h5 className="card-title mb-0 table-title">
                      Linkedln Users
                    </h5>
                    <div className="table-attr">
                      <button
                        type="button"
                        className="btn-dashboard"
                        onClick={() => {
                          setShowModal(true);
                          setModalPage("add_linkedln_user");
                        }}
                      >
                        Add Linkedln User
                      </button>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover my-1">
                      <thead>
                        <tr>
                          <th scope="col">S/N</th>
                          <th>Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        {linkUser.map((thislinkedlnUser, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{thislinkedlnUser.name}</td>
                              <td>{thislinkedlnUser.username}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    {/* <div className="view-more d-flex justify-content-center">
                      <button type="button" className="btn-dashboard-2">
                        View more
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
