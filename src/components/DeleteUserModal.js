import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function DeleteUserModal(props) {
  const [page, setPage] = useState(1);
  const {
    allUsers,
    getAllUsers,
    deleteUser,
    userId,
    deleteUserMessage,
  } = useContext(providerFunctions);
  const [clientsData, setClientsData] = useState([]);
  console.log("===", deleteUserMessage);

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (typeof allUsers.Users !== "undefined") {
      setClientsData(allUsers.Users);
      // console.log(allUsers.Users);
    }
  }, [allUsers]);

  return (
    <div className="req-cancel">
      {page === 1 && (
        <div>
          <div className="cancelcamp">
            <h5 key>
              {/* {JSON.stringify(clientsData.name)} */}
              Are you sure you want to delete this {clientsData.name}
              user?
            </h5>
          </div>

          <div className="my-3 mod-assbtn">
            <button
              className="yes-btn"
              onClick={() => {
                deleteUser(userId);
                setPage(2);
              }}
            >
              Yes
            </button>
            <Link
              // to="buycredit"
              onClick={() => {
                // eslint-disable-next-line react/prop-types
                props.setShowModal(false);
              }}
            >
              <button className="no-btn">No</button>
            </Link>
          </div>
        </div>
      )}

      {page === 2 && (
        <div className="success">
          <i className="bi bi-check-circle statusIcon"></i>
          {deleteUserMessage.Message}
        </div>
      )}
    </div>
  );
}
