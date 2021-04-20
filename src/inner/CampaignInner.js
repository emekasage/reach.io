import React, { useContext, useEffect } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import DateTime from "../components/DateTime";
import moment from "moment";

export default function CampaignInner() {
  const {
    showSideBar,
    setShowModal,
    setModalPage,
    campaign,
    userCampaign,
  } = useContext(providerFunctions);

  useEffect(() => {
    userCampaign();
  }, []);

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

        <div className="camp-img">
          <div className="group-img-txt">
            <img src="assets/img/Group-camp-1.png" />
            <div className="camp-img-txt">
              <p>Submit your desired campain</p>
              <h4>Start the process now</h4>
            </div>
          </div>
          <div className="camp-img-btn d-flex align-items-center">
            <button
              type="button"
              className="btn-dashboard"
              onClick={() => {
                setShowModal(true);
                setModalPage("campaign-modal");
              }}
            >
              Submit a Campaign
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-12 col-xxl-9 d-flex user-tab">
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
                    <th>Status</th>
                  </tr>
                </thead>
                {typeof campaign.campaign.data !== "undefined" && (
                  <tbody>
                    {campaign.campaign.data.map((thisCampaignData, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{thisCampaignData.name}</td>
                          <td>
                            {moment(thisCampaignData.created_at).format("lll")}
                          </td>
                          <td>{thisCampaignData.campaign_status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
