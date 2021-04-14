import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function CampaignModal(props) {
  const [page, setPage] = useState(1);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const linkedlnUserRef = useRef(null);
  const linkedlnPassRef = useRef(null);
  const campaignOptionsRef = useRef(null);
  const campaignDurationRef = useRef(null);
  const crmRef = useRef(null);
  const othersRef = useRef(null);
  const jobTitleRef = useRef(null);
  const skillsRef = useRef(null);
  const attachRef = useRef(null);
  const industryRef = useRef(null);
  const connectMessageRef = useRef(null);
  const followUpRef = useRef(null);
  const hiringManagerRef = useRef(null);
  const skillKeywordRef = useRef(null);
  const attachShareRef = useRef(null);
  const industryCRef = useRef(null);
  const companySizeRef = useRef(null);
  const locationRef = useRef(null);
  const yConnectRef = useRef(null);
  const yFollowRef = useRef(null);
  const totalCreditRef = useRef(null);

  const handleChange = () => {
    console.log(linkedlnUserRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("big head")

    // onClick={()=>{setPage(8)}}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {page === 1 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>About you</h5>
                <p>who are you trying to target?</p>
              </div>

              <span>
                <span className="big-no">1</span>/7
              </span>
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email Address*
              </label>
              <input
                type="email"
                className="form-control form-control-lg mod-input"
                ref={emailRef}
                onChange={handleChange}
                id="exampleFormControlInput1"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                First name and Last name*
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                ref={nameRef}
                id="ReachioCampaignInput1"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Company Name*
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                ref={companyRef}
                id="ReachioCampaignInput2"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Linkedln Username
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                ref={linkedlnUserRef}
                onChange={handleChange}
                id="ReachioCampaignInput3"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Linkedlin Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg mod-input"
                ref={linkedlnPassRef}
                id="ReachioCamaignInput4"
              />
            </div>
            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  setPage(2);
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {page === 2 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>About your Campaign</h5>
                <p>who are you trying to target?</p>
              </div>

              <span>
                <span className="big-no">2</span>/7
              </span>
            </div>
            <div className="my-3 mod-back-lnk">
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
                Campaign Options
              </label>
              <select
                className="form-select form-select-lg mod-select"
                ref={campaignOptionsRef}
                aria-label="Default select example"
              >
                <option selected hidden className="slct-plchldr">
                  Choose a campaign option
                </option>
                <option value="1">Name</option>
                <option value="2">Email Address</option>
                <option value="3">Phone Numbers</option>
                <option value="3">Connected Status</option>
                <option value="3">Connected on</option>
              </select>
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Campaign Duration
              </label>
              <select
                className="form-select form-select-lg mod-select"
                ref={campaignDurationRef}
                aria-label="Default select example"
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="1">3 Days</option>
                <option value="2">2 Weeks</option>
                <option value="3">A Month</option>
                <option value="3">3 Months</option>
              </select>
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                What is your CRM?
              </label>
              <select
                className="form-select form-select-lg mod-select"
                ref={crmRef}
                aria-label="Default select example"
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="1">Name</option>
                <option value="2">Email Address</option>
                <option value="3">Phone Numbers</option>
                <option value="3">Connected Status</option>
                <option value="3">Connected on</option>
              </select>
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                If Others, please specify
              </label>
              <input
                type="email"
                className="form-control form-control-lg mod-input"
                ref={othersRef}
                id="exampleFormControlInput1"
              />
            </div>
            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  setPage(3);
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {page === 3 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Candidate Acquisition</h5>
                <p>who are you trying to target?</p>
              </div>

              <span>
                <span className="big-no">3</span>/7
              </span>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(2);
                }}
              >
                Go back
              </a>
            </div>

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Job Titles
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                ref={jobTitleRef}
                id="exampleFormControlInput1"
                placeholder="e.g. Financial Controllers, Engineer, Developer"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Skills and Keyword
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                ref={skillsRef}
                id="exampleFormControlInput1"
                placeholder="e.g. SAP, JavaScript, Azure"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Attach any file that you might want to share
              </label>
              <input
                type="file"
                className="form-control form-control-lg mod-input"
                ref={attachRef}
                id="exampleFormControlInput1"
                placeholder="Add file"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Industry
              </label>
              <select
                className="form-select form-select-lg mod-select"
                ref={industryRef}
                aria-label="Default select example"
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="1">Name</option>
                <option value="2">Email Address</option>
                <option value="3">Phone Numbers</option>
                <option value="3">Connected Status</option>
                <option value="3">Connected on</option>
              </select>
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Location
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  setPage(4);
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {page === 4 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Candidate LinkedIn connection Message</h5>
                <p>What would you like to say to your target prospect</p>
              </div>

              <span>
                <span className="big-no">4</span>/7
              </span>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(3);
                }}
              >
                Go back
              </a>
            </div>

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Your Connection Request Message
              </label>
              <textarea
                type="text"
                className="form-control form-control-lg mod-input"
                ref={connectMessageRef}
                id="exampleFormControlInput1"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Your Follow-up Message
              </label>
              <textarea
                type="text"
                className="form-control form-control-lg mod-input"
                ref={followUpRef}
                id="exampleFormControlInput1"
              />
            </div>

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  setPage(5);
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {page === 5 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Client Acquisition</h5>
                <p>who are you trying to target?</p>
              </div>

              <span>
                <span className="big-no">5</span>/7
              </span>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(4);
                }}
              >
                Go back
              </a>
            </div>

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Hiring Manager Job Titles
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                ref={hiringManagerRef}
                id="exampleFormControlInput1"
                placeholder="e.g. Financial Controllers, Engineer, Developer"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Skills and Keyword
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                ref={skillKeywordRef}
                id="exampleFormControlInput1"
                placeholder="e.g. SAP, JavaScript, Azure"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Attach any file that you might want to share
              </label>
              <input
                type="file"
                className="form-control form-control-lg mod-input"
                ref={attachShareRef}
                id="exampleFormControlInput1"
                placeholder="Add file"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Industry
              </label>
              <select
                className="form-select form-select-lg mod-select"
                ref={industryCRef}
                aria-label="Default select example"
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="1">Name</option>
                <option value="2">Email Address</option>
                <option value="3">Phone Numbers</option>
                <option value="3">Connected Status</option>
                <option value="3">Connected on</option>
              </select>
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Company Size
              </label>
              <select
                className="form-select form-select-lg mod-select"
                ref={companySizeRef}
                aria-label="Default select example"
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="1">Name</option>
                <option value="2">Email Address</option>
                <option value="3">Phone Numbers</option>
                <option value="3">Connected Status</option>
                <option value="3">Connected on</option>
              </select>
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Location
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                ref={locationRef}
                id="exampleFormControlInput1"
              />
            </div>
            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  setPage(6);
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {page === 6 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Client LinkedIn connection Message</h5>
                <p>What would you like to say to your target prospect</p>
              </div>

              <span>
                <span className="big-no">6</span>/7
              </span>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(5);
                }}
              >
                Go back
              </a>
            </div>

            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Your Connection Request Message
              </label>
              <textarea
                type="text"
                className="form-control form-control-lg mod-input"
                ref={yConnectRef}
                id="exampleFormControlInput1"
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Your Follow-up Message
              </label>
              <textarea
                type="text"
                className="form-control form-control-lg mod-input"
                ref={yFollowRef}
                id="exampleFormControlInput1"
              />
            </div>

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  setPage(7);
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {page === 7 && (
          <div className="last-body">
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Choose the credit for this Campaign</h5>
                <p>What would you like to say to your target prospect</p>
              </div>

              <span>
                <span className="big-no">7</span>/7
              </span>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(6);
                }}
              >
                Go back
              </a>
            </div>

            <div className="mt-3 mb-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Total Credit on this account is 2,345
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                ref={totalCreditRef}
                id="exampleFormControlInput1"
                placeholder="Type your preferred credit here"
              />
            </div>

            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  setPage(8);
                }}
                type="submit"
              >
                Submit your campaign
              </button>
            </div>
          </div>
        )}

        {page === 8 && (
          <div className="last-body">
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Campaign Submited</h5>
              </div>
            </div>

            <div className="my-3 mod-back-lnk">
              <a
                className="back-lnk"
                onClick={() => {
                  setPage(7);
                }}
              >
                Go back
              </a>
            </div>

            <div className="success-page">
              <i className="bi bi-check-circle"></i>
              <p>
                You have successfully submited a campaign. You will be notified
                when it’s up
              </p>
            </div>

            <div className="my-3 mod-btn">
              <Link to="dashboard">
                {" "}
                <button
                  onClick={() => {
                    // eslint-disable-next-line react/prop-types
                    props.setShowModal(false);
                  }}
                >
                  Go back to Dashboard
                </button>
              </Link>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
