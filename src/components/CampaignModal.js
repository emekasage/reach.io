import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function CampaignModal(props) {

  const [page, setPage] = useState(1);
  const [showCheckMark, setshowCheckMark] = useState(false);

  const handleCheckMark = () => {
    setshowCheckMark(true);
  };

  const [campaignDetails, setCampaignDetails] = useState({
    name: "",
    email: "",
    company: "",
    location: "",
    industry: "",
    job_titles: "",
    skills_keywords: "",
    company_size: "",
    send_connection_request: "",
    send_follow_up: "",
    extract_data_after_person_connected: 0,
    sequence_step_0: "",
    fileName: "",
    duration: "",
    options: "",
    crm: "",
    hiring_manager_connection_request: "",
    hiring_manager_follow_up: "",
    opportunities: "",
    duration_current_role: "",
    sequence_step_1: "",
  });

  const { extract_data_after_person_connected } = campaignDetails;

  const [showOptions, setShowOptions] = useState(false);
  const [showSecOption, setShowSecOption] = useState(false);

  const handleOptions = () => {
    setShowOptions(true);
  };

  const handleOptionTwo = () => {
    setShowSecOption(true);
  };

  const cancelOptionTwo = () => {
    setShowSecOption(false);
  };

  const cancelOptions = () => {
    setShowOptions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
      <form onSubmit={handleSubmit}>
        {page === 1 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>About you</h5>
                <p>Kindly enter a Campaign name</p>
              </div>

              <span>
                <span className="big-no">1</span>/7
              </span>
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Campaign Name*
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                value={
                  typeof campaignDetails["name"] === "undefined"
                    ? ""
                    : campaignDetails["name"]
                }
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.name = e.target.value;
                  setCampaignDetails(cc);
                }}
                id="campaign_name"
              />
            </div>

            {/* <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Company Name*
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                value={
                  typeof campaignDetails["company"] === "undefined"
                    ? ""
                    : campaignDetails["company"]
                }
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.company = e.target.value;
                  setCampaignDetails(cc);
                }}
                id="campaign_company"
              />
            </div> */}
            {/* <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Attach any file that you might want to share
              </label>
              <input
                type="file"
                className="form-control form-control-lg mod-input"
                name="fileName"
                placeholder="Add file"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.fileName = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["fileName"] === "undefined"
                    ? ""
                    : campaignDetails["fileName"]
                }
                multiple
              />
            </div> */}

            <span><span className="big-no">1</span>/7</span>
          </div>
        )}

        {page === 2 && (
          <div className="camp-offrd">
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Campaign Setup</h5>
                <p>Campaigns offered</p>
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

            <div
              className="my-3 mod-check"
              onClick={() => {
                setPage(3);
              }}
            >
              <h6>Company Search</h6>
              {showCheckMark ? (
                <div className="check-icon">
                  <i className="bi bi-check-circle"></i>
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              className="my-3 mod-check"
              onClick={() => {
                setPage(5);
              }}
            >
              <h6>Contact Email Search</h6>
            </div>
            <div
              className="my-3 mod-check"
              onClick={() => {
                setPage(6);
              }}
            >
              <h6>Engage</h6>
            </div>
            <div
              className="my-3 mod-check"
              onClick={() => {
                setPage(7);
              }}
            >
              <h6>Retain</h6>
            </div>
            <div className="my-3 mod-check">
              <h6>Extract</h6>
            </div>
            <div className="my-3 mod-btn">
              <button
                onClick={() => {
                  createCampaign(campaignDetails);
                  setPage(8);
                }}
                type="submit"
              >
                Submit Campaign
              </button>
            </div>
          </div>
        )}

        {/* COMPANY SEARCH */}

        {page === 3 && (
          <div>
            <div className="card-header d-flex justify-content-between mod-head">
              <div className="mod-title">
                <h5>Company Search</h5>
                <p>Use the search filters to find your target companies</p>
              </div>

              <span>
                <span className="big-no">1</span>/2
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
                Description Keywords
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.options = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["options"] === "undefined"
                    ? ""
                    : campaignDetails["options"]
                }
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Headquarters Location
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.location = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["location"] === "undefined"
                    ? ""
                    : campaignDetails["location"]
                }
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Industry
              </label>
              <input
                type="text"
                className="form-control form-control-lg mod-input"
                id="exampleFormControlInput1"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.industry = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["industry"] === "undefined"
                    ? ""
                    : campaignDetails["industry"]
                }
              />
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Leadership Hire
              </label>
              <select
                className="form-select form-select-lg mod-select"
                aria-label="Default select example"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.crm = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["crm"] === "undefined"
                    ? ""
                    : campaignDetails["crm"]
                }
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="1">Past 30 days</option>
                <option value="2">Past 60 days</option>
                <option value="3">Past 90 days</option>
                <option value="3">Past Year</option>
                <option value="3">Custom date range</option>
              </select>
            </div>
            <div className="my-2 mod-form">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Number of Employees
              </label>
              <select
                className="form-select form-select-lg mod-select"
                aria-label="Default select example"
                onChange={(e) => {
                  var cc = { ...campaignDetails };
                  cc.crm = e.target.value;
                  setCampaignDetails(cc);
                }}
                value={
                  typeof campaignDetails["crm"] === "undefined"
                    ? ""
                    : campaignDetails["crm"]
                }
              >
                <option selected hidden className="slct-plchldr">
                  Choose
                </option>
                <option value="1">1-10</option>
                <option value="2">11-50</option>
                <option value="3">51-200</option>
                <option value="3">201-500</option>
                <option value="3">501-1000</option>
                <option value="3">1001-5000</option>
                <option value="3">5001-10000</option>
                <option value="3">10000+</option>
              </select>
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

        {page === 4 &&
                <div>
                  <div class="card-header d-flex justify-content-between mod-head">
                    <div className="mod-title">
                      <h5>Candidate LinkedIn connection Message</h5>
                      <p>What would you like to say to your target prospect</p>
                    </div>

                    <div className="my-3 mod-btn">
                      <button
                        onClick={() => {
                          setPage(2);
                          handleCheckMark();
                        }}
                      >
                        Finish
                      </button>
                    </div>
                  </div>

                  <div className="my-3 mod-back-lnk">
                    <a className="back-lnk" onClick={()=>{setPage(3)}}>Go back</a>
                  </div>

                  <div class="my-2 mod-form">
                    <label for="exampleFormControlInput1" class="form-label">Your Connection Request Message</label>
                    <textarea type="text" class="form-control form-control-lg mod-input" id="exampleFormControlInput1"/>
                  </div>
                  <div class="my-2 mod-form">
                    <label for="exampleFormControlInput1" class="form-label">Your Follow-up Message</label>
                    <textarea type="text" class="form-control form-control-lg mod-input" id="exampleFormControlInput1"/>
                  </div>
                  
                  <div class="my-3 mod-btn">
                    <button onClick={()=>{setPage(5)}}>Next</button>
                  </div>
                </div>
                
                }

          {page === 5 &&
                  
                  <div>
                    <div class="card-header d-flex justify-content-between mod-head">
                      <div className="mod-title">
                        <h5>Client Acquisition</h5>
                        <p>who are you trying to target?</p>
                      </div>

                      <span><span className="big-no">5</span>/7</span>
                    </div>

                    <div className="my-3 mod-back-lnk">
                      <a className="back-lnk" onClick={()=>{setPage(4)}}>Go back</a>
                    </div>

                    <div class="my-2 mod-form">
                      <label for="exampleFormControlInput1" class="form-label">Hiring Manager Job Titles</label>
                      <input type="text" class="form-control form-control-lg mod-input" id="exampleFormControlInput1" placeholder="e.g. Financial Controllers, Engineer, Developer"/>
                    </div>
                    <div class="my-2 mod-form">
                      <label for="exampleFormControlInput1" class="form-label">Skills and Keyword</label>
                      <input type="text" class="form-control form-control-lg mod-input" id="exampleFormControlInput1" placeholder="e.g. SAP, JavaScript, Azure"/>
                    </div>
                    <div class="my-2 mod-form">
                      <label for="exampleFormControlInput1" class="form-label">Attach any file that you might want to share</label>
                      <input type="file" class="form-control form-control-lg mod-input" id="exampleFormControlInput1" placeholder="Add file"/>
                    </div>
                    <div class="my-2 mod-form">
                      <label for="exampleFormControlInput1" class="form-label">Industry</label>
                      <select className="form-select form-select-lg mod-select" aria-label="Default select example">
                        <option selected hidden className="slct-plchldr">Choose</option>
                        <option value="1">Name</option>
                        <option value="2">Email Address</option>
                        <option value="3">Phone Numbers</option>
                        <option value="3">Connected Status</option>
                        <option value="3">Connected on</option>
                      </select>
                    </div>
                    <div class="my-2 mod-form">
                      <label for="exampleFormControlInput1" class="form-label">Company Size</label>
                      <select className="form-select form-select-lg mod-select" aria-label="Default select example">
                        <option selected hidden className="slct-plchldr">Choose</option>
                        <option value="1">Name</option>
                        <option value="2">Email Address</option>
                        <option value="3">Phone Numbers</option>
                        <option value="3">Connected Status</option>
                        <option value="3">Connected on</option>
                      </select>
                    </div>
                    <div class="my-2 mod-form">
                      <label for="exampleFormControlInput1" class="form-label">Location</label>
                      <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1"/>
                    </div>
                    <div class="my-3 mod-btn">
                      <button onClick={()=>{setPage(6)}}>Next</button>
                    </div>
                  </div>
                  
                  }

          {page === 6 &&
                  
                  <div>
                    <div class="card-header d-flex justify-content-between mod-head">
                      <div className="mod-title">
                        <h5>Client LinkedIn connection Message</h5>
                        <p>What would you like to say to your target prospect</p>
                      </div>

                      <span><span className="big-no">6</span>/7</span>
                    </div>

                    <div className="my-3 mod-back-lnk">
                      <a className="back-lnk" onClick={()=>{setPage(5)}}>Go back</a>
                    </div>

                    <div class="my-2 mod-form">
                      <label for="exampleFormControlInput1" class="form-label">Your Connection Request Message</label>
                      <textarea type="text" class="form-control form-control-lg mod-input" id="exampleFormControlInput1"/>
                    </div>
                    <div class="my-2 mod-form">
                      <label for="exampleFormControlInput1" class="form-label">Your Follow-up Message</label>
                      <textarea type="text" class="form-control form-control-lg mod-input" id="exampleFormControlInput1"/>
                    </div>
                    
                    <div class="my-3 mod-btn">
                      <button onClick={()=>{setPage(7)}}>Next</button>
                    </div>
                  </div>
                  
                  }

          {page === 7 &&
                  
                  <div className="last-body">
                    <div class="card-header d-flex justify-content-between mod-head">
                      <div className="mod-title">
                        <h5>Choose the credit for this Campaign</h5>
                        <p>What would you like to say to your target prospect</p>
                      </div>

                      <span><span className="big-no">7</span>/7</span>
                    </div>

                    <div className="my-3 mod-back-lnk">
                      <a className="back-lnk" onClick={()=>{setPage(6)}}>Go back</a>
                    </div>

                    <div class="mt-3 mb-2 mod-form">
                      <label for="exampleFormControlInput1" class="form-label">Total Credit on this account is 2,345</label>
                      <input type="text" class="form-control form-control-lg mod-input" id="exampleFormControlInput1" placeholder="Type your preferred credit here"/>
                    </div>

                    <div class="my-3 mod-btn">
                      <button onClick={()=>{setPage(8)}}>Submit your campaign</button>
                    </div>
                    
                  </div>
                  
                  }
                  

          {page === 8 &&
                  
                  <div className="last-body">
                    <div class="card-header d-flex justify-content-between mod-head">
                      <div className="mod-title">
                        <h5>Campaign Submited</h5>
                      </div>

                    </div>

                    <div className="my-3 mod-back-lnk">
                      <a className="back-lnk" onClick={()=>{setPage(7)}}>Go back</a>
                    </div>

                    <div className="success-page">
                      <i className="bi bi-check-circle"></i>
                      <p>You have successfully submited a campaign. You will be notified when it’s up</p>
                    </div>

                    <div className="my-3 mod-btn">
                    <Link to="dashboard"> <button onClick={()=>{props.setShowModal(false)}}>Go back to Dashboard</button></Link>
                    </div>
                    
                  </div>
                  
                  }

</form>
        
      
  )}
