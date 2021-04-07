import React, { useState } from "react";

export default function CreditModal() {
  const [page, setPage] = useState(1);
  return (
    <div>
      {page === 1 && (
        <div>
          <div className="card-header d-flex justify-content-between mod-head">
            <div className="mod-title">
              <h4>Select a Package</h4>
            </div>
          </div>
          <div className="my-3 mod-check">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                2,909 for $345
              </label>
            </div>
          </div>
          <div className="my-3 mod-check">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                2,909 for $345
              </label>
            </div>
          </div>
          <div className="my-3 mod-check">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                2,909 for $345
              </label>
            </div>
          </div>
          <div className="my-3 mod-check">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                2,909 for $345
              </label>
            </div>
          </div>
          <div className="my-3 mod-check">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                2,909 for $345
              </label>
            </div>
          </div>
          <div className="my-3 mod-btn">
            <button
              onClick={() => {
                setPage(2);
              }}
            >
              Purchase now
            </button>
          </div>
        </div>
      )}

      {page === 2 && (
        <div>
          <div className="card-header d-flex justify-content-between mod-head">
            <div className="mod-title">
              <h4>Payment Method</h4>
            </div>

            <a
              className="back-lnk"
              onClick={() => {
                setPage(1);
              }}
            >
              Go back
            </a>
          </div>
          <div className="card crd-pay">
            <div className="card-body inner-crd-pay">
              <div className="crd-pay-txt">
                <i className="bi bi-dot pay-dot"></i>
                <h6>Verify the information before processing</h6>
              </div>
              <div className="crd-pay-list">
                <div className="crd-value">
                  <p>2909 Credit</p>
                  <p>Tax</p>
                </div>
                <div className="crd-value">
                  <p>$395</p>
                  <p>Nil</p>
                </div>
              </div>
              <div className="crd-subtotal">
                <p>Subtotal</p>
                <p>$395</p>
              </div>
            </div>
          </div>
          <div className="my-2 mod-btn">
            <button
              className="paypal-btn"
              onClick={() => {
                setPage(2);
              }}
            >
              <img src="../../assets/img/group-paypal.svg" alt="" />
            </button>
            <button
              className="cred-btn"
              onClick={() => {
                setPage(2);
              }}
            >
              <i className="bi bi-credit-card-2-back"></i>
              &nbsp;Debit or Credit Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
