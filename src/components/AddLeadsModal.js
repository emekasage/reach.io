import React, { useState, useContext, useEffect } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import MultiSelect from "react-multi-select-component";
import countries from "../countries"

export default function AddLeadsModal(props) {
  const { setCreateListPage, engageDetails, setEngageDetails, setTemplateDetails, getLinkedlnIndustries,
    linkedlnIndustries, } =
    useContext(providerFunctions);
  const [page, setPage] = useState(1);
  const [showCheckMark, setshowCheckMark] = useState(false);
  const [selectedEngageIndustry, setSelectedEngageIndustry] = useState([]);
  const [industries, setIndustries] = useState([]);

  const [countryEngage, setCountryEngage] = useState(-1);
  const [stateEngage, setStateEngage] = useState(-1);
  const [cityExtract, setCityEngage] = useState(-1);
  const [cityOptions, setCityOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);

  useEffect(()=>{
    var c = ""
    if(cityExtract !== -1){
      c = countries[countryEngage].name+","+countries[countryEngage].states[stateEngage].name+","
      +countries[countryEngage].states[stateEngage].cities[cityExtract].name;
      var cd = { ...engageDetails}
      cd["location"] = c;
      setEngageDetails(cd);
      setTemplateDetails(cd);
    }
    
  },[cityExtract])

  useEffect(()=>{
    if(stateEngage !== -1 && countryEngage !== -1)
      setCityOptions(countries[countryEngage].states[stateEngage].cities)
  },[stateEngage]);

  useEffect(()=>{
      if(countryEngage !== -1)
        setStateOptions(countries[countryEngage].states)
  },[countryEngage]);

  // const FileUpload = useRef(null);

  // const onFileClick = () => {
  //   FileUpload.current.click();
  // };

  useEffect(() => {
    console.log("asjkjaskj")
    getLinkedlnIndustries();
    console.log(linkedlnIndustries);
  }, []);

  useEffect(() => {
    if (typeof linkedlnIndustries.data !== "undefined") {
      setIndustries(linkedlnIndustries.data);
      console.log(industries);
    }
  }, [linkedlnIndustries]);

  useEffect(()=>{
    var cc = "";
    for (var i = 0; i < selectedEngageIndustry.length; i++){
      cc = selectedEngageIndustry[i] + ","+ cc;
    }
    var s = {...engageDetails}
    s.industry = cc;
    setEngageDetails(s);
    setTemplateDetails(s);
  },[selectedEngageIndustry])

  return (
    <div>
      {page === 1 && (
        <div>
          <div className="card-header d-flex justify-content-between">
            <div className="list-title mt-1">
              <h6>Create a new list</h6>
            </div>
          </div>
          <div className="my-2 mod-form">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Give your list a name
            </label>
            <input
              type="text"
              className="form-control form-control-lg mod-input"
              name="list_name"
              placeholder="E.g CEOs in New York"
              onChange={(e) => {
                var ec = { ...engageDetails };
                ec.list_name = e.target.value;
                setEngageDetails(ec);
                setTemplateDetails(ec);
              }}
              value={
                typeof engageDetails["list_name"] === "undefined"
                  ? ""
                  : engageDetails["list_name"]
              }
            />
          </div>
          <div className="my-4 list-text">
            <p>How would you like to add new lead to your list?</p>
          </div>
          <div className="lead_options">
            <span
              onClick={() => {
                setPage(2);
              }}
            >
              Create New List
            </span>
            <span
              onClick={() => {
                // eslint-disable-next-line react/prop-types
                props.setShowModal(false);
                setCreateListPage(1.5);
              }}
            >
              Use Saved List
            </span>

            {/* <span onClick={onFileClick}>Upload CSV file</span>
            <input type="file" ref={FileUpload} style={{ display: "none" }} /> */}
          </div>
        </div>
      )}

      {page === 2 && (
        <div>
          <div className="card-header d-flex justify-content-between">
            <div className="list-title mt-1">
              <h6>Create a new list</h6>
            </div>
            <div className="crd-lnk mt-1">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(1);
                }}
              >
                Go back
              </a>
            </div>
          </div>
          <div className="my-2 mod-form">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Select the connection status
            </label>
            <select
              className="form-select form-select-lg mod-select"
              aria-label="Default select example"
              onChange={(e) => {
                var ec = { ...engageDetails };
                ec.connection_status = e.target.value;
                setEngageDetails(ec);
                setTemplateDetails(ec);
              }}
              value={
                typeof engageDetails["connection_status"] === "undefined"
                  ? ""
                  : engageDetails["connection_status"]
              }
            >
              <option selected hidden className="slct-plchldr">
                Choose
              </option>
              <option value="first_level">1st Level Connections only</option>
              <option value="second_and_third_level">
                2nd and 3rd+ Level Connection
              </option>
            </select>
          </div>
          <div className="my-2 mod-form">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Job title
            </label>
            <input
              type="text"
              className="form-control form-control-lg mod-input"
              name="job_title"
              placeholder="e.g. Engineer, Accountant, Technician"
              onChange={(e) => {
                var ec = { ...engageDetails };
                ec.job_title = e.target.value;
                setEngageDetails(ec);
                setTemplateDetails(ec);
              }}
              value={
                typeof engageDetails["job_title"] === "undefined"
                  ? ""
                  : engageDetails["job_title"]
              }
            />
          </div>
          <div className="my-2 mod-form">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Job status
            </label>
            <select
              className="form-select form-select-lg mod-select"
              aria-label="Default select example"
              name="job_status"
              onChange={(e) => {
                var ec = { ...engageDetails };
                ec.job_status = e.target.value;
                setEngageDetails(ec);
                setTemplateDetails(ec);
              }}
              value={
                typeof engageDetails["job_status"] === "undefined"
                  ? ""
                  : engageDetails["job_status"]
              }
            >
              <option selected hidden className="slct-plchldr">
                Choose one
              </option>
              <option value="current">Current</option>
              <option value="past">Past</option>
              <option value="current_or_past">Current or Past</option>
            </select>
          </div>

          <div className="my-2 mod-form">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Skills and Keyword
            </label>
            <input
              type="text"
              className="form-control form-control-lg mod-input"
              name="skills_keywords"
              placeholder="e.g. SAP, JavaScript, Azure"
              onChange={(e) => {
                var ec = { ...engageDetails };
                ec.skills_keywords = e.target.value;
                setEngageDetails(ec);
                setTemplateDetails(ec);
              }}
              value={
                typeof engageDetails["skills_keywords"] === "undefined"
                  ? ""
                  : engageDetails["skills_keywords"]
              }
            />
          </div>
          <div className="my-2 mod-form">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Country
            </label>
            <select
              className="form-select form-select-lg mod-select"
              aria-label="Default select example"
              onChange={(e)=>{
                var c = e.target.value;
                setCountryEngage(c);
              }}
            >
              {countries.map((thiscountry, index)=>{
                return(
                  <option value={index}>{thiscountry.name}</option>
                )
              })}
            </select>
          </div>
          <div className="my-3 mod-form-hidden">
            {JSON.stringify(stateOptions) !== "[]" &&
              <>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  State
                </label>
                <select
                  className="form-select form-select-lg mod-select"
                  aria-label="Default select example"
                  onChange={(e)=>{
                    setStateEngage(e.target.value);
                  }}
                >
                  {JSON.parse(JSON.stringify(stateOptions)).map((thisState, index)=>{
                    return(
                    <option selected value={index} className="slct-plchldr"  key={`${countryEngage} - ${index}`}>
                      {thisState.name}
                    </option>
                    )
                  })}
                </select>
              </>
            }
          </div>
          <div className="my-3 mod-form-hidden">
            {JSON.stringify(cityOptions) !== "[]" &&
              <>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Region
                </label>   
                <select
                  className="form-select form-select-lg mod-select"
                  aria-label="Default select example"
                  onChange={(e)=>{
                    setCityEngage(e.target.value);
                  }}
                >
                  {cityOptions.map((thiscity, index)=>{
                    return(
                      <option selected value={index} className="slct-plchldr" key={`${countryEngage} - ${stateEngage} -  ${index}`}>
                          {thiscity.name}
                      </option>
                    )
                  })}
                </select>
              </>
            }
          </div>
          <div className="my-2 mod-form">
            <label htmlFor="exampleFormControlInput1" className="form-label2">
              Industry
            </label>
            <MultiSelect
              className="mod-input"
              options={linkedlnIndustries}
              value={selectedEngageIndustry}
              onChange={setSelectedEngageIndustry}
              // labelledBy="Select Industry"
            />
          </div>
          <div className="my-2 mod-form">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Duration in current role
            </label>
            <select
              className="form-select form-select-lg mod-select"
              aria-label="Default select example"
              onChange={(e) => {
                var ec = { ...engageDetails };
                ec.duration_current_role = e.target.value;
                setEngageDetails(ec);
                setTemplateDetails(ec);
              }}
              value={
                typeof engageDetails["duration_current_role"] === "undefined"
                  ? ""
                  : engageDetails["duration_current_role"]
              }
            >
              <option selected hidden className="slct-plchldr">
                Choose
              </option>
              <option value="0-12">0 - 12 months</option>
              <option value="1-3">1 - 3 years</option>
              <option value="3-5">3 - 5 years</option>
              <option value="5-10">5 - 10 years</option>
              <option value="10+">10 years+</option>
            </select>
          </div>
          <div className="my-2 mod-form">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Company Size
            </label>
            <select
              className="form-select form-select-lg mod-select"
              aria-label="Default select example"
              onChange={(e) => {
                var ec = { ...engageDetails };
                ec.company_size = e.target.value;
                setEngageDetails(ec);
                setTemplateDetails(ec);
              }}
              value={
                typeof engageDetails["company_size"] === "undefined"
                  ? ""
                  : engageDetails["company_size"]
              }
            >
              <option selected hidden className="slct-plchldr">
                Choose
              </option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="501-1000">501-1000</option>
              <option value="1001-5000">1001-5000</option>
              <option value="5001-10000">5001-10000</option>
              <option value="10000+">10000+</option>
            </select>
          </div>

          <div className="my-3 mod-btn">
            <button
              onClick={() => {
                setPage(5);
              }}
            >
              Finish
            </button>
          </div>
        </div>
      )}
      {page === 5 && (
        <div className="last-body">
          <div className="card-header d-flex justify-content-between mod-head">
            <div className="mod-title">
              <h5>Campaign Submitted</h5>
            </div>
          </div>

          <div className="success-page">
            <i className="bi bi-check-circle"></i>
            <p>
              You have sucessfuly created a list, click the button below to add
              sequence
            </p>
          </div>

          <div className="my-3 mod-btn">
            <button
              onClick={() => {
                // eslint-disable-next-line react/prop-types
                props.setShowModal(false);
                setshowCheckMark(showCheckMark);
                setCreateListPage(2);
              }}
            >
              Go to Step 2 - Add Sequence
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
