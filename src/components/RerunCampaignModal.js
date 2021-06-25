import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function RerunCampaignModal(props) {
  const [page, setPage] = useState(1);
  const { rerunMessage, rerunCampaign, campaignId } =
    useContext(providerFunctions);

  useEffect(() => {
    rerunCampaign();
    console.log("uhrfni", campaignId);
  }, []);

  return (
    <div className="req-cancel">
      {page === 1 && (
        <div>
          <div className="cancelcamp">
            <h5>
              {/* {JSON.stringify(thisCampaignData.campaign_name)} */}
              Do you want to rerun this campaign?
            </h5>
          </div>

          <div className="my-3 mod-assbtn">
            <button
              className="yes-btn"
              onClick={() => {
                rerunCampaign(campaignId);
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
        <div>
          <i className="bi bi-check-circle statusIcon"></i>
          <p>{rerunMessage.message}</p>
        </div>
      )}
    </div>
  );
}
