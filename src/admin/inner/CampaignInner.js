/* eslint-disable react/jsx-key */
import React, { useContext, useState, useEffect } from "react";
import { providerFunctions } from "../../provider/FunctionsProvider";
import DateTime from "../../components/DateTime";
import moment from "moment";
// import { set } from "react-hook-form";

export default function DashboardInner() {
  const {
    getMetrics,
    metrics,
    setShowModal,
    setModalPage,
    showSideBar,
    managedCampaigns,
    campaignManagement,
    approveCampaign,
    declineCampaign,
    viewCancelCampaign,
    viewSingleCampaignRequest,
    setRequestId,
    cancelRequest,
    campaignPage,
    setCampaignPage,
    getUserInfo,
    getCampaignInfo,
  } = useContext(providerFunctions);

  const [thisUserInfo, setThisUserInfo] = useState({});
  const [thisCampaignInfo, setThisCampaignInfo] = useState({});
  const [campaignData, setCampaignData] = useState([]);
  const [innerPage, setInnerPage] = useState(1);

  const [toshow, settoshow] = useState({});
  const [pageCount, setPageCount] = useState(0);
  const [viewAll] = useState(false);

  useEffect(async () => {
    if (typeof toshow.user_id !== "undefined") {
      var m = {};
      m = await getUserInfo(toshow.user_id);
      setThisUserInfo(m);
    }
    if (typeof toshow.campaignable_id !== "undefined") {
      var c = {};
      c = await getCampaignInfo(toshow.campaignable_id);
      setThisCampaignInfo(c);
    }
  }, [toshow]);
  useEffect(() => {
    getMetrics();
    campaignManagement();
    viewCancelCampaign();
    viewSingleCampaignRequest();
  }, []);

  useEffect(() => {
    // console.log(managedCampaigns.campaign);
    if (typeof managedCampaigns.campaign !== "undefined") {
      if (typeof managedCampaigns.campaign.data !== "undefined") {
        setCampaignData(managedCampaigns.campaign.data);
        setPageCount(managedCampaigns.campaign.last_page);
      }
    }
  }, [managedCampaigns]);

  const [showCancelButton, setShowCancelButton] = useState(false);

  const [campaingnCancelRequest, setCampaingnCancelRequest] = useState({});

  useEffect(() => {
    // console.log(campaignData);

    if (typeof toshow.id !== "undefined") {
      setShowCancelButton(false);
      setCampaingnCancelRequest({});
      if (typeof cancelRequest.campaign_requests !== "undefined") {
        if (typeof cancelRequest.campaign_requests.data !== "undefined") {
          cancelRequest.campaign_requests.data.filter((thisData) => {
            if (thisData.campaign_id === toshow.id) {
              setShowCancelButton(true);
              setCampaingnCancelRequest(thisData);
            }
          });
        }
      }
    }
  }, [cancelRequest.campaign_requests, toshow.id]);

  const showPaginationList = () => {
    let arr = Array.apply(null, { length: pageCount }).map(Number.call, Number);
    return (
      <ul className="pgntr">
        <li
          className="page-item page-link"
          onClick={() =>
            campaignPage !== 1 ? setCampaignPage(campaignPage - 1) : ""
          }
        >
          Prev
        </li>
        {arr.map((item) => {
          return (
            <li
              className={`page-item  page-link ${
                campaignPage === item + 1 ? "active" : ""
              }`}
              onClick={() => setCampaignPage(item + 1)}
            >
              {item + 1}
            </li>
          );
        })}
        <li
          className="page-item page-link"
          onClick={() =>
            campaignPage !== pageCount ? setCampaignPage(campaignPage + 1) : ""
          }
        >
          Next
        </li>
      </ul>
    );
  };

  return (
    <div className={`pagebody ${showSideBar ? "" : "expand"}`}>
      <div className="container-fluid p-0">
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

        {innerPage === 1 && (
          <div>
            <div className="row">
              <div className="col-xl-12 col-xxl-12 d-flex camp-flex">
                <div className="w-100">
                  <div className="row orobo">
                    <div className="camp-build">
                      <div className="card tiny-cmp-cards flex-fill bd-highlight">
                        <div className="card-body">
                          <div
                            onClick=""
                            className="d-flex justify-content-between top-card-content"
                          >
                            <h5 className="card-title mb-4 yo">
                              Total no. of <br /> Users
                            </h5>
                          </div>
                          <div className={`r-chart  ? "show" : "hide"}`}>
                            <div className="mb-1 mid-card-content cmp-adm-tent">
                              <h1 className="mt-1 mb-3 cc">
                                {typeof metrics.users !== "undefined"
                                  ? metrics.users
                                  : 0}
                              </h1>
                              <div className="megaphone-bck">
                                <img
                                  src="../../assets/img/campain-megaphone.svg"
                                  alt="Avatar"
                                  className="megaphone-icon"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card tiny-cmp-cards flex-fill bd-highlight">
                        <div className="card-body">
                          <div
                            onClick=""
                            className="d-flex justify-content-between top-card-content"
                          >
                            <h5 className="card-title mb-4 yo">
                              Total no. of <br />
                              approved campaigns
                            </h5>
                          </div>
                          <div className={`r-chart ? "show" : "hide"}`}>
                            <div className="mb-1 mid-card-content cmp-adm-tent">
                              <h1 className="mt-1 mb-3 cc">
                                {typeof metrics.approved_campaigns !==
                                "undefined"
                                  ? metrics.approved_campaigns
                                  : 0}
                              </h1>
                              <div className="megaphone-bck">
                                <img
                                  src="../../assets/img/campain-megaphone.svg"
                                  alt="Avatar"
                                  className="megaphone-icon"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card tiny-cmp-cards flex-fill bd-highlight">
                        <div className="card-body">
                          <div
                            onClick=""
                            className="d-flex justify-content-between top-card-content"
                          >
                            <h5 className="card-title mb-4 yo">
                              Total no. of <br />
                              declined campaigns
                            </h5>
                          </div>
                          <div className={`r-chart  "show" : "hide"}`}>
                            <div className="mb-1 mid-card-content cmp-adm-tent">
                              <h1 className="mt-1 mb-3 cc">
                                {typeof metrics.cancelled_campaigns !==
                                "undefined"
                                  ? metrics.cancelled_campaigns
                                  : 0}
                              </h1>
                              <div className="megaphone-bck">
                                <img
                                  src="../../assets/img/campain-megaphone.svg"
                                  alt="Avatar"
                                  className="megaphone-icon"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card tiny-cmp-cards flex-fill bd-highlight">
                        <div className="card-body">
                          <div
                            onClick=""
                            className="d-flex justify-content-between top-card-content"
                          >
                            <h5 className="card-title mb-4 yo">
                              Total no. of <br />
                              completed campaigns
                            </h5>
                          </div>
                          <div className={`r-chart ? "show" : "hide"}`}>
                            <div className="mb-1 mid-card-content cmp-adm-tent">
                              <h1 className="mt-1 mb-3 cc">
                                {typeof metrics.completed_campaigns !==
                                "undefined"
                                  ? metrics.completed_campaigns
                                  : 0}
                              </h1>
                              <div className="megaphone-bck">
                                <img
                                  src="../../assets/img/campain-megaphone.svg"
                                  alt="Avatar"
                                  className="megaphone-icon"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card tiny-cmp-cards flex-fill bd-highlight">
                        <div className="card-body">
                          <div
                            onClick=""
                            className="d-flex justify-content-between top-card-content"
                          >
                            <h5 className="card-title mb-4 yo">
                              Total no. of <br />
                              pending campaigns
                            </h5>
                          </div>
                          <div className={`r-chart ? "show" : "hide"}`}>
                            <div className="mb-1 mid-card-content cmp-adm-tent">
                              <h1 className="mt-1 mb-3 cc">
                                {typeof metrics.pending_campaigns !==
                                "undefined"
                                  ? metrics.pending_campaigns
                                  : 0}
                              </h1>
                              <div className="megaphone-bck">
                                <img
                                  src="../../assets/img/campain-megaphone.svg"
                                  alt="Avatar"
                                  className="megaphone-icon"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-12 col-xxl-12 d-flex user-tab yo">
                <div className="card flex-fill">
                  <div className="card-header table-card-head d-flex justify-content-between">
                    <h5 className="card-title mb-0 table-title">Campaign</h5>
                  </div>
                  <table className="table table-hover my-1">
                    <tbody>
                      {campaignData.map((thisManagedCampaigns, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <input
                                type="checkbox"
                                className="custom-control-input camp-chckbx"
                                id="customCheck1"
                              />
                            </td>
                            <td>
                              {thisManagedCampaigns.campaignable_type ===
                                "App\\Models\\ContactSearch" && (
                                <span>Contact Search</span>
                              )}
                              {thisManagedCampaigns.campaignable_type ===
                                "App\\Models\\DataExtract" && (
                                <span>Data Extract</span>
                              )}
                              {thisManagedCampaigns.campaignable_type ===
                                "App\\Models\\Engage" && <span>Engage</span>}
                            </td>
                            <td>{thisManagedCampaigns.campaign_name}</td>
                            <td>
                              {moment(thisManagedCampaigns.created_at).format(
                                "lll"
                              )}
                            </td>
                            <td>
                              {thisManagedCampaigns.no_of_credits_allocated}
                            </td>
                            <td>
                              <a
                                className="camp-form-lnk"
                                onClick={() => {
                                  // console.log(thisManagedCampaigns);
                                  settoshow(thisManagedCampaigns);
                                  setInnerPage(2);
                                }}
                              >
                                View details
                              </a>
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

        {innerPage === 2 && (
          <div>
            <div className="row">
              <div className="col-lg-12 col-xxl-12 camp-status">
                <div className="card status-card">
                  <a
                    className="back-lnk"
                    onClick={() => {
                      setInnerPage(1);
                    }}
                  >
                    Go back
                  </a>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-9">
                        <div className="card-header d-flex justify-content-between can-details">
                          <div className="status-txt">
                            <h4>
                              No. of Credits Allocated:{" "}
                              {toshow.no_of_credits_allocated}
                            </h4>
                            {/* <h4>{toshow.name}</h4>
                            <p>From {toshow.company}</p> */}
                          </div>
                          <div className="status-btn">
                            <span>
                              Campaign Status: {toshow.campaign_status}
                            </span>
                          </div>
                          {/* {JSON.stringify(campaingnCancelRequest)} */}

                          {showCancelButton && (
                            <div className="status-btn">
                              <span
                                className="view-canreq"
                                onClick={() => {
                                  setShowModal(true);
                                  setModalPage("view_request");
                                  setRequestId(campaingnCancelRequest.id);
                                }}
                              >
                                View Cancel Request
                              </span>
                            </div>
                          )}
                        </div>
                        {typeof toshow.campaignable_type !== "undefined" && (
                          typeof thisUserInfo.user !== "undefined" && 
                          typeof thisCampaignInfo.campaign_type !==
                            "undefined" && 
                            <>
                              {/* {JSON.stringify(toshow)}
                              {JSON.stringify(thisUserInfo)}
                              {JSON.stringify(thisCampaignInfo.campaign_type)} */}
                              {toshow.campaignable_type.includes(
                                "DataExtract"
                              ) === true && (
                                <div className="gcgc">
                                  <h4 className="my-3">About you</h4>
                                  <div className="my-4">
                                    <p className="faded-p">Email address</p>
                                    <p className="norm-p">
                                      {}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Full Name</p>
                                    <p className="norm-p">
                                      {}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Country</p>
                                    <p className="norm-p">
                                      {}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Company</p>
                                    <p className="norm-p">
                                      {}
                                    </p>
                                  </div>

                                  <h4 className="my-3 bb-h4">
                                    About your campaign
                                  </h4>
                                  <div className="my-4">
                                    <p className="faded-p">Job Title</p>
                                    <p className="norm-p">
                                      {thisCampaignInfo.campaign_type.job_title}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Job Status</p>
                                    <p className="norm-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .job_status
                                      }
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">
                                      Skill and Keywords
                                    </p>
                                    <p className="norm-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .skills_and_keyword
                                      }
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Industry</p>
                                    <p className="norm-p">
                                      {thisCampaignInfo.campaign_type.industry}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Location</p>
                                    <p className="norm-p">
                                      {thisCampaignInfo.campaign_type.location}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">
                                      Duration in Company Role
                                    </p>
                                    <p className="norm-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .duration_in_current_role
                                      }
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Company Size</p>
                                    <p className="norm-p lng-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .company_size
                                      }
                                    </p>
                                  </div>
                                </div>
                              )}
                              {toshow.campaignable_type.includes(
                                "ContactSearch"
                              ) === true && (
                                <div className="gcgc">
                                  <h4 className="my-3">About you</h4>
                                  <div className="my-4">
                                    <p className="faded-p">Email address</p>
                                    <p className="norm-p">{thisUserInfo.email}</p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">
                                      Name
                                    </p>
                                    <p className="norm-p">{}</p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Country</p>
                                    <p className="norm-p">
                                      {}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Company</p>
                                    <p className="norm-p">
                                      {}
                                    </p>
                                  </div>

                                  <h4 className="my-3 bb-h4">
                                    About your campaign
                                  </h4>
                                  <div className="my-4">
                                    <p className="faded-p">Description</p>
                                    <p className="norm-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .description
                                      }
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Location</p>
                                    <p className="norm-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .hq_location
                                      }
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Industry</p>
                                    <p className="norm-p">
                                      {thisCampaignInfo.campaign_type.industry}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">
                                      Number of Employees
                                    </p>
                                    <p className="norm-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .no_of_employees
                                      }
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">
                                      Estimated Revenue Range
                                    </p>
                                    <p className="norm-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .estimated_revenue_range
                                      }
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Founded</p>
                                    <p className="norm-p">
                                      {thisCampaignInfo.campaign_type.founded}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Actively Hiring</p>
                                    <p className="norm-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .actively_hiring
                                      }
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Leadership Hire</p>
                                    <p className="norm-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .leadership_hire
                                      }
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Company Type</p>
                                    <p className="norm-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .company_type
                                      }
                                    </p>
                                  </div>

                                  <h4 className="my-3 bb-h4">
                                    Email Search campaign
                                  </h4>

                                  <div className="my-4">
                                    <p className="faded-p">Job Title</p>
                                    <p className="norm-p lng-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .job_title
                                      }
                                    </p>
                                  </div>
                                  <div className="my-4">
                                    <p className="faded-p">Job Status</p>
                                    <p className="norm-p lng-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .job_status
                                      }
                                    </p>
                                  </div>
                                  <div className="my-4">
                                    <p className="faded-p">Skills and Keyword</p>
                                    <p className="norm-p lng-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .skills_and_keyword
                                      }
                                    </p>
                                  </div>
                                  <div className="my-4">
                                    <p className="faded-p">Duration in Current Role</p>
                                    <p className="norm-p lng-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .duration_in_current_role
                                      }
                                    </p>
                                  </div>
                                  <div className="my-4">
                                    <p className="faded-p">Company Size</p>
                                    <p className="norm-p lng-p">
                                      {
                                        thisCampaignInfo.campaign_type
                                          .company_size
                                      }
                                    </p>
                                  </div>
                                </div>
                              )}
                              {toshow.campaignable_type.includes(
                                "Engage"
                              ) === true && (
                                <div className="gcgc">
                                  <h4 className="my-3">About you</h4>
                                  <div className="my-4">
                                    <p className="faded-p">Email address</p>
                                    <p className="norm-p">{toshow.email}</p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">
                                      Full Name
                                    </p>
                                    <p className="norm-p">{toshow.name}</p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Country</p>
                                    <p className="norm-p">
                                      {toshow.linkdn_username}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Company</p>
                                    <p className="norm-p">
                                      {toshow.linkdn_password}
                                    </p>
                                  </div>

                                  <h4 className="my-3 bb-h4">
                                    About your campaign
                                  </h4>
                                  <div className="my-4">
                                    <p className="faded-p">List Name</p>
                                    <p className="norm-p">
                                      {thisCampaignInfo.campaign_type.list_name}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">
                                      Connection Status
                                    </p>
                                    <p className="norm-p">
                                    {thisCampaignInfo.campaign_type.connection_status}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Job Title</p>
                                    <p className="norm-p">{thisCampaignInfo.campaign_type.job_title}</p>
                                  </div>

                                  <h4 className="my-3 bb-h4">
                                    Candidate Acquisition
                                  </h4>
                                  <div className="my-4">
                                    <p className="faded-p">Job Status</p>
                                    <p className="norm-p">
                                    {thisCampaignInfo.campaign_type.job_status}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">
                                      Skills and Keywords
                                    </p>
                                    <p className="norm-p">{thisCampaignInfo.campaign_type.skills_and_keyword}</p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Industry</p>
                                    <p className="norm-p">{thisCampaignInfo.campaign_type.industry}</p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Location</p>
                                    <p className="norm-p">{thisCampaignInfo.campaign_type.location}</p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">
                                      Duration in Current Role
                                    </p>
                                    <p className="norm-p lng-p">
                                      {thisCampaignInfo.campaign_type.duration_in_current_role}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Company Size</p>
                                    <p className="norm-p lng-p">
                                      {thisCampaignInfo.campaign_type.company_size}
                                    </p>
                                  </div>
                                  <h4 className="my-3 bb-h4">
                                    Sequence
                                  </h4>
                                  <div className="my-4">
                                    <p className="faded-p">View Profile</p>
                                    <p className="norm-p">
                                      {thisCampaignInfo.campaign_type.view_profile_seq_duration}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">
                                      Follow Contact
                                    </p>
                                    <p className="norm-p">
                                    {thisCampaignInfo.campaign_type.follow_contact_seq_duration}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Like a Post</p>
                                    <p className="norm-p">
                                      {thisCampaignInfo.campaign_type.like_a_post_seq}
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Follow Up Message</p>
                                    <p className="norm-p">
                                      {thisCampaignInfo.campaign_type.send_follow_up_seq_message}
                                    </p>
                                  </div>

                                  {/* <div className="my-4">
                                    <p className="faded-p">Location</p>
                                    <p className="norm-p">
                                      {toshow.hiring_manager_location}
                                    </p>
                                  </div>

                                  <h4 className="my-3 bb-h4">
                                    Company Linkedln Message
                                  </h4>
                                  <div className="my-4">
                                    <p className="faded-p">
                                      Your Connection Request Message
                                    </p>
                                    <p className="norm-p lng-p">
                                      {
                                        toshow.hiring_manager_connection_request_message
                                      }
                                    </p>
                                  </div>

                                  <div className="my-4">
                                    <p className="faded-p">Follow up message</p>
                                    <p className="norm-p lng-p">
                                      {toshow.hiring_manager_follow_up_message}
                                    </p>
                                  </div> */}
                                </div>
                              )}
                            </>
                          )}
                      </div>
                      <div className="col-sm-3">
                        <div className="card action-card">
                          <div className="card-header actionstxt">
                            <h6>Actions</h6>
                          </div>
                          <div className="card-body action-btns">
                            <button
                              className="approve-btn"
                              onClick={() => approveCampaign(toshow.id)}
                            >
                              Approve
                            </button>
                            <button
                              className="decline-btn"
                              onClick={() => declineCampaign(toshow.id)}
                            >
                              Decline
                            </button>
                            {/* <button
                              className="delcamp-btn"
                              onClick={() => declineCampaign(toshow.id)}
                            >
                              Delete
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
