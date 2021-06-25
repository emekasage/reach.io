import React, { useContext, useEffect, useState } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function ViewCancelRequestModal() {
  const { viewSingleCampaignRequest, requestId, singleCancelRequest } =
    useContext(providerFunctions);

  const [campaignRequest, setCampaignRequest] = useState([]);

  useEffect(() => {
    viewSingleCampaignRequest(requestId);
  }, []);

  useEffect(() => {
    if (singleCancelRequest.campaign_request !== "undefined") {
      setCampaignRequest(singleCancelRequest.campaign_request);
      console.log(singleCancelRequest.campaign_request);
    }
  }, [singleCancelRequest]);

  console.log("===", requestId);
  console.log(campaignRequest);

  return (
    <div className="assign-credmod">
      <div className="creditarea">
        <div className="mt-3 mod-form">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label request-head"
          >
            Reason for cancelling campaign
          </label>
          <div>
            {campaignRequest.map((campaignRequest) => (
              // eslint-disable-next-line react/jsx-key
              <div className="request-body">{campaignRequest.body}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
