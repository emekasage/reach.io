import React, { useContext, useEffect, useState } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function ViewCancelRequestModal() {
  // const { campaign } = useContext(providerFunctions);
  // const [campaignData, setCampaignData] = useState([]);

  const { viewSingleCampaignRequest, requestId, singleCancelRequest } =
    useContext(providerFunctions);

  const [campaignRequest, setCampaignRequest] = useState([]);

  useEffect(() => {
    viewSingleCampaignRequest();
  }, []);

  useEffect(() => {
    if (typeof singleCancelRequest.campaign_request !== "undefined") {
      setCampaignRequest(singleCancelRequest.campaign_request);
      console.log(singleCancelRequest.campaign_request);
    }
  }, [singleCancelRequest]);

  console.log("===", requestId);
  console.log(campaignRequest);

  return (
    <div className="assign-credmod">
      <div className="creditarea">
        <div className="my-2 mod-form">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Reason for cancelling campaign
          </label>
          <div>{campaignRequest.body}</div>
        </div>
      </div>
    </div>
  );
}
