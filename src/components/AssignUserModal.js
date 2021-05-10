import React, { useState, useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function AssignUserModal() {
  const {
    getLinkedlnUser,
    linkedlnUsers,
    assignUserToCampaign,
    assignUserMessage,
  } = useContext(providerFunctions);
  const [showOptions, setShowOptions] = useState(false);
  const [showSecOption, setShowSecOption] = useState(false);
  const [linkUser, setLinkUser] = useState([]);
  // const [pickedUserId] = useState(null);
  useEffect(() => {
    getLinkedlnUser();
    assignUserToCampaign();
  }, []);

  useEffect(() => {
    if (typeof linkedlnUsers.linkedinUsers !== "undefined") {
      console.log(linkedlnUsers.linkedinUsers);
      setLinkUser(linkedlnUsers.linkedinUsers);
    }
  }, [linkedlnUsers]);

  const [linkedlnId, setLinkedlnId] = useState("");

  const handleOptions = () => {
    setShowOptions(true);
  };

  const handleOptionTwo = () => {
    setShowSecOption(true);
  };

  const cancelOptionTwo = () => {
    setShowSecOption(false);
  };

  const cancelOptions = () => {
    setShowOptions(false);
  };

  return (
    <div className="assign-usermod">
      {typeof assignUserMessage.message !== "undefined" && (
        <div className="success">{assignUserMessage.message}</div>
      )}

      {typeof assignUserMessage.error !== "undefined" && (
        <div className="error">{assignUserMessage.error}</div>
      )}
      <div
        className="my-3 mod-check no1"
        onClick={() => {
          {
            showOptions === false && handleOptions();
          }
          {
            showOptions === true && cancelOptions();
          }
        }}
      >
        <h6>Assign existing user</h6>
      </div>

      {showOptions && (
        <div className="inner-slct">
          <select
            className="form-select inner-select"
            aria-label="Default select example"
            onChange={(e) => {
              setLinkedlnId(e.target.value);
            }}
          >
            <option selected hidden className="slct-plchldr">
              Select new user
            </option>
            {linkUser.map((thisLinkedlnName, index) => {
              return (
                <option value={thisLinkedlnName.id} key={index}>
                  {thisLinkedlnName.name}
                </option>
              );
            })}
          </select>
        </div>
      )}

      <div
        className="my-3 mod-check"
        onClick={() => {
          {
            showSecOption === false && handleOptionTwo();
          }
          {
            showSecOption === true && cancelOptionTwo();
          }
        }}
      >
        <h6>Add new user</h6>
      </div>

      {showSecOption && (
        <div>
          <div className="my-2 mod-form">
            <input
              type="text"
              className="form-control inner-input"
              id="exampleFormControlInput1"
              placeholder="Linkedln Username"
            />
          </div>
          <div className="my-2 mod-form">
            <input
              type="password"
              className="form-control inner-input"
              id="exampleFormControlInput1"
              placeholder="Linkedln Password"
            />
          </div>
        </div>
      )}

      <button
        className="assign-btn"
        onClick={() => {
          assignUserToCampaign(linkedlnId);
        }}
      >
        Assign User
      </button>
    </div>
  );
}
