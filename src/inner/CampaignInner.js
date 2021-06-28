/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import DateTime from "../components/DateTime";
import moment from "moment";
// import { Link } from "react-router-dom";
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
    userCampaignPage,
    setUserCampaignPage,
    createListPage,
    setCreateListPage,
    companySearch,
    companySearchResult,
    emailSearch,
    emailSearchResult,
    confirmCampaignSubmission,
    selectedSteps,
    resetStep,
    setSelectedSteps,
    dataExtract,
    extractResult,
    engageDetails,
    engageCampaign,
  } = useContext(providerFunctions);

  const { enqueueSnackbar } = useSnackbar();

  const [innerPage, setInnerPage] = useState(1);
  const [showCheckMark, setshowCheckMark] = useState(false);
  const [userCampaignData, setUserCampaignData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [viewAll] = useState(false);

  useEffect(() => {
    // console.log(managedCampaigns.campaign);
    if (typeof campaign.campaign !== "undefined") {
      if (typeof campaign.campaign.data !== "undefined") {
        setUserCampaignData(campaign.campaign.data);
        setPageCount(campaign.campaign.last_page);
      }
    }
  }, [campaign]);

  const showPaginationList = () => {
    let arr = Array.apply(null, { length: pageCount }).map(Number.call, Number);
    return (
      <ul className="pgntr">
        <li
          className="page-item page-link"
          onClick={() =>
            userCampaignPage !== 1
              ? setUserCampaignPage(userCampaignPage - 1)
              : ""
          }
        >
          Prev
        </li>
        {arr.map((item) => {
          return (
            <li
              className={`page-item  page-link ${
                userCampaignPage === item + 1 ? "active" : ""
              }`}
              onClick={() => setUserCampaignPage(item + 1)}
            >
              {item + 1}
            </li>
          );
        })}
        <li
          className="page-item page-link"
          onClick={() =>
            userCampaignPage !== pageCount
              ? setUserCampaignPage(userCampaignPage + 1)
              : ""
          }
        >
          Next
        </li>
      </ul>
    );
  };

  const [companyDetails, setCompanyDetails] = useState({
    campaign_name: "",
    description: "",
    hq_location: "",
    industry: "",
    no_of_employees: "",
    estimated_revenue_range: "",
    founded: "",
    actively_hiring: "",
    leadership_hire: "",
    company_type: "",
  });

  const [emailDetails, setEmailDetails] = useState({
    campaign_name: "",
    job_title: "",
    job_status: "",
    industry: "",
    skills_keywords: "",
    duration_current_role: "",
    location: "",
    company_size: "",
  });

  const [extractDetails, setExtractDetails] = useState({
    campaign_name: "",
    job_title: "",
    job_status: "",
    industry: "",
    skills_keywords: "",
    duration_current_role: "",
    location: "",
    company_size: "",
  });

  const handleCompanySubmit = (e) => {
    e.preventDefault();
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
  };

  const handleDataExtractSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    userCampaign();
    cancelCampaign();
    confirmCampaignSubmission();
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
                        <th>Campaign Type</th>
                        <th>Date</th>
                        <th>Linkedln User</th>
                        <th>Credits</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {userCampaignData.map((thisCampaignData, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                              {thisCampaignData.campaignable_type ===
                                "App\\Models\\CompanySearch" && (
                                <span>Campaign Search</span>
                              )}
                              {thisCampaignData.campaignable_type ===
                                "App\\Models\\DataExtract" && (
                                <span>Data Extract</span>
                              )}
                              {thisCampaignData.campaignable_type ===
                                "App\\Models\\EmailSearch" && (
                                <span>Email Search</span>
                              )}
                              {thisCampaignData.campaignable_type ===
                                "App\\Models\\Engage" && <span>Engage</span>}
                            </td>
                            <td>
                              {moment(thisCampaignData.created_at).format("L")}
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
                            <td>{thisCampaignData.campaign_status}</td>
                            <td>
                              <div className="btn-group dropend">
                                <span
                                  className="bi bi-three-dots-vertical dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                ></span>
                                <ul className="dropdown-menu">
                                  <p
                                    className="dots_details"
                                    id="rerun_camp"
                                    onClick={() => {
                                      setShowModal(true);
                                      setModalPage("rerun_campaign");
                                      setCampaignId(thisCampaignData.id);
                                    }}
                                  >
                                    Rerun Campaign
                                  </p>
                                  <p className="dots_details" id="cancel_stuff">
                                    {thisCampaignData.campaign_status ===
                                      "pending" && (
                                      <span
                                        className="cancel_camp"
                                        onClick={() => {
                                          setShowModal(true);
                                          setModalPage("cancel_campaign");
                                          setCampaignId(thisCampaignData.id);
                                        }}
                                      >
                                        Cancel Campaign
                                      </span>
                                    )}
                                    {thisCampaignData.campaign_status ===
                                      "approved" && (
                                      <span
                                        className="cancel_camp text-success"
                                        onClick={() =>
                                          enqueueSnackbar(
                                            "Approved Campaigns cannot be cancelled",
                                            {
                                              variant: "error",
                                            }
                                          )
                                        }
                                      >
                                        Approved
                                      </span>
                                    )}
                                    {thisCampaignData.campaign_status ===
                                      "cancelled" && (
                                      <span
                                        className="cancel_camp text-danger"
                                        onClick={() =>
                                          enqueueSnackbar(
                                            "Cancelled Campaigns cannot be cancelled",
                                            {
                                              variant: "error",
                                            }
                                          )
                                        }
                                      >
                                        Cancelled
                                      </span>
                                    )}
                                  </p>
                                  <p
                                    className="dots_details"
                                    onClick={() => {
                                      confirmCampaignSubmission(
                                        thisCampaignData.id
                                      );
                                      enqueueSnackbar(
                                        "Campaign Submitted Successfully",
                                        {
                                          variant: "success",
                                        }
                                      );
                                    }}
                                  >
                                    Confirm Submission
                                  </p>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-end table-feat">
                    <nav aria-label="Page navigation example">
                      {viewAll ? "" : showPaginationList()}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COMPANY SEARCH */}
        <form
          onSubmit={handleCompanySubmit}
          className="needs-validation"
          noValidate
        >
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
                  <h6
                    className={`camp-steps ${!showCheckMark ? "step-1" : ""}`}
                  >
                    Step 1
                  </h6>
                  <h6
                    className={`camp-steps ${!showCheckMark ? "step-2" : ""}`}
                  >
                    Step 2
                  </h6>
                </div>
                <div className="company-search">
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
                        var cs = { ...companyDetails };
                        cs.description = e.target.value;
                        setCompanyDetails(cs);
                      }}
                      value={
                        typeof companyDetails["description"] === "undefined"
                          ? ""
                          : companyDetails["description"]
                      }
                      id="validationCustom03"
                      required
                    />
                    <div className="invalid-feedback">
                      Please fill this field.
                    </div>
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
                        var cs = { ...companyDetails };
                        cs.hq_location = e.target.value;
                        setCompanyDetails(cs);
                      }}
                      value={
                        typeof companyDetails["hq_location"] === "undefined"
                          ? ""
                          : companyDetails["hq_location"]
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
                        var cs = { ...companyDetails };
                        cs.industry = e.target.value;
                        setCompanyDetails(cs);
                      }}
                      value={
                        typeof companyDetails["industry"] === "undefined"
                          ? ""
                          : companyDetails["industry"]
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
                        var cs = { ...companyDetails };
                        cs.no_of_employees = e.target.value;
                        setCompanyDetails(cs);
                      }}
                      value={
                        typeof companyDetails["no_of_employees"] === "undefined"
                          ? ""
                          : companyDetails["no_of_employees"]
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
                        var cs = { ...companyDetails };
                        cs.estimated_revenue_range = e.target.value;
                        setCompanyDetails(cs);
                      }}
                      value={
                        typeof companyDetails["estimated_revenue_range"] ===
                        "undefined"
                          ? ""
                          : companyDetails["estimated_revenue_range"]
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
                  <h6
                    className={`camp-steps ${!showCheckMark ? "step-1" : ""}`}
                  >
                    Step 2
                  </h6>
                </div>
                <div className="company-search">
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
                        var cs = { ...companyDetails };
                        cs.founded = e.target.value;
                        setCompanyDetails(cs);
                      }}
                      value={
                        typeof companyDetails["founded"] === "undefined"
                          ? ""
                          : companyDetails["founded"]
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
                        var cs = { ...companyDetails };
                        cs.actively_hiring = e.target.value;
                        setCompanyDetails(cs);
                      }}
                      value={
                        typeof companyDetails["actively_hiring"] === "undefined"
                          ? ""
                          : companyDetails["actively_hiring"]
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
                        var cc = { ...companyDetails };
                        cc.leadership_hire = e.target.value;
                        setCompanyDetails(cc);
                      }}
                      value={
                        typeof companyDetails["leadership_hire"] === "undefined"
                          ? ""
                          : companyDetails["leadership_hire"]
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
                        var cs = { ...companyDetails };
                        cs.company_type = e.target.value;
                        setCompanyDetails(cs);
                      }}
                      value={
                        typeof companyDetails["company_type"] === "undefined"
                          ? ""
                          : companyDetails["company_type"]
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
                        companySearch(companyDetails);
                        setInnerPage(7);
                      }}
                      type="submit"
                    >
                      Finish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {innerPage === 7 && (
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
              <div className="success-page">
                <i className="bi bi-check-circle"></i>
                <p>{companySearchResult.message}</p>
                {/* {console.log(companySearchResult.message)} */}
              </div>

              <button
                className="my-3 bck-btn"
                onClick={() => {
                  setInnerPage(1);
                }}
              >
                Go back to Campaigns
              </button>
            </div>
          )}
        </form>
        {/* END OF COMPANY SEARCH */}

        {/* EMAIL SEARCH */}
        <form onSubmit={handleEmailSubmit}>
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
                        name="job_title"
                        placeholder="e.g. Engineer, Accountant, Technician"
                        onChange={(e) => {
                          var es = { ...emailDetails };
                          es.job_title = e.target.value;
                          setEmailDetails(es);
                          console.log(es);
                        }}
                        value={
                          typeof emailDetails["job_title"] === "undefined"
                            ? ""
                            : emailDetails["job_title"]
                        }
                      />
                    </div>
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Job status
                      </label>
                      <select
                        className="form-select form-select-lg mod-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          var es = { ...emailDetails };
                          es.job_status = e.target.value;
                          setEmailDetails(es);
                        }}
                        value={
                          typeof emailDetails["job_status"] === "undefined"
                            ? ""
                            : emailDetails["job_status"]
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
                          var es = { ...emailDetails };
                          es.skills_keywords = e.target.value;
                          setEmailDetails(es);
                        }}
                        value={
                          typeof emailDetails["skills_keywords"] === "undefined"
                            ? ""
                            : emailDetails["skills_keywords"]
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
                          var es = { ...emailDetails };
                          es.location = e.target.value;
                          setEmailDetails(es);
                        }}
                        value={
                          typeof emailDetails["location"] === "undefined"
                            ? ""
                            : emailDetails["location"]
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
                          var es = { ...emailDetails };
                          es.industry = e.target.value;
                          setEmailDetails(es);
                        }}
                        value={
                          typeof emailDetails["industry"] === "undefined"
                            ? ""
                            : emailDetails["industry"]
                        }
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
                          var es = { ...emailDetails };
                          es.duration_current_role = e.target.value;
                          setEmailDetails(es);
                        }}
                        value={
                          typeof emailDetails["duration_current_role"] ===
                          "undefined"
                            ? ""
                            : emailDetails["duration_current_role"]
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
                          var es = { ...emailDetails };
                          es.company_size = e.target.value;
                          setEmailDetails(es);
                        }}
                        value={
                          typeof emailDetails["company_size"] === "undefined"
                            ? ""
                            : emailDetails["company_size"]
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
                        type="submit"
                        onClick={() => {
                          emailSearch(emailDetails);
                          setInnerPage(8);
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
          {innerPage === 8 && (
            <div>
              <div className="d-flex justify-content-between user-val">
                <div className="heading-col plus-bck">
                  <h5>
                    Campaign &gt;&gt; <strong>Email Search</strong>
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
              <div className="success-page">
                <i className="bi bi-check-circle"></i>
                <p>{emailSearchResult.message}</p>
              </div>

              <button
                className="my-3 bck-btn"
                onClick={() => {
                  setInnerPage(1);
                }}
              >
                Go back to Campaigns
              </button>
            </div>
          )}
        </form>
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
                    createListPage == 1 || createListPage == 1.5
                      ? "step-1"
                      : "step-2"
                  } ${
                    createListPage > 1.5 ? "check-step bi bi-check-circle" : ""
                  }`}
                >
                  1 - Add List
                </h6>
                <h6
                  className={`engage-steps ${
                    createListPage == 2 ||
                    createListPage == 2.3 ||
                    createListPage == 2.5
                      ? "step-1"
                      : "step-2"
                  } ${
                    createListPage > 2.5 ? "check-step bi bi-check-circle" : ""
                  }`}
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

              {createListPage == 1.5 && (
                <div>
                  <div className="eng-row">
                    <div className="seq_create">
                      <p className="seq-txt">Engage history</p>
                      <button
                        className="seq-btn"
                        onClick={() => {
                          setShowModal(true);
                          setModalPage("add_leads");
                        }}
                      >
                        Create new list
                      </button>
                    </div>
                    <div className="saved-items">
                      <span>01</span>
                      <span>CEOs in New York</span>
                      <span>Created on</span>
                      <span></span>
                    </div>
                  </div>
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

              {createListPage == 2.3 && (
                <div>
                  <div className="eng-row">
                    <div className="seq_create">
                      <p className="seq-txt">Engage history</p>
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
                    <div className="saved-items">
                      <span>01</span>
                      <span>CEOs in New York</span>
                      <span>Created on</span>
                      <span></span>
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
                          resetStep();
                        }}
                      >
                        Add step
                      </button>
                    </div>

                    {selectedSteps.map((selectedStep, index) => {
                      return (
                        <div key={index}>
                          <div className="mt-5 add-steps">
                            <div className="form-check step-prechck">
                              <div>
                                <img
                                  src="../../assets/img/Rectangle-714.png"
                                  className="img-chckbx"
                                />
                              </div>
                              {index > 1 && (
                                <div
                                  onClick={() => {
                                    var m = [...selectedSteps];
                                    m.splice(index, 1);
                                    setSelectedSteps(m);
                                  }}
                                >
                                  Delete
                                </div>
                              )}
                              <label
                                className="form-check-label"
                                htmlFor="follow_contact"
                              >
                                Step {index + 1} - {selectedStep.text}
                              </label>
                            </div>
                            <div className="delays">
                              <span className="step_day">
                                <label htmlFor="days">Days:</label>
                                <input
                                  type="text"
                                  id="days"
                                  name="days"
                                  size="1"
                                  onChange={(e) => {
                                    var m = [...selectedSteps];
                                    var name = e.target.name;
                                    var value = e.target.value;
                                    m[index][name] = value;
                                    setSelectedSteps(m);
                                  }}
                                />
                              </span>
                              <span className="step_hr">
                                <label htmlFor="hours">Hours:</label>
                                <input
                                  type="text"
                                  id="hours"
                                  name="hours"
                                  size="1"
                                  onChange={(e) => {
                                    var m = [...selectedSteps];
                                    var name = e.target.name;
                                    var value = e.target.value;
                                    m[index][name] = value;
                                    setSelectedSteps(m);
                                  }}
                                />
                              </span>
                              {typeof selectedStep.message !== "undefined" && (
                                <div>
                                  <textarea
                                    rows="2"
                                    cols="40"
                                    id="message"
                                    name="message"
                                    placeholder="Type your message"
                                    onChange={(e) => {
                                      var m = [...selectedSteps];
                                      var name = e.target.name;
                                      var value = e.target.value;
                                      m[index][name] = value;
                                      setSelectedSteps(m);
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                            <div></div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="my-5 eng-btns">
                      <button className="temp-btn">Save as template</button>
                      <button
                        className="continue-btn"
                        onClick={() => {
                          setCreateListPage(3);
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {createListPage == 3 && (
                <div>
                  <div className="eng-row">
                    <div className="seq_create">
                      <p className="seq-txt">Summary of your campaign</p>
                    </div>
                    {/* {JSON.stringify(selectedSteps)}
                    {JSON.stringify(engageDetails)} */}
                    <div>{engageDetails.list_name}</div>
                    <div>{engageDetails.connection_status}</div>
                    <div>{engageDetails.job_title}</div>
                    <div>{engageDetails.job_status}</div>
                    <div>{engageDetails.skills_keywords}</div>
                    <div>{engageDetails.location}</div>
                    <div>{engageDetails.industry}</div>
                    <div>{engageDetails.duration_current_role}</div>
                    {/* <div>{engageDetails.list_name}</div>
                    <div>{engageDetails.list_name}</div>
                    <div>{engageDetails.list_name}</div>
                    <div>{engageDetails.list_name}</div>
                    <div>{engageDetails.list_name}</div>
                    <div>{engageDetails.list_name}</div>
                    <div>{engageDetails.list_name}</div> */}

                    <p>Steps</p>
                    {selectedSteps.map((thisStep, index) => {
                      return (
                        <div key={index}>
                          <h3>
                            Step {index + 1} - {thisStep.text}
                          </h3>
                          <p>Days - {thisStep.days}</p>
                          <p>Hours - {thisStep.hours}</p>
                          {typeof thisStep.message !== "undefined" && (
                            <p>Message - {thisStep.message}</p>
                          )}
                        </div>
                      );
                    })}
                    <div className="my-5 eng-btns">
                      <button
                        className="continue-btn"
                        onClick={() => {
                          engageCampaign();
                        }}
                      >
                        Submit a Campaign
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* END OF ENGAGE */}

        {/* DATA EXTRACT */}
        <form onSubmit={handleDataExtractSubmit}>
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
                        *you must be first level connected on LinkedIn to use
                        this service
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
                          var de = { ...extractDetails };
                          de.job_title = e.target.value;
                          setExtractDetails(de);
                        }}
                        value={
                          typeof extractDetails["job_title"] === "undefined"
                            ? ""
                            : extractDetails["job_title"]
                        }
                      />
                    </div>
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Job Status
                      </label>
                      <select
                        className="form-select form-select-lg mod-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          var de = { ...extractDetails };
                          de.job_status = e.target.value;
                          setExtractDetails(de);
                        }}
                        value={
                          typeof extractDetails["job_status"] === "undefined"
                            ? ""
                            : extractDetails["job_status"]
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
                          var de = { ...extractDetails };
                          de.skills_keywords = e.target.value;
                          setExtractDetails(de);
                        }}
                        value={
                          typeof extractDetails["skills_keywords"] ===
                          "undefined"
                            ? ""
                            : extractDetails["skills_keywords"]
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
                          var de = { ...extractDetails };
                          de.location = e.target.value;
                          setExtractDetails(de);
                        }}
                        value={
                          typeof extractDetails["location"] === "undefined"
                            ? ""
                            : extractDetails["location"]
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
                          var de = { ...extractDetails };
                          de.industry = e.target.value;
                          setExtractDetails(de);
                        }}
                        value={
                          typeof extractDetails["industry"] === "undefined"
                            ? ""
                            : extractDetails["industry"]
                        }
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
                          var de = { ...extractDetails };
                          de.duration_current_role = e.target.value;
                          setExtractDetails(de);
                        }}
                        value={
                          typeof extractDetails["duration_current_role"] ===
                          "undefined"
                            ? ""
                            : extractDetails["duration_current_role"]
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
                          var de = { ...extractDetails };
                          de.company_size = e.target.value;
                          setExtractDetails(de);
                        }}
                        value={
                          typeof extractDetails["company_size"] === "undefined"
                            ? ""
                            : extractDetails["company_size"]
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
                        type="submit"
                        onClick={() => {
                          dataExtract(extractDetails);
                          setInnerPage(9);
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
          {innerPage === 9 && (
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
              <div className="success-page">
                <i className="bi bi-check-circle"></i>
                <p>{extractResult.message}</p>
              </div>

              <button
                className="my-3 bck-btn"
                onClick={() => {
                  setInnerPage(1);
                }}
              >
                Go back to Campaigns
              </button>
            </div>
          )}
        </form>
        {/* END OF DATA EXTRACT */}
      </div>
    </div>
  );
}
