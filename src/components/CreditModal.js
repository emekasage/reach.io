import React, { useState, useContext, useEffect } from "react";
import Checkout from "./Checkout";
import { providerFunctions } from "../provider/FunctionsProvider";
export default function CreditModal() {
  const { credit, setCredit, paymentStatus, setPaymentStatus, paymentMessage } =
    useContext(providerFunctions);
  useEffect(() => {
    if (paymentStatus) {
      setPage(3);
      setPaymentStatus(false);
    }
  }, [paymentStatus]);
  const [page, setPage] = useState(1);
  return (
    <div>
      {page === 1 && (
        <div>
          <div className="card-header d-flex justify-content-between mod-head">
            <div className="mod-title">
              <h4>Select a Package</h4>
              {/* {JSON.stringify(credit)} */}
            </div>
          </div>
          <div className="my-3 mod-check">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="99"
                onChange={() => {
                  setCredit({ credit: 1000, value: 99 });
                  console.log(32233);
                }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                <div className="pckg">
                  <span className="pckg-name">Starter</span>
                  <span className="pckg-value">
                    &nbsp;- 1,000 credits for £99
                  </span>
                </div>
              </label>
            </div>
          </div>
          <div className="my-3 mod-check">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="299"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={() => {
                  setCredit({ credit: 4500, value: 299 });
                  console.log("Yaba");
                }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                <div className="pckg">
                  <span>Individual</span>
                  <span> &nbsp;- 4,500 credits for £299</span>
                </div>
              </label>
            </div>
          </div>
          <div className="my-3 mod-check">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="999"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={() => {
                  setCredit({ credit: 20000, value: 999 });
                }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                <div className="pckg">
                  <span>Team</span>
                  <span> &nbsp;- 20,000 credits for £999</span>
                </div>
              </label>
            </div>
          </div>
          <div className="my-3 mod-check">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="1899"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={() => {
                  setCredit({ credit: 50000, value: 1899 });
                }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                <div className="pckg">
                  <span>Professional</span>
                  <span> &nbsp;- 50,000 credits for £1899</span>
                </div>
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
          <div className="card-header d-flex justify-content-between crd-dets-head">
            <div className="mod-title">
              <h4>Payment Method</h4>
            </div>

            <div className="crd-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(1);
                }}
              >
                Go back
              </a>
            </div>
          </div>
          <div className="card crd-pay">
            <div className="card-body inner-crd-pay">
              <div className="crd-pay-txt">
                <i className="bi bi-dot pay-dot"></i>
                <h6>Verify the information before processing</h6>
              </div>
              <div className="crd-pay-list">
                <div className="crd-value">
                  <p>{credit.credit} Credit</p>
                  <p>Tax</p>
                </div>
                <div className="crd-value">
                  <p>£{credit.value}</p>
                  <p>Nil</p>
                </div>
              </div>
              <div className="crd-subtotal">
                <p>Subtotal</p>
                <p>£{credit.value}</p>
              </div>
            </div>
          </div>
          <div className="my-2 paycrd-btn">
            <Checkout
              credit={credit}
              className="stripe-btn"
              onClick={() => {
                setPage(3);
              }}
            />
          </div>
        </div>
      )}

      {page === 3 && (
        <div>
          <div className="card-header d-flex justify-content-between crd-dets-head">
            <div className="mod-title">
              <h4>Card Details</h4>
            </div>

            <div className="crd-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(2);
                }}
              >
                Go back
              </a>
            </div>
          </div>

          <div className="success-page mb-3">
            <i className="bi bi-check-circle"></i>
            {/* <p>Payment was successfull</p> */}
            <p>{JSON.stringify(paymentMessage.message)}</p>
            <p className="pb-5">Balance: {paymentMessage.balance}</p>
          </div>
        </div>
      )}
    </div>
  );
}
