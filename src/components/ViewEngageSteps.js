import React, { useContext } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
export default function ViewEngageSteps() {
  const { steps, setSelectedSteps, selectedSteps } =
    useContext(providerFunctions);
  return (
    <div>
      <div className="steps">
        <div className="view-profile">
          <img
            src="../../assets/img/Group-489.svg"
            className="shrink-on-hover"
            onClick={() => {
              var m = [...selectedSteps];
              var stop = false;
              m.filter((thisStep) => {
                if (thisStep.text == steps[0].text) {
                  stop = true;
                }
              });
              if (!stop) {
                var k = steps[0];
                k["days"] = 0;
                k["hours"] = 0;
                m.push(k);
                setSelectedSteps(m);
              }
            }}
          />
          <p>View Profile</p>
        </div>
        <div className="conn-request">
          <img
            src="../../assets/img/Group-488.svg"
            className="shrink-on-hover"
            onClick={() => {
              var m = [...selectedSteps];
              var stop = false;
              m.filter((thisStep) => {
                if (thisStep.text == steps[1].text) {
                  stop = true;
                }
              });
              if (!stop) {
                var k = steps[1];
                k["days"] = 0;
                k["hours"] = 0;
                k["message"] = "";
                m.push(k);
                setSelectedSteps(m);
              }
            }}
          />
          <p>Send Connection Request</p>
        </div>
        <div className="like-post">
          <img
            src="../../assets/img/Group-490.svg"
            className="shrink-on-hover"
            onClick={() => {
              var m = [...selectedSteps];
              var stop = false;
              m.filter((thisStep) => {
                if (thisStep.text == steps[2].text) {
                  stop = true;
                }
              });
              if (!stop) {
                var k = steps[2];
                k["days"] = 0;
                k["hours"] = 0;
                m.push(k);
                setSelectedSteps(m);
              }
            }}
          />
          <p>Like a Post</p>
        </div>
        <div className="follow-up">
          <img
            src="../../assets/img/Group-491.svg"
            className="shrink-on-hover"
            onClick={() => {
              var m = [...selectedSteps];
              var stop = false;
              m.filter((thisStep) => {
                if (thisStep.text == steps[3].text) {
                  stop = true;
                }
              });
              if (!stop) {
                var k = steps[3];
                k["days"] = 0;
                k["hours"] = 0;
                k["message"] = "";
                m.push(k);
                setSelectedSteps(m);
              }
            }}
          />
          <p>Send Follow Up Message</p>
        </div>
      </div>
    </div>
  );
}
