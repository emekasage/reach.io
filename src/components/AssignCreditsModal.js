import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { providerFunctions } from "../provider/FunctionsProvider";

export default function AssignCreditsModal(props) {
  const {
    userDetails,
    assignCredit,
    campaignId,
    creditMessage,
    creditStatus,
  } = useContext(providerFunctions);
  const [page, setPage] = useState(1);
  console.log("===", campaignId);

  const handleChange = () => {
    console.log(creditAmountRef.current.value);
  };

  const creditAmountRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var amt = creditAmountRef.current.value;
      await assignCredit(amt, campaignId);
      setPage(3);
    } catch (error) {
      console.log("yababa", error.message);
    }
  };
  return (
    <div className="assign-credmod">
      <div className="d-flex justify-content-between mod-head">
        <div className="total-credit">
          <h6>Your total credit</h6>
          <p>{userDetails.user.credits}</p>
        </div>
      </div>

      {page === 1 && (
        <div>
          <div className="assign-modtitle">
            <h5>Use existing credits?</h5>
          </div>

          <div className="my-3 mod-assbtn">
            <button
              className="yes-btn"
              onClick={() => {
                setPage(2);
              }}
            >
              Yes, Use Credit
            </button>
            <Link
              to="buycredit"
              onClick={() => {
                // eslint-disable-next-line react/prop-types
                props.setShowModal(false);
              }}
            >
              <button className="no-btn">No, Buy Credit</button>
            </Link>
          </div>
        </div>
      )}

      {page === 2 && (
        <div className="creditarea">
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
          <div className="mb-2 mod-form">
            <input
              type="number"
              className="form-control form-control-lg mod-input"
              name="creditAmount"
              placeholder="Type your preferred credit here"
              ref={creditAmountRef}
              onChange={handleChange}
            />
          </div>
          <button className="assign-btn" onClick={handleSubmit}>
            Assign Credit
          </button>
        </div>
      )}

      {/* <div className={creditStatus ? "success" : "failed"}>{creditMessage}</div> */}

      {page === 3 && (
        <div className={creditStatus ? "success" : "failed"}>
          <i className="bi bi-check-circle statusIcon"></i>
          <i className="bi bi-x-circle statusIcon"></i>
          {creditMessage}
        </div>
      )}
    </div>
  );
}
