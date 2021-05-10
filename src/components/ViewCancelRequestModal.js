import React from "react";
// import { providerFunctions } from "../provider/FunctionsProvider";

export default function ViewCancelRequestModal() {
  // const { campaign } = useContext(providerFunctions);
  // const [campaignData, setCampaignData] = useState([]);

  // useEffect(() => {
  //   if (typeof campaign.campaign !== "undefined") {
  //     if (typeof campaign.campaign.data !== "undefined") {
  //       console.log(campaign.campaign.data);
  //       setCampaignData(campaign.campaign.data);
  //     }
  //   }
  // }, [campaign]);

  return (
    <div className="assign-credmod">
      <div className="creditarea">
        <div className="my-2 mod-form">
          <div>
            <p>name of campaign: </p>
            <p>name of user: </p>
          </div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Reason for cancelling campaign
          </label>
          <textarea
            type="text"
            className="form-control form-control-lg mod-input"
            id="exampleFormControlInput1"
          />
        </div>
      </div>
    </div>
  );
}
