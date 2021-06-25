import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function RequestCancelModal(props) {
  const [page, setPage] = useState(1);
  const {
    campaign,
    cancelCampaign,
    campaignId,
    cancellationMsg,
    cancellationStatus,
  } = useContext(providerFunctions);
  const [campaignData, setCampaignData] = useState([]);

  const handleChange = () => {
    console.log(reasonRef.current.value);
  };

  const reasonRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var cr = reasonRef.current.value;
      await cancelCampaign(campaignId, cr);
      setPage(3);
      // console.log(res.message);
    } catch (error) {
      console.log("yabababababababa", error.message);
    }
  };

  useEffect(() => {
    if (typeof campaign.campaign !== "undefined") {
      if (typeof campaign.campaign.data !== "undefined") {
        console.log(campaign.campaign.data);
        setCampaignData(campaign.campaign.data);
      }
    }
  }, [campaign]);

  return (
    <div className="req-cancel">
      {page === 1 && (
        <div>
          <div className="cancelcamp">
            <h5>
              {/* {JSON.stringify(thisCampaignData.campaign_name)} */}
              Are you sure you want to cancel {campaignData.campaign_name}
              campaign?
            </h5>
          </div>

          <div className="my-3 mod-assbtn">
            <button
              className="yes-btn"
              onClick={() => {
                setPage(2);
              }}
            >
              Yes
            </button>
            <Link
              // to="buycredit"
              onClick={() => {
                // eslint-disable-next-line react/prop-types
                props.setShowModal(false);
              }}
            >
              <button className="no-btn">No</button>
            </Link>
          </div>
        </div>
      )}

      {page === 2 && (
        <div className="reasonarea">
          <div className="mb-3 mod-back-lnk">
            <a
              className="back-lnk"
              onClick={() => {
                setPage(1);
              }}
            >
              Go back
            </a>
          </div>
          <div className="my-2 mod-form">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Reason for cancelling campaign
            </label>
            <textarea
              type="text"
              className="form-control form-control-lg mod-input"
              id="exampleFormControlInput1"
              name="campaignBody"
              ref={reasonRef}
              onChange={handleChange}
            />
          </div>
          <button className="assign-btn" onClick={handleSubmit}>
            Cancel Campaign
          </button>
        </div>
      )}

      {page === 3 && (
        <div className={cancellationStatus ? "success" : "failed"}>
          <i className="bi bi-check-circle statusIcon"></i>
          <i className="bi bi-x-circle statusIcon"></i>
          {cancellationMsg}
        </div>
      )}
    </div>
  );
}
