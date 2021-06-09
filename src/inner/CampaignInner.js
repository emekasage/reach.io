import React, { useContext, useEffect, useState } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import DateTime from "../components/DateTime";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function CampaignInner() {
  const {
    showSideBar,
    setShowModal,
    setModalPage,
    campaign,
    userCampaign,
    setCampaignId,
    cancelCampaign,
    createListPage,
    // createCampaign,
  } = useContext(providerFunctions);
  const { enqueueSnackbar } = useSnackbar();

  const [innerPage, setInnerPage] = useState(1);
  const [showCheckMark, setshowCheckMark] = useState(false);
  // const [innerFormPage, setInnerFormPage] = useState(2);

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

  useEffect(() => {
    userCampaign();
    cancelCampaign();
  }, []);

  return (
    <div className={`pagebody ${showSideBar ? "" : "expand"}`}>
      <div className="container-fluid p-0">
        {innerPage === 1 && (
          <div>
            <div className="d-flex justify-content-between user-val">
              <div className="heading-col">
                <h5>
                  <strong>Campaign</strong>
                </h5>
              </div>
              <div className="date-form">
                <DateTime />
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-xxl-12 d-flex camp-flex">
                <div className="w-100">
                  <div className="row flow-type">
                    <div className="camp-flow">
                      <div className="card flow-card flex-fill bd-highlight">
                        <div className="card-body">
                          <div
                            onClick={() => {
                              setInnerPage(2);
                            }}
                            className="card-content"
                          >
                            <img
                              src="../../assets/img/Group-465.svg"
                              alt=""
                              width="80"
                              height="150"
                              className="camp-type mb-4 yo"
                            />
                          </div>
                        </div>
                        <p className="camp-name">Company Search</p>
                      </div>
                      <div className="card flow-card flex-fill bd-highlight">
                        <div className="card-body">
                          <div
                            onClick={() => {
                              setInnerPage(4);
                            }}
                            className="card-content"
                          >
                            <img
                              src="../../assets/img/Group-465.svg"
                              alt=""
                              width="80"
                              height="150"
                              className="camp-type mb-4 yo"
                            />
                          </div>
                        </div>
                        <p className="camp-name">Email Search</p>
                      </div>
                      <div className="card flow-card flex-fill bd-highlight">
                        <div className="card-body">
                          <div
                            className="card-content"
                            onClick={() => {
                              setInnerPage(5);
                            }}
                          >
                            <img
                              src="../../assets/img/Group-465.svg"
                              alt=""
                              width="80"
                              height="150"
                              className="camp-type mb-4 yo"
                            />
                          </div>
                        </div>
                        <p className="camp-name">Engage</p>
                      </div>
                      <div className="card flow-card flex-fill bd-highlight">
                        <div className="card-body">
                          <div
                            className="card-content"
                            onClick={() => {
                              setInnerPage(6);
                            }}
                          >
                            <img
                              src="../../assets/img/Group-465.svg"
                              alt=""
                              width="80"
                              height="150"
                              className="camp-type mb-4 yo"
                            />
                          </div>
                        </div>
                        <p className="camp-name">Data Extract</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-12 col-xxl-12 d-flex user-tab">
                <div className="card flex-fill">
                  <div className="card-header table-card-head d-flex justify-content-between">
                    <h5 className="card-title mb-0 table-title">
                      Campaign history
                    </h5>
                  </div>
                  <table className="table table-hover my-1">
                    <thead>
                      <tr>
                        <th scope="col">S/N</th>
                        <th>Name of Campaign</th>
                        <th>Date</th>
                        <th>Credits</th>
                        <th>Linkedln User</th>
                        <th>Status</th>
                        <th>Request Cancellation</th>
                      </tr>
                    </thead>
                    {typeof campaign.campaign.data !== "undefined" && (
                      <tbody>
                        {campaign.campaign.data.map(
                          (thisCampaignData, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                  {thisCampaignData.campaign_name}
                                  {console.log(thisCampaignData.id)}
                                </td>
                                <td>
                                  {moment(thisCampaignData.created_at).format(
                                    "L"
                                  )}
                                </td>
                                <td>
                                  {thisCampaignData.campaign_status ===
                                    "approved" && <span>---</span>}
                                  {thisCampaignData.campaign_status ===
                                    "cancelled" && <span>---</span>}
                                  {thisCampaignData.campaign_status ===
                                    "pending" && (
                                    <a
                                      className="camp-form-lnk"
                                      onClick={() => {
                                        setShowModal(true);
                                        setModalPage("assign_credit");
                                        setCampaignId(thisCampaignData.id);
                                      }}
                                    >
                                      Assign Credits
                                    </a>
                                  )}
                                </td>
                                <td>
                                  {thisCampaignData.campaign_status ===
                                    "approved" && <span>---</span>}
                                  {thisCampaignData.campaign_status ===
                                    "cancelled" && <span>---</span>}
                                  {thisCampaignData.campaign_status ===
                                    "pending" && (
                                    <a
                                      className="camp-form-lnk"
                                      onClick={() => {
                                        setShowModal(true);
                                        setModalPage("assign_user");
                                        setCampaignId(thisCampaignData.id);
                                      }}
                                    >
                                      Assign/Add User
                                    </a>
                                  )}
                                </td>
                                <td>{thisCampaignData.campaign_status}</td>
                                <td>
                                  {thisCampaignData.campaign_status ===
                                    "pending" && (
                                    <Link to="#" className="table-icons">
                                      <i
                                        className="bi bi-x-circle-fill"
                                        onClick={() => {
                                          setShowModal(true);
                                          setModalPage("cancel_campaign");
                                          setCampaignId(thisCampaignData.id);
                                        }}
                                      ></i>
                                    </Link>
                                  )}
                                  {thisCampaignData.campaign_status ===
                                    "approved" && (
                                    <Link to="#" className="table-icons">
                                      <i
                                        className="bi bi-dash-circle-fill"
                                        onClick={() =>
                                          enqueueSnackbar(
                                            "Approved Campaigns cannot be cancelled",
                                            {
                                              variant: "error",
                                            }
                                          )
                                        }
                                      ></i>
                                    </Link>
                                  )}
                                  {thisCampaignData.campaign_status ===
                                    "cancelled" && (
                                    <Link to="#" className="table-icons">
                                      <i
                                        className="bi bi-dash-circle-fill"
                                        onClick={() =>
                                          enqueueSnackbar(
                                            "Cancelled Campaigns cannot be cancelled",
                                            {
                                              variant: "error",
                                            }
                                          )
                                        }
                                      ></i>
                                    </Link>
                                  )}
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COMPANY SEARCH */}
        {innerPage === 2 && (
          <div>
            <div className="d-flex justify-content-between user-val">
              <div className="heading-col plus-bck">
                <h5>
                  Campaign &gt;&gt; <strong>Company Search</strong>
                </h5>
                <a
                  className="camp-back-lnk"
                  onClick={() => {
                    setInnerPage(1);
                  }}
                >
                  <i
                    className="bi bi-arrow-left"
                    style={{ marginRight: "5px", fontSize: "16px" }}
                  ></i>
                  Go back
                </a>
              </div>
              <div className="date-form">
                <DateTime />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-lg-10 col-xxl-10 d-flex company-steps">
                <h6 className={`camp-steps ${!showCheckMark ? "step-1" : ""}`}>
                  Step 1
                </h6>
                <h6 className={`camp-steps ${!showCheckMark ? "step-2" : ""}`}>
                  Step 2
                </h6>
              </div>
              <div className="company-search">
                <div className="my-2 mod-form">
                  <label htmlFor="validationCustom03" className="form-label">
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
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a campaign name
                  </div>
                </div>
                <div className="my-2 mod-form">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
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
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
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
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
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

                <div className="my-3 mod-btn">
                  <button
                    onClick={() => {
                      setshowCheckMark(showCheckMark);
                      setInnerPage(3);
                    }}
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {innerPage === 3 && (
          <div>
            <div className="d-flex justify-content-between user-val">
              <div className="heading-col plus-bck">
                <h5>
                  Campaign &gt;&gt; <strong>Company Search</strong>
                </h5>
                <a
                  className="camp-back-lnk"
                  onClick={() => {
                    setshowCheckMark(showCheckMark);
                    setInnerPage(2);
                  }}
                >
                  <i
                    className="bi bi-arrow-left"
                    style={{ marginRight: "5px", fontSize: "16px" }}
                  ></i>
                  Go back
                </a>
              </div>
              <div className="date-form">
                <DateTime />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-lg-10 col-xxl-10 d-flex company-steps">
                <h6
                  className={`camp-steps ${
                    !showCheckMark ? "check-step bi bi-check-circle" : ""
                  }`}
                >
                  Step 1
                </h6>
                <h6 className={`camp-steps ${!showCheckMark ? "step-1" : ""}`}>
                  Step 2
                </h6>
              </div>
              <div className="company-search">
                <div className="my-2 mod-form">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
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

                <div className="my-2 mod-form">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
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
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
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
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
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
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
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

                <div className="my-3 mod-btn">
                  <button
                    onClick={() => {
                      setInnerPage(1);
                    }}
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* END OF COMPANY SEARCH */}

        {/* EMAIL SEARCH */}
        {innerPage === 4 && (
          <div>
            <div className="d-flex justify-content-between user-val">
              <div className="heading-col plus-bck">
                <h5>
                  Campaign &gt;&gt; <strong>Email Search</strong>
                </h5>
                <a
                  className="camp-back-lnk"
                  onClick={() => {
                    setshowCheckMark(showCheckMark);
                    setInnerPage(1);
                  }}
                >
                  <i
                    className="bi bi-arrow-left"
                    style={{ marginRight: "5px", fontSize: "16px" }}
                  ></i>
                  Go back
                </a>
              </div>
              <div className="date-form">
                <DateTime />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-lg-10 col-xxl-10 d-flex">
                <div className="email-search">
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
                      name="skills_keywords"
                      placeholder="e.g. Engineer, Accountant, Technician"
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
                      <option value="current">Current</option>
                      <option value="past">Past</option>
                      <option value="current_or_past">Current or Past</option>
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
                        typeof campaignDetails["skills_keywords"] ===
                        "undefined"
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

                  <div className="my-3 mod-btn">
                    <button
                      onClick={() => {
                        setInnerPage(1);
                      }}
                    >
                      Finish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* END OF EMAIL SEARCH */}

        {/* ENGAGE */}
        {innerPage === 5 && (
          <div>
            <div className="d-flex justify-content-between user-val">
              <div className="heading-col plus-bck">
                <h5>
                  Campaign &gt;&gt; <strong>Engage</strong>
                </h5>
                <a
                  className="camp-back-lnk"
                  onClick={() => {
                    setInnerPage(1);
                  }}
                >
                  <i
                    className="bi bi-arrow-left"
                    style={{ marginRight: "5px", fontSize: "16px" }}
                  ></i>
                  Go back
                </a>
              </div>
              <div className="date-form">
                <DateTime />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-lg-10 col-xxl-10 d-flex company-steps">
                <h6
                  className={`engage-steps ${
                    createListPage == 1 ? "step-1" : "step-2"
                  } ${
                    createListPage > 1 ? "check-step bi bi-check-circle" : ""
                  }`}
                >
                  {/* <span
                    className="bi bi-check-circle"
                    style={{ paddingRight: "5px" }}
                  ></span>{" "} */}
                  1 - Add List
                </h6>
                <h6
                  className={`engage-steps ${
                    createListPage == 2 || createListPage == 2.5
                      ? "step-1"
                      : "step-2"
                  } ${createListPage > 2.5 ? "check-step" : ""}`}
                >
                  2 - Create Sequence
                </h6>
                <h6
                  className={`engage-steps ${
                    createListPage == 3 ? "step-1" : "step-2"
                  } ${createListPage > 3 ? "check-step" : ""}`}
                >
                  3 - Summary
                </h6>
              </div>
              {createListPage == 1 && (
                <div className="big-add-icon">
                  <i
                    className="bi bi-plus"
                    onClick={() => {
                      setShowModal(true);
                      setModalPage("add_leads");
                      setshowCheckMark(showCheckMark);
                    }}
                  ></i>
                  <p>Add new leads</p>
                </div>
              )}

              {createListPage == 2 && (
                <div>
                  <div className="eng-row">
                    <div className="seq_create">
                      <p className="seq-txt">Create Sequence</p>
                      <button
                        className="seq-btn"
                        onClick={() => {
                          setShowModal(true);
                          setModalPage("create_sequence");
                        }}
                      >
                        Create Sequence
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {createListPage == 2.5 && (
                <div>
                  <div className="eng-row">
                    <div className="seq_create">
                      <p className="seq-txt">Create Sequence</p>
                      <button
                        className="seq-btn"
                        onClick={() => {
                          setShowModal(true);
                          setModalPage("engage_steps");
                        }}
                      >
                        Add step
                      </button>
                    </div>
                    <div className="mt-4 add-steps">
                      <div className="form-check step-prechck">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="view_profile"
                          id="view_profile"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="view_profile"
                        >
                          Step 1 - View Profile
                        </label>
                      </div>
                      <div className="delays">
                        <label htmlFor="days" className="step_day">
                          Days:
                        </label>
                        <input
                          type="text"
                          id="days"
                          name="days"
                          maxLength="1"
                          size="1"
                        />
                        <label htmlFor="hours" className="step_hr">
                          Hours:
                        </label>
                        <input
                          type="text"
                          id="hours"
                          name="hours"
                          maxLength="1"
                          size="1"
                        />
                      </div>
                      <div></div>
                    </div>
                    <div className="mt-5 add-steps">
                      <div className="form-check step-prechck">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="follow_contact"
                          id="follow_contact"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="follow_contact"
                        >
                          Step 2 - Follow Contact
                        </label>
                      </div>
                      <div className="delays">
                        <label htmlFor="days" className="step_day">
                          Days:
                        </label>
                        <input
                          type="text"
                          id="days"
                          name="days"
                          maxLength="1"
                          size="1"
                        />
                        <label htmlFor="hours" className="step_hr">
                          Hours:
                        </label>
                        <input
                          type="text"
                          id="hours"
                          name="hours"
                          maxLength="1"
                          size="1"
                        />
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* END OF ENGAGE */}

        {/* DATA EXTRACT */}
        {innerPage === 6 && (
          <div>
            <div className="d-flex justify-content-between user-val">
              <div className="heading-col plus-bck">
                <h5>
                  Campaign &gt;&gt; <strong>Data Extract</strong>
                </h5>
                <a
                  className="camp-back-lnk"
                  onClick={() => {
                    setshowCheckMark(showCheckMark);
                    setInnerPage(1);
                  }}
                >
                  <i
                    className="bi bi-arrow-left"
                    style={{ marginRight: "5px", fontSize: "16px" }}
                  ></i>
                  Go back
                </a>
              </div>
              <div className="date-form">
                <DateTime />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-lg-10 col-xxl-10 d-flex">
                <div className="email-search">
                  <div className="note-1">
                    <p>
                      *you must be first level connected on LinkedIn to use this
                      service
                    </p>
                  </div>
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
                      name="skills_keywords"
                      placeholder="e.g. Engineer, Accountant, Technician"
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
                      <option value="current">Current</option>
                      <option value="past">Past</option>
                      <option value="current_or_past">Current or Past</option>
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
                        typeof campaignDetails["skills_keywords"] ===
                        "undefined"
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

                  <div className="my-3 mod-btn">
                    <button
                      onClick={() => {
                        setInnerPage(1);
                      }}
                    >
                      Finish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* END OF DATA EXTRACT */}
      </div>
    </div>
  );
}
