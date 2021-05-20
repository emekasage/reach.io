import React, { useState, useContext } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import { Link } from "react-router-dom";

export default function CampaignModal(props) {
  const { createCampaign } = useContext(providerFunctions);
  const [page, setPage] = useState(1);
  const [showCheckMark, setshowCheckMark] = useState(false);
  const [showCheckMarkTwo, setshowCheckMarkTwo] = useState(false);
  const [showCheckMarkThree, setshowCheckMarkThree] = useState(false);
  const [showInnerEngageCheckMark, setshowInnerEngageCheckMark] = useState(
    false
  );
  const [
    showInnerEngageCheckMarkTwo,
    setshowInnerEngageCheckMarkTwo,
  ] = useState(false);
  const [
    showInnerEngageCheckMarkThree,
    setshowInnerEngageCheckMarkThree,
  ] = useState(false);
  const [showEngageCheckMark, setshowEngageCheckMark] = useState(false);

  const handleCheckMark = () => {
    setshowCheckMark(true);
  };

  const handleCheckMarkTwo = () => {
    setshowCheckMarkTwo(true);
  };

  const handleCheckMarkThree = () => {
    setshowCheckMarkThree(true);
  };

  const handleInnerEngageCheckMark = () => {
    setshowInnerEngageCheckMark(true);
  };

  const handleInnerEngageCheckMarkTwo = () => {
    setshowInnerEngageCheckMarkTwo(true);
  };

  const handleInnerEngageCheckMarkThree = () => {
    setshowInnerEngageCheckMarkThree(true);
  };

  const handleEngageCheckMark = () => {
    setshowEngageCheckMark(true);
  };

  const [campaignDetails, setCampaignDetails] = useState({
    name: "",
    desc_keywords: "",
    hq_location: "",
    industry: "",
    no_of_employees: "",
    revenue_range: "",
    founded: "",
    active_hiring: "",
    leadership_hire: "",
    company_type: "",
    job_titles: "",
    job_status: "",
    skills_keywords: "",
    company_size: "",
    location: "",
    duration_current_role: "",
    send_connection_request: "",
    send_follow_up: "",
    extract_data_after_person_connected: 0,
    sequence_step_0: "",
    duration: "",
    options: "",
    crm: "",
    hiring_manager_connection_request: "",
    hiring_manager_follow_up: "",
    opportunities: "",
    sequence_step_1: "",
    contact_profile: "",
    follow_contact: "",
    business_email: "",
  });

  const [showOptions, setShowOptions] = useState(false);
  const [showSecOption, setShowSecOption] = useState(false);
  const [showThrdOption, setShowThrdOption] = useState(false);

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

  const handleThrdOption = () => {
    setShowThrdOption(true);
  };

  const cancelThrdOption = () => {
    setShowThrdOption(false);
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
                <p>Kindly enter a Campaign name</p>
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
                  console.log(cc);
                }}
                name="campaign_name"
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
                type="submit"
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
              {showCheckMark ? (
                <div className="check-icon">
                  <i className="bi bi-check-circle"></i>
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              className="my-3 mod-check"
              onClick={() => {
                setPage(5);
              }}
            >
              <h6>Email Search</h6>
              {showCheckMarkTwo ? (
                <div className="check-icon">
                  <i className="bi bi-check-circle"></i>
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              className="my-3 mod-check"
              onClick={() => {
                setPage(6);
              }}
            >
              <h6>Engage</h6>
              {showEngageCheckMark ? (
                <div className="check-icon">
                  <i className="bi bi-check-circle"></i>
                </div>
              ) : (
                ""
              )}
            </div>

            <div
              className="my-3 mod-check"
              onClick={() => {
                setPage(7);
              }}
            >
              <h6>Data Extract</h6>
              {showCheckMarkThree ? (
                <div className="check-icon">
                  <i className="bi bi-check-circle"></i>
                </div>
              ) : (
                ""
              )}
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
                <p>Use the search filters to find your target companies</p>
              </div>

              <span>
                <span className="big-no">3</span>/7
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
                name="desc_keywords"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.desc_keywords = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["desc_keywords"] === "undefined"
                    ? ""
                    : campaignDetails["desc_keywords"]
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
                name="hq_location"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.hq_location = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["hq_location"] === "undefined"
                    ? ""
                    : campaignDetails["hq_location"]
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
                name="industry"
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
                Number of Employees
              </label>
              <select
                className="form-select form-select-lg mod-select"
                aria-label="Default select example"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.no_of_employees = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["no_of_employees"] === "undefined"
                    ? ""
                    : campaignDetails["no_of_employees"]
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

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Estimated Revenue Range
              </label>
              <select
                className="form-select form-select-lg mod-select"
                aria-label="Default select example"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.revenue_range = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["revenue_range"] === "undefined"
                    ? ""
                    : campaignDetails["revenue_range"]
                }
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
                <p>Use the search filters to find your target companies</p>
              </div>

              <span>
                <span className="big-no">3</span>/7
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
                  cc.founded = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["founded"] === "undefined"
                    ? ""
                    : campaignDetails["founded"]
                }
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="past_30_days">Past 30 days</option>
                <option value="past_60_days">Past 60 days</option>
                <option value="past_90_days">Past 90 days</option>
                <option value="past_year">Past year</option>
                <option value="date_range">Customer Date Range</option>
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
                  cc.active_hiring = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["active_hiring"] === "undefined"
                    ? ""
                    : campaignDetails["active_hiring"]
                }
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
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
                  cc.leadership_hire = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["leadership_hire"] === "undefined"
                    ? ""
                    : campaignDetails["leadership_hire"]
                }
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="past_30_days">Past 30 days</option>
                <option value="past_60_days">Past 60 days</option>
                <option value="past_90_days">Past 90 days</option>
                <option value="past_year">Past year</option>
                <option value="date_range">Customer Date Range</option>
              </select>
            </div>

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Company Type
              </label>
              <select
                className="form-select form-select-lg mod-select"
                aria-label="Default select example"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.company_type = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["company_type"] === "undefined"
                    ? ""
                    : campaignDetails["company_type"]
                }
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="profit">For Profit</option>
                <option value="non_profit">For Non-profit</option>
              </select>
            </div>

            <div
              className="plus-add"
              onClick={() => {
                setPage(5);
              }}
            >
              <i className="bi bi-plus-circle-fill"></i>
              <span>add email search</span>
            </div>

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  handleCheckMark();
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
                <h5>Email Search</h5>
                <p>Find business emails of your target contacts</p>
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

            {/* <div className="my-3 mod-check">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="new_contacts"
                />
                <label className="form-check-label" htmlFor="flexRadioD2">
                  Job Titles
                </label>
              </div>
            </div> */}
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
              <h6>Job Titles</h6>
            </div>

            {showOptions && (
              <div>
                <div className="my-2 mod-form-inner">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Job title
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="skills_keywords"
                    placeholder="e.g. SAP, JavaScript, Azure"
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
                <div className="my-2 mod-form-inner">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Job title is
                  </label>
                  <select
                    className="form-select form-select-lg mod-select"
                    aria-label="Default select example"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.job_status = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    value={
                      typeof campaignDetails["job_status"] === "undefined"
                        ? ""
                        : campaignDetails["job_status"]
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
              </div>
            )}

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
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                name="location"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.location = e.target.value;
                  setCampaignDetails(cc);
                }}
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Industry
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                name="industry"
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
            <div
              className="plus-add"
              onClick={() => {
                setPage(6);
              }}
            >
              <i className="bi bi-plus-circle-fill"></i>
              <span>add engage campaign</span>
            </div>

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  handleCheckMarkTwo();
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
                <p>Start an outreach campaign</p>
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
                setPage(9);
              }}
            >
              <h6>Select your Outbound Campaign</h6>
              {showInnerEngageCheckMark ? (
                <div className="check-icon">
                  <i className="bi bi-check-circle"></i>
                </div>
              ) : (
                ""
              )}
            </div>

            <div
              className="my-3 mod-check"
              onClick={() => {
                setPage(10);
              }}
            >
              <h6>Build your Sequence</h6>
              {showInnerEngageCheckMarkTwo ? (
                <div className="check-icon">
                  <i className="bi bi-check-circle"></i>
                </div>
              ) : (
                ""
              )}
            </div>

            <div
              className="my-3 mod-check"
              onClick={() => {
                setPage(11);
              }}
            >
              <h6>Retain: LinkedIn 1st Level Connections</h6>
              {showInnerEngageCheckMarkThree ? (
                <div className="check-icon">
                  <i className="bi bi-check-circle"></i>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  handleEngageCheckMark();
                  setPage(2);
                }}
              >
                Finish
              </button>
            </div>
          </div>
        )}
        {/* END OF ENGAGE */}

        {page === 7 && (
          <div className="last-body">
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Data Extract</h5>
                <p>Collect data from your 1st Level Connections on Linkedlin</p>
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

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Job title
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                name="job_titles"
                placeholder="e.g. Financial Controllers, Engineeer, Developer"
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
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Job title is
              </label>
              <select
                className="form-select form-select-lg mod-select"
                aria-label="Default select example"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.job_status = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["job_status"] === "undefined"
                    ? ""
                    : campaignDetails["job_status"]
                }
              >
                <option selected hidden className="slct-plchldr">
                  Choose one
                </option>
                <option value="Current">Current</option>
                <option value="Past">Past</option>
                <option value="Current_or_Past">Current or Past</option>
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
              <label htmlFor="exampleFormControlInput1" className="form-label">
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
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Industry
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                name="industry"
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
              <label htmlFor="exampleFormControlInput1" className="form-label">
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

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  handleCheckMarkThree();
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

        {/* outbound campaign */}
        {page === 9 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Client Campaign</h5>
                <p>Engage with new prospects</p>
              </div>

              <span>
                <span className="big-no">5</span>/7
              </span>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(6);
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
              <h6>Client</h6>
            </div>

            {showOptions && (
              <div>
                <div className="my-2 mod-form">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Job title
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="job_titles"
                    placeholder="e.g. Financial Controllers, Engineeer, Developer"
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
                    Job title is
                  </label>
                  <select
                    className="form-select form-select-lg mod-select"
                    aria-label="Default select example"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.job_status = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    value={
                      typeof campaignDetails["job_status"] === "undefined"
                        ? ""
                        : campaignDetails["job_status"]
                    }
                  >
                    <option selected hidden className="slct-plchldr">
                      Choose one
                    </option>
                    <option value="Current">Current</option>
                    <option value="Past">Past</option>
                    <option value="Current_or_Past">Current or Past</option>
                  </select>
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
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.location = e.target.value;
                      setCampaignDetails(cc);
                    }}
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
              <h6>Candidate</h6>
            </div>

            {showSecOption && (
              <div>
                <div className="my-2 mod-form">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Job title
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="job_titles"
                    placeholder="e.g. Financial Controllers, Engineeer, Developer"
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
                    Job title is
                  </label>
                  <select
                    className="form-select form-select-lg mod-select"
                    aria-label="Default select example"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.job_status = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    value={
                      typeof campaignDetails["job_status"] === "undefined"
                        ? ""
                        : campaignDetails["job_status"]
                    }
                  >
                    <option selected hidden className="slct-plchldr">
                      Choose one
                    </option>
                    <option value="Current">Current</option>
                    <option value="Past">Past</option>
                    <option value="Current_or_Past">Current or Past</option>
                  </select>
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
                <div className="form-check bgchck">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="opportunities"
                    value="open_to_opportunities"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.opportunities = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    checked={
                      campaignDetails.opportunities === "open_to_opportunities"
                        ? true
                        : false
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Open to opportunities
                  </label>
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
                    <option value="0-12">0 - 12 months</option>
                    <option value="1-3">1 - 3 years</option>
                    <option value="3-5">3 - 5 years</option>
                    <option value="5-10">5 - 10 years</option>
                    <option value="10+">10 years+</option>
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
              </div>
            )}

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  handleInnerEngageCheckMark();
                  setPage(6);
                }}
              >
                Finish
              </button>
            </div>
          </div>
        )}
        {/* END OF outbound campaign */}

        {/* Sequence Steps */}
        {page === 10 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Build your Sequence</h5>
                <p>Build sequence</p>
              </div>

              <span>
                <span className="big-no">5</span>/7
              </span>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(6);
                }}
              >
                Go back
              </a>
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
              <div className="form-check bgchck2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="contact_profile"
                  value="view_contact_profile"
                  onChange={(e) => {
                    var cc = { ...campaignDetails };
                    cc.contact_profile = e.target.value;
                    setCampaignDetails(cc);
                  }}
                  checked={
                    campaignDetails.contact_profile === "view_contact_profile"
                      ? true
                      : false
                  }
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  View Contact Profile
                </label>
              </div>
            </div>

            {showSecOption && (
              <div>
                <div className="my-2 mod-form-inner">
                  <input
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="job_titles"
                    placeholder="Enter delay in hours"
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
              </div>
            )}

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
              <div className="form-check bgchck2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="follow_contact"
                  value="follow_contact"
                  onChange={(e) => {
                    var cc = { ...campaignDetails };
                    cc.follow_contact = e.target.value;
                    setCampaignDetails(cc);
                  }}
                  checked={
                    campaignDetails.follow_contact === "follow_contact"
                      ? true
                      : false
                  }
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Follow Contact
                </label>
              </div>
            </div>

            {showOptions && (
              <div>
                <div className="my-2 mod-form-inner">
                  <input
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="job_titles"
                    placeholder="Enter delay in hours"
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
              </div>
            )}

            <div
              className="my-3 mod-check"
              onClick={() => {
                {
                  showThrdOption === false && handleThrdOption();
                }
                {
                  showThrdOption === true && cancelThrdOption();
                }
              }}
            >
              <h6>Add Sequence Steps</h6>
            </div>

            {showThrdOption && (
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
                <div className="form-check bgchck">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="business_email"
                    value="business_email"
                    onChange={(e) => {
                      var cc = { ...campaignDetails };
                      cc.business_email = e.target.value;
                      setCampaignDetails(cc);
                    }}
                    checked={
                      campaignDetails.business_email === "business_email"
                        ? true
                        : false
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Find Business Email
                  </label>
                </div>
              </div>
            )}

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  handleInnerEngageCheckMarkTwo();
                  setPage(6);
                }}
              >
                Finish
              </button>
            </div>
          </div>
        )}
        {/* END OF Sequence steps */}

        {/* Retain Linkedln Connections */}
        {page === 11 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Retain: Linkedln 1st Level Connections</h5>
                <p>Nurture your 1st level connections on LinkedIn</p>
              </div>

              <span>
                <span className="big-no">5</span>/7
              </span>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(6);
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
              <div className="form-check bgchck2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="follow_contact"
                  value="follow_contact"
                  onChange={(e) => {
                    var cc = { ...campaignDetails };
                    cc.follow_contact = e.target.value;
                    setCampaignDetails(cc);
                  }}
                  checked={
                    campaignDetails.follow_contact === "follow_contact"
                      ? true
                      : false
                  }
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Send Follow up
                </label>
              </div>
            </div>

            {showOptions && (
              <div>
                <div className="my-2 mod-form-inner">
                  <h6 className="ikoko">Create Message</h6>
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
                <div className="my-2 mod-form-inner">
                  <input
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="job_titles"
                    placeholder="Enter delay in hours"
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
              <div className="form-check bgchck2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="follow_contact"
                  value="follow_contact"
                  onChange={(e) => {
                    var cc = { ...campaignDetails };
                    cc.follow_contact = e.target.value;
                    setCampaignDetails(cc);
                  }}
                  checked={
                    campaignDetails.follow_contact === "follow_contact"
                      ? true
                      : false
                  }
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Endorse
                </label>
              </div>
            </div>

            {showSecOption && (
              <div>
                <div className="my-2 mod-form-inner">
                  <input
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="job_titles"
                    placeholder="Enter delay in hours"
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
              </div>
            )}

            <div
              className="my-3 mod-check"
              onClick={() => {
                {
                  showThrdOption === false && handleThrdOption();
                }
                {
                  showThrdOption === true && cancelThrdOption();
                }
              }}
            >
              <div className="form-check bgchck2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="follow_contact"
                  value="follow_contact"
                  onChange={(e) => {
                    var cc = { ...campaignDetails };
                    cc.follow_contact = e.target.value;
                    setCampaignDetails(cc);
                  }}
                  checked={
                    campaignDetails.follow_contact === "follow_contact"
                      ? true
                      : false
                  }
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  View profile
                </label>
              </div>
            </div>

            {showThrdOption && (
              <div>
                <div className="my-2 mod-form-inner">
                  <input
                    type="text"
                    className="form-control form-control-lg mod-input"
                    name="job_titles"
                    placeholder="Enter delay in hours"
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
              </div>
            )}

            <div className="form-check bgchck">
              <input
                className="form-check-input"
                type="checkbox"
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
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Find Business Email
              </label>
            </div>

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  handleInnerEngageCheckMarkThree();
                  setPage(6);
                }}
              >
                Finish
              </button>
            </div>
          </div>
        )}
        {/* END OF Retain Linkedln Connections */}
      </form>
    </div>
  );
}
