import React, { useContext, useState, useEffect } from "react";
import { providerFunctions } from "../../provider/FunctionsProvider";
import DateTime from "../../components/DateTime";
import moment from "moment";

export default function DashboardInner() {
  const [page, setPage] = useState(1);
  const [toshow, settoshow] = useState({});
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
  } = useContext(providerFunctions);

  useEffect(() => {
    getMetrics();
    campaignManagement();
  }, []);

  useEffect(() => {
    // console.log(metrics.users);
  }, [metrics]);

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

        {page === 1 && (
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
                    {typeof managedCampaigns.campaign.data !== "undefined" && (
                      <tbody>
                        {managedCampaigns.campaign.data.map(
                          (thisManagedCampaigns, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <input
                                    type="checkbox"
                                    className="custom-control-input camp-chckbx"
                                    id="customCheck1"
                                  />
                                </td>
                                <td>{thisManagedCampaigns.company}</td>
                                <td>{thisManagedCampaigns.campaign_name}</td>
                                <td>
                                  {moment(
                                    thisManagedCampaigns.created_at
                                  ).format("lll")}
                                </td>
                                <td>
                                  <a
                                    className="camp-form-lnk"
                                    onClick={() => {
                                      // console.log(thisManagedCampaigns);
                                      settoshow(thisManagedCampaigns);
                                      setPage(2);
                                    }}
                                  >
                                    View details
                                  </a>
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

        {page === 2 && (
          <div>
            <div className="row">
              <div className="col-lg-12 col-xxl-12 camp-status">
                <div className="card status-card">
                  <a
                    className="back-lnk"
                    onClick={() => {
                      setPage(1);
                    }}
                  >
                    Go back
                  </a>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-9">
                        <div className="card-header d-flex justify-content-between can-details">
                          <div className="status-txt">
                            <h4>{toshow.name}</h4>
                            <p>From {toshow.company}</p>
                          </div>
                          <div className="status-btn">
                            <span>
                              Campaign Status: {toshow.campaign_status}
                            </span>
                          </div>
                          <div className="status-btn">
                            <span
                              className="view-canreq"
                              onClick={() => {
                                setShowModal(true);
                                setModalPage("view_request");
                              }}
                            >
                              View Cancel Request
                            </span>
                          </div>
                        </div>
                        <div className="gcgc">
                          <h4 className="my-3">About you</h4>
                          <div className="my-4">
                            <p className="faded-p">Email address</p>
                            <p className="norm-p">{toshow.email}</p>
                          </div>

                          <div className="my-4">
                            <p className="faded-p">First Name and Last Name</p>
                            <p className="norm-p">{toshow.name}</p>
                          </div>

                          <div className="my-4">
                            <p className="faded-p">LinkedIn username</p>
                            <p className="norm-p">{toshow.linkdn_username}</p>
                          </div>

                          <div className="my-4">
                            <p className="faded-p">LinkedIn password</p>
                            <p className="norm-p">{toshow.linkdn_password}</p>
                          </div>

                          <h4 className="my-3 bb-h4">About your campaign</h4>
                          <div className="my-4">
                            <p className="faded-p">Candidate Options</p>
                            <p className="norm-p">{toshow.campaign_options}</p>
                          </div>

                          <div className="my-4">
                            <p className="faded-p">Campaign Durations</p>
                            <p className="norm-p">{toshow.campaign_duration}</p>
                          </div>

                          <div className="my-4">
                            <p className="faded-p">CRM</p>
                            <p className="norm-p">{toshow.crm}</p>
                          </div>

                          <h4 className="my-3 bb-h4">Candidate Acquisition</h4>
                          <div className="my-4">
                            <p className="faded-p">Job Title</p>
                            <p className="norm-p">{toshow.job_titles}</p>
                          </div>

                          <div className="my-4">
                            <p className="faded-p">Skills and Keywords</p>
                            <p className="norm-p">{toshow.skills}</p>
                          </div>

                          <div className="my-4">
                            <p className="faded-p">Image attached</p>
                            <img src="../../assets/img/Rec-586.png" />
                          </div>

                          <div className="my-4">
                            <p className="faded-p">Industry</p>
                            <p className="norm-p">{toshow.industry}</p>
                          </div>

                          <div className="my-4">
                            <p className="faded-p">Location</p>
                            <p className="norm-p">{toshow.location}</p>
                          </div>

                          <h4 className="my-3 bb-h4">
                            Candidate Linkedln Message
                          </h4>
                          <div className="my-4">
                            <p className="faded-p">
                              Your Connection Request Message
                            </p>
                            <p className="norm-p lng-p">
                              {toshow.connection_request_message}
                            </p>
                          </div>

                          <div className="my-4">
                            <p className="faded-p">Follow up message</p>
                            <p className="norm-p lng-p">
                              {toshow.follow_up_message}
                            </p>
                          </div>
                          <h4 className="my-3 bb-h4">Client Acquisition</h4>
                          <div className="my-4">
                            <p className="faded-p">Job Title</p>
                            <p className="norm-p">
                              {toshow.hiring_manager_job_titles}
                            </p>
                          </div>

                          <div className="my-4">
                            <p className="faded-p">Skills and Keywords</p>
                            <p className="norm-p">
                              {toshow.hiring_manager_skills}
                            </p>
                          </div>

                          <div className="my-4">
                            <p className="faded-p">Industry</p>
                            <p className="norm-p">
                              {toshow.hiring_manager_industry}
                            </p>
                          </div>

                          <div className="my-4">
                            <p className="faded-p">Company SIze</p>
                            <p className="norm-p">
                              {toshow.hiring_manager_company_size}
                            </p>
                          </div>

                          <div className="my-4">
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
                              {toshow.hiring_manager_connection_request_message}
                            </p>
                          </div>

                          <div className="my-4">
                            <p className="faded-p">Follow up message</p>
                            <p className="norm-p lng-p">
                              {toshow.hiring_manager_follow_up_message}
                            </p>
                          </div>
                        </div>
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
