import React, { useState, useContext, useEffect, useMemo, useRef } from "react";
// import { Link } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";
import Select from "react-select";
import countryList from "react-select-country-list";

export default function AssignUserModal() {
  const { getLinkedlnUser, sendRobotData, getRobotMessage, robotMessages } =
    useContext(providerFunctions);

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  // const [pickedUserId] = useState(null);
  useEffect(() => {
    getLinkedlnUser();
    getRobotMessage();
  }, []);

  // const [robotMsg, setRobotMesg] = useState([]);

  // useEffect(() => {
  //   if (typeof robotMessages.robotMessages !== "undefined") {
  //     console.log(robotMessages.robotMessages);
  //     setRobotMesg(robotMessages.robotMessages);
  //   }
  // }, [robotMessages]);

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
    setLoading(true);
     setTimeout(() => {
      setLoading(false);
    }, 3000);
    try {
      var lu = usernameRef.current.value;
      var lp = passwordRef.current.value;
      var lc = passwordRef.current.value;
      await sendRobotData(lu, lp, lc);
      // console.log(res.message);
    } catch (error) {
      console.log("yaba", error.message);
    }
  };

  return (
    <div className="mb-3">
      {typeof robotMessages !== "undefined" && (
        <div className="error">{robotMessages.status}</div>
      )}
      <div className="card-header d-flex justify-content-between">
        <div className="list-title mt-1">
          <h6>Add a Linkedln User</h6>
        </div>
      </div>

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
      {!loading && 
      
      <button className="mt-2 mb-4 assign-btn" onClick={handleSubmit}>
        Add User
      </button>
      }
      {loading && 
      
      <button className="mt-2 mb-4 assign-btn" onClick={handleSubmit}>
        Sending data to robot
      </button>
      }
     
    </div>
  );
}
