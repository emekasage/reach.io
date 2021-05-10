import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";
export default function CampaignModal(props) {
  const { createCampaign } = useContext(providerFunctions);

  const [page, setPage] = useState(1);

  const [campaignDetails, setCampaignDetails] = useState({
    name: "",
    email: "",
    company: "",
    location: "",
    industry: "",
    job_titles: "",
    skills_keywords: "",
    company_size: "",
    send_connection_request: "",
    send_follow_up: "",
    extract_data_after_person_connected: 0,
    sequence_step_0: "",
    fileName: "",
    duration: "",
    options: "",
    crm: "",
    hiring_manager_connection_request: "",
    hiring_manager_follow_up: "",
    opportunities: "",
    duration_current_role: "",
    sequence_step_1: "",
  });

  const { extract_data_after_person_connected } = campaignDetails;

  const [showOptions, setShowOptions] = useState(false);
  const [showSecOption, setShowSecOption] = useState(false);

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
                <h5>About you</h5>
                <p>who are you trying to target?</p>
              </div>

              <span>
                <span className="big-no">1</span>/7
              </span>
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Campaign Name*
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                value={
                  typeof campaignDetails["name"] === "undefined"
                    ? ""
                    : campaignDetails["name"]
                }
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.name = e.target.value;
                  setCampaignDetails(cc);
                }}
                id="campaign_name"
              />
            </div>

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email Address*
              </label>
              <input
                type="email"
                className="form-control form-control-lg mod-input"
                value={
                  typeof campaignDetails["email"] === "undefined"
                    ? ""
                    : campaignDetails["email"]
                }
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.email = e.target.value;
                  setCampaignDetails(cc);
                }}
                id="campaign_email"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Company Name*
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                value={
                  typeof campaignDetails["company"] === "undefined"
                    ? ""
                    : campaignDetails["company"]
                }
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.company = e.target.value;
                  setCampaignDetails(cc);
                }}
                id="campaign_company"
              />
            </div>
            {/* <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Attach any file that you might want to share
              </label>
              <input
                type="file"
                className="form-control form-control-lg mod-input"
                name="fileName"
                placeholder="Add file"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.fileName = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["fileName"] === "undefined"
                    ? ""
                    : campaignDetails["fileName"]
                }
                multiple
              />
            </div> */}

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  setPage(2);
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {page === 2 && (
          <div className="camp-offrd">
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Campaign Setup</h5>
                <p>Campaigns offered</p>
              </div>

              <span>
                <span className="big-no">2</span>/7
              </span>
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

            <div
              className="my-3 mod-check"
              onClick={() => {
                setPage(3);
              }}
            >
              <h6>Company Search</h6>
            </div>
            <div
              className="my-3 mod-check"
              onClick={() => {
                setPage(5);
              }}
            >
              <h6>Contact Email Search</h6>
            </div>
            <div
              className="my-3 mod-check"
              onClick={() => {
                setPage(6);
              }}
            >
              <h6>Engage</h6>
            </div>
            <div
              className="my-3 mod-check"
              onClick={() => {
                setPage(7);
              }}
            >
              <h6>Retain</h6>
            </div>
            <div className="my-3 mod-check">
              <h6>Extract</h6>
            </div>
            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  createCampaign(campaignDetails);
                  setPage(8);
                }}
                type="submit"
              >
                Submit Campaign
              </button>
            </div>
          </div>
        )}

        {/* COMPANY SEARCH */}

        {page === 3 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Company Search</h5>
                <p>Search filters</p>
              </div>

              <span>
                <span className="big-no">1</span>/2
              </span>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(2);
                }}
              >
                Go back
              </a>
            </div>

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Description Keywords
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.options = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["options"] === "undefined"
                    ? ""
                    : campaignDetails["options"]
                }
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Headquarters Location
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.location = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["location"] === "undefined"
                    ? ""
                    : campaignDetails["location"]
                }
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Industry
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.industry = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["industry"] === "undefined"
                    ? ""
                    : campaignDetails["industry"]
                }
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Headquarters Region
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.duration = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["duration"] === "undefined"
                    ? ""
                    : campaignDetails["duration"]
                }
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Number of Employees
              </label>
              <select
                className="form-select form-select-lg mod-select"
                aria-label="Default select example"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.crm = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["crm"] === "undefined"
                    ? ""
                    : campaignDetails["crm"]
                }
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="1">1-10</option>
                <option value="2">11-50</option>
                <option value="3">51-200</option>
                <option value="3">201-500</option>
                <option value="3">501-1000</option>
                <option value="3">1001-5000</option>
                <option value="3">5001-10000</option>
                <option value="3">10000+</option>
              </select>
            </div>

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  setPage(4);
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {page === 4 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Company Search (Cont.d)</h5>
                <p>Search filters</p>
              </div>

              <span>
                <span className="big-no">2</span>/2
              </span>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(3);
                }}
              >
                Go back
              </a>
            </div>

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Founded
              </label>
              <select
                className="form-select form-select-lg mod-select"
                aria-label="Default select example"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.hiring_manager_connection_request = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails[
                    "hiring_manager_connection_request"
                  ] === "undefined"
                    ? ""
                    : campaignDetails["hiring_manager_connection_request"]
                }
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="1">Past 30 days</option>
                <option value="2">Past 60 days</option>
                <option value="3">Past 90 days</option>
                <option value="3">Past year</option>
                <option value="3">Customer Date Range</option>
              </select>
            </div>

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Actively Hiring
              </label>
              <select
                className="form-select form-select-lg mod-select"
                aria-label="Default select example"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.opportunities = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["opportunities"] === "undefined"
                    ? ""
                    : campaignDetails["opportunities"]
                }
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </div>

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Leadership Hire
              </label>
              <select
                className="form-select form-select-lg mod-select"
                aria-label="Default select example"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.hiring_manager_follow_up = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["hiring_manager_follow_up"] ===
                  "undefined"
                    ? ""
                    : campaignDetails["hiring_manager_follow_up"]
                }
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="1">Past 30 days</option>
                <option value="2">Past 60 days</option>
                <option value="3">Past 90 days</option>
                <option value="3">Past year</option>
                <option value="3">Customer Date Range</option>
              </select>
            </div>

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Estimated Revenue Range
              </label>
              <select
                className="form-select form-select-lg mod-select"
                aria-label="Default select example"
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="1">Less than $1M</option>
                <option value="2">$1M - $10M</option>
                <option value="3">$10M - $50M</option>
                <option value="3">$50M - $100M</option>
                <option value="3">$100M - $500M</option>
                <option value="3">$500M - $1B</option>
                <option value="3">$1B - $10B</option>
              </select>
            </div>

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Company Type
              </label>
              <select
                className="form-select form-select-lg mod-select"
                aria-label="Default select example"
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="1">For Profit</option>
                <option value="2">For Non-profit</option>
              </select>
            </div>

            <div
              className="plus-add"
              onClick={() => {
                setPage(5);
              }}
            >
              <i className="bi bi-plus-circle-fill"></i>
              <span>add contact search</span>
            </div>

            {/* <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Your Connection Request Message
              </label>
              <textarea
                type="text"
                className="form-control form-control-lg mod-input"
                ref={connectMessageRef}
                id="exampleFormControlInput1"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Your Follow-up Message
              </label>
              <textarea
                type="text"
                className="form-control form-control-lg mod-input"
                ref={followUpRef}
                id="exampleFormControlInput1"
              />
            </div> */}

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  setPage(2);
                }}
              >
                Finish
              </button>
            </div>
          </div>
        )}

        {/* END OF COMPANY SEARCH */}

        {/* CONTACT EMAIL SEARCH */}

        {page === 5 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Contact Email Search</h5>
                <p>who are you trying to target?</p>
              </div>

              <span>
                <span className="big-no">4</span>/7
              </span>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(2);
                }}
              >
                Go back
              </a>
            </div>

            <div className="my-3 mod-check">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="new_contacts"
                />
                <label className="form-check-label" htmlFor="flexRadioD2">
                  New Contacts
                </label>
              </div>
            </div>
            <div
              className="my-3 mod-check"
              onClick={() => {
                {
                  showOptions === false && handleOptions();
                }
                {
                  showOptions === true && cancelOptions();
                }
              }}
            >
              <h6>LinkedIn 1st Level Connections</h6>
            </div>

            {showOptions && (
              <div>
                <div className="my-2 mod-form">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Job Titles
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="job_titles"
                    placeholder="e.g. Financial Controllers, Engineer, Developer"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.job_titles = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    value={
                      typeof campaignDetails["job_titles"] === "undefined"
                        ? ""
                        : campaignDetails["job_titles"]
                    }
                  />
                </div>
                <div className="my-2 mod-form">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Skills and Keyword
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="skills_keywords"
                    placeholder="e.g. SAP, JavaScript, Azure"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.skills_keywords = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    value={
                      typeof campaignDetails["skills_keywords"] === "undefined"
                        ? ""
                        : campaignDetails["skills_keywords"]
                    }
                  />
                </div>
                <div className="my-2 mod-form">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="location"
                    // onChange={(e) => {
                    //   var cc = { ...campaignDetails };
                    //   cc.location = e.target.value;
                    //   setCampaignDetails(cc);
                    // }}
                  />
                </div>
                <div className="my-2 mod-form">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Industry
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="industry"
                  />
                </div>
                <div className="my-2 mod-form">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Duration in current role
                  </label>
                  <select
                    className="form-select form-select-lg mod-select"
                    aria-label="Default select example"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.duration_current_role = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    value={
                      typeof campaignDetails["duration_current_role"] ===
                      "undefined"
                        ? ""
                        : campaignDetails["duration_current_role"]
                    }
                  >
                    <option selected hidden className="slct-plchldr">
                      Choose
                    </option>
                    <option value="1">0 - 12 months</option>
                    <option value="2">1 - 3 years</option>
                    <option value="3">3 - 5 years</option>
                    <option value="3">5 - 10 years</option>
                    <option value="3">10 years+</option>
                  </select>
                </div>
                <div className="my-2 mod-form">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Company Size
                  </label>
                  <select
                    className="form-select form-select-lg mod-select"
                    aria-label="Default select example"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.company_size = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    value={
                      typeof campaignDetails["company_size"] === "undefined"
                        ? ""
                        : campaignDetails["company_size"]
                    }
                  >
                    <option selected hidden className="slct-plchldr">
                      Choose
                    </option>
                    <option value="1">1-10</option>
                    <option value="2">11-50</option>
                    <option value="3">51-200</option>
                    <option value="3">201-500</option>
                    <option value="3">501-1000</option>
                    <option value="3">1001-5000</option>
                    <option value="3">5001-10000</option>
                    <option value="3">10000+</option>
                  </select>
                </div>
                <div
                  className="plus-add"
                  onClick={() => {
                    setPage(6);
                  }}
                >
                  <i className="bi bi-plus-circle-fill"></i>
                  <span>add engage campaign</span>
                </div>
              </div>
            )}

            {/* 
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Attach any file that you might want to share
              </label>
              <input
                type="file"
                className="form-control form-control-lg mod-input"
                ref={attachShareRef}
                id="exampleFormControlInput1"
                placeholder="Add file"
              />
            </div> */}

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  setPage(2);
                }}
              >
                Finish
              </button>
            </div>
          </div>
        )}

        {/* END OF CONTACT EMAIL SEARCH */}

        {/* ENGAGE */}
        {page === 6 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Engage</h5>
                <p>Build your sequence</p>
              </div>

              <span>
                <span className="big-no">5</span>/7
              </span>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(2);
                }}
              >
                Go back
              </a>
            </div>

            <div
              className="my-3 mod-check"
              onClick={() => {
                {
                  showOptions === false && handleOptions();
                }
                {
                  showOptions === true && cancelOptions();
                }
              }}
            >
              <h6>Create Message</h6>
            </div>

            {showOptions && (
              <div>
                <div className="my-2 mod-form">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Your Connection Request Message
                  </label>
                  <textarea
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="send_connection_request"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.send_connection_request = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    value={
                      typeof campaignDetails["send_connection_request"] ===
                      "undefined"
                        ? ""
                        : campaignDetails["send_connection_request"]
                    }
                  />
                </div>
                <div className="my-2 mod-form">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Your Follow-up Message
                  </label>
                  <textarea
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="send_follow_up"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.send_follow_up = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    value={
                      typeof campaignDetails["send_follow_up"] === "undefined"
                        ? ""
                        : campaignDetails["send_follow_up"]
                    }
                  />
                </div>
              </div>
            )}

            <div className="my-3 mod-check">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  // name="extract_data_after_person_connected"
                  value={extract_data_after_person_connected}
                  onChange={(e) => {
                    var cc = { ...campaignDetails };
                    cc.extract_data_after_person_connected = e.target.value;
                    setCampaignDetails(cc);
                    console.log(cc);
                  }}
                  checked={extract_data_after_person_connected}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Extract Data after person connected
                </label>
              </div>
            </div>

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
              <h6>Sequence step</h6>
            </div>

            {showSecOption && (
              <div className="inner-chck">
                <div className="form-check smallchck">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sequence_step_0"
                    value="sendEmail"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.sequence_step_0 = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    checked={
                      campaignDetails.sequence_step_0 === "sendEmail"
                        ? true
                        : false
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Send email
                  </label>
                </div>
                <div className="form-check smallchck">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sequence_step_0"
                    value="Endorse"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.sequence_step_0 = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    checked={
                      campaignDetails.sequence_step_0 === "Endorse"
                        ? true
                        : false
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Endorse
                  </label>
                </div>
                <div className="form-check smallchck">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sequence_step_0"
                    value="viewProfile"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.sequence_step_0 = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    checked={
                      campaignDetails.sequence_step_0 === "viewProfile"
                        ? true
                        : false
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    View Profile
                  </label>
                </div>
                <div className="form-check smallchck">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sequence_step_0"
                    value="sendFollowUp"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.sequence_step_0 = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    checked={
                      campaignDetails.sequence_step_0 === "sendFollowUp"
                        ? true
                        : false
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Send follow up message
                  </label>
                </div>
              </div>
            )}

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  setPage(7);
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* END OF ENGAGE */}

        {page === 7 && (
          <div className="last-body">
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Retain</h5>
                <p>Linkedlin 1st Level Connections</p>
              </div>

              <span>
                <span className="big-no">7</span>/7
              </span>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(2);
                }}
              >
                Go back
              </a>
            </div>

            <div className="shrt-msg">
              <p>
                Build your sequence
                <span>
                  * you must be first level connected on LinkedIn to use this
                  service
                </span>
              </p>
            </div>

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Send Message
              </label>
              <textarea
                type="text"
                className="form-control form-control-lg mod-input"
                id="exampleFormControlInput1"
              />
            </div>

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
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Sequence step
                </label>
              </div>
            </div>

            {showSecOption && (
              <div className="inner-chck">
                <div className="form-check smallchck">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sequence_step_1"
                    value="send_email"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.sequence_step_1 = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    checked={
                      campaignDetails.sequence_step_1 === "send_email"
                        ? true
                        : false
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Send email
                  </label>
                </div>
                <div className="form-check smallchck">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sequence_step_1"
                    value="endorse"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.sequence_step_1 = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    checked={
                      campaignDetails.sequence_step_1 === "emdorse"
                        ? true
                        : false
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Endorse
                  </label>
                </div>
                <div className="form-check smallchck">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sequence_step_1"
                    value="view_profile"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.sequence_step_1 = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    checked={
                      campaignDetails.sequence_step_1 === "view_profile"
                        ? true
                        : false
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    View Profile
                  </label>
                </div>
                <div className="form-check smallchck">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sequence_step_1"
                    value="follow_up"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.sequence_step_1 = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    checked={
                      campaignDetails.sequence_step_1 === "follow_up"
                        ? true
                        : false
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Send follow up message
                  </label>
                </div>
              </div>
            )}

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  setPage(2);
                }}
                type="submit"
              >
                Finish
              </button>
            </div>
          </div>
        )}

        {page === 8 && (
          <div className="last-body">
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Campaign Submited</h5>
              </div>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(2);
                }}
              >
                Go back
              </a>
            </div>

            <div className="success-page">
              <i className="bi bi-check-circle"></i>
              <p>
                You have successfully submitted a campaign. You will be notified
                when it’s up
              </p>
            </div>

            <div className="my-3 mod-btn">
              <Link to="dashboard">
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
