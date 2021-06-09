import React from "react";

export default function ViewEngageSteps() {
  return (
    <div>
      <div className="steps">
        <div className="view-profile">
          <img
            src="../../assets/img/Group-489.svg"
            className="shrink-on-hover"
          />
          <p>View Profile</p>
        </div>
        <div className="conn-request">
          <img
            src="../../assets/img/Group-488.svg"
            className="shrink-on-hover"
          />
          <p>Send Connection Request</p>
        </div>
        <div className="like-post">
          <img
            src="../../assets/img/Group-490.svg"
            className="shrink-on-hover"
          />
          <p>Like a Post</p>
        </div>
        <div className="follow-up">
          <img
            src="../../assets/img/Group-491.svg"
            className="shrink-on-hover"
          />
          <p>Send Follow Up Message</p>
        </div>
      </div>
    </div>
  );
}
