import React, { useState, useContext, useEffect, useMemo, useRef } from "react";
// import { Link } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";
import Select from "react-select";
import countryList from "react-select-country-list";

export default function AssignUserModal() {
  const {
    getLinkedlnUser,
    linkedlnUsers,
    assignUserToCampaign,
    assignUserMessage,
    sendRobotData,
    getRobotMessage,
    robotMessages,
  } = useContext(providerFunctions);
  const [showOptions, setShowOptions] = useState(false);
  const [showSecOption, setShowSecOption] = useState(false);
  const [linkUser, setLinkUser] = useState([]);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  // const [pickedUserId] = useState(null);
  useEffect(() => {
    getLinkedlnUser();
    assignUserToCampaign();
    getRobotMessage();
  }, []);

  const handleUsernameChange = () => {
    console.log(usernameRef.current.value);
  };

  const handlePasswordChange = () => {
    console.log(passwordRef.current.value);
  };

  const handleCountryChange = () => {
    console.log(countryRef.current.value);
  };

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const countryRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var lu = usernameRef.current.value;
      var lp = passwordRef.current.value;
      var lc = passwordRef.current.value;
      await sendRobotData(lu, lp, lc);
      // console.log(res.message);
    } catch (error) {
      console.log("yabababababababa", error.message);
    }
  };

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

      {typeof robotMessages !== "undefined" && (
        <div className="error">{robotMessages.status}</div>
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

          <button
            className="mt-2 assign-btn"
            onClick={() => {
              assignUserToCampaign(linkedlnId);
            }}
          >
            Assign User
          </button>
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
              ref={usernameRef}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="my-2 mod-form">
            <input
              type="password"
              className="form-control inner-input"
              id="exampleFormControlInput1"
              placeholder="Linkedln Password"
              ref={passwordRef}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="my-2">
            <Select
              options={options}
              className="form-control inner-input"
              value={value}
              ref={countryRef}
              onChange={(countryRef) => {
                handleCountryChange(countryRef, "country");
                setValue(countryRef);
              }}
              name="country"
              id="country-name-inner"
              placeholder="Select Country"
            />
          </div>
          <button className="mt-2 assign-btn" onClick={handleSubmit}>
            Add User
          </button>
          <button
            className="mt-2 assign-btn"
            style={{ marginLeft: "5px" }}
            onClick={handleSubmit}
          >
            Add 2FA Code
          </button>
        </div>
      )}
    </div>
  );
}
