import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function CampaignModal(props) {

  const [page, setPage] = useState(1);
  return (
      <div>
        {page === 1 &&
        
        <div>
          <div class="card-header d-flex justify-content-between mod-head">
            <div className="mod-title">
              <h5>About you</h5>
              <p>who are you trying to target?</p>
            </div>

            <span><span className="big-no">1</span>/7</span>
          </div>
          <div class="my-2 mod-form">
            <label for="exampleFormControlInput1" class="form-label">Email Address*</label>
            <input type="email" class="form-control form-control-lg mod-input" id="exampleFormControlInput1"/>
          </div>
          <div class="my-2 mod-form">
            <label for="exampleFormControlInput1" class="form-label">First name and Last name*</label>
            <input type="text" class="form-control form-control-lg mod-input" id="exampleFormControlInput1"/>
          </div>
          <div class="my-2 mod-form">
            <label for="exampleFormControlInput1" class="form-label">Company Name*</label>
            <input type="text" class="form-control form-control-lg mod-input" id="exampleFormControlInput1"/>
          </div>
          <div class="my-2 mod-form">
            <label for="exampleFormControlInput1" class="form-label">Linkedln Username</label>
            <input type="text" class="form-control form-control-lg mod-input" id="exampleFormControlInput1"/>
          </div>
          <div class="my-2 mod-form">
            <label for="exampleFormControlInput1" class="form-label">Linkedlin Password</label>
            <input type="password" class="form-control form-control-lg mod-input" id="exampleFormControlInput1"/>
          </div>
          <div class="my-3 mod-btn">
            <button onClick={()=>{setPage(2)}}>Next</button>
          </div>
        </div>
        
        }

{page === 2 &&
        
        <div>
          <div class="card-header d-flex justify-content-between mod-head">
            <div className="mod-title">
              <h5>About your Campaign</h5>
              <p>who are you trying to target?</p>
            </div>

            <span><span className="big-no">2</span>/7</span>
          </div>
          <div className="my-3 mod-back-lnk">
            <a className="back-lnk" onClick={()=>{setPage(1)}}>Go back</a>
          </div>
          
          <div class="my-2 mod-form">
            <label for="exampleFormControlInput1" class="form-label">Campaign Options</label>
            <select className="form-select form-select-lg mod-select" aria-label="Default select example">
              <option selected hidden className="slct-plchldr">Choose a campaign option</option>
              <option value="1">Name</option>
              <option value="2">Email Address</option>
              <option value="3">Phone Numbers</option>
              <option value="3">Connected Status</option>
              <option value="3">Connected on</option>
						</select>
          </div>
          <div class="my-2 mod-form">
            <label for="exampleFormControlInput1" class="form-label">Campaign Duration</label>
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
            <label for="exampleFormControlInput1" class="form-label">What is your CRM?</label>
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
            <label for="exampleFormControlInput1" class="form-label">If Others, please specify</label>
            <input type="email" class="form-control form-control-lg mod-input" id="exampleFormControlInput1"/>
          </div>
          <div class="my-3 mod-btn">
            <button onClick={()=>{setPage(3)}}>Next</button>
          </div>
        </div>
        
        }

{page === 3 &&
        
        <div>
          <div class="card-header d-flex justify-content-between mod-head">
            <div className="mod-title">
              <h5>Candidate Acquisition</h5>
              <p>who are you trying to target?</p>
            </div>

            <span><span className="big-no">3</span>/7</span>
          </div>

          <div className="my-3 mod-back-lnk">
            <a className="back-lnk" onClick={()=>{setPage(2)}}>Go back</a>
          </div>

          <div class="my-2 mod-form">
            <label for="exampleFormControlInput1" class="form-label">Job Titles</label>
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
            <label for="exampleFormControlInput1" class="form-label">Location</label>
            <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1"/>
          </div>
          <div class="my-3 mod-btn">
            <button onClick={()=>{setPage(4)}}>Next</button>
          </div>
        </div>
        
        }

{page === 4 &&
        
        <div>
          <div class="card-header d-flex justify-content-between mod-head">
            <div className="mod-title">
              <h5>Candidate LinkedIn connection Message</h5>
              <p>What would you like to say to your target prospect</p>
            </div>

            <span><span className="big-no">4</span>/7</span>
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
        
      </div>
  )
}