/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import DateTime from "../components/DateTime";
import moment from "moment";
import MultiSelect from "react-multi-select-component";
import { useSnackbar } from "notistack";
import countries from "../countries"
export default function CampaignInner() {
  const {
    showSideBar,
    setShowModal,
    setModalPage,
    campaign,
    userCampaign,
    setCampaignId,
    cancelCampaign,
    userCampaignPage,
    setUserCampaignPage,
    createListPage,
    setCreateListPage,
    contactSearch,
    contactSearchResult,
    confirmCampaignSubmission,
    selectedSteps,
    resetStep,
    setSelectedSteps,
    dataExtract,
    extractResult,
    engageDetails,
    setEngageDetails,
    engageCampaign,
    engageResult,
    getLinkedlnIndustries,
    linkedlnIndustries,
    getEngageTemplate,
    engageTemplate,
    addEmailSearch,
    setAddEmailSearch,
  } = useContext(providerFunctions);

  const { enqueueSnackbar } = useSnackbar();
  const [selectedTemplate, setSelectedTemplate] = useState([]);
  const [innerPage, setInnerPage] = useState(1);
  const [campFlow, setCampFlow] = useState(1);
  const [showCheckMark, setshowCheckMark] = useState(false);
  const [userCampaignData, setUserCampaignData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [industries, setIndustries] = useState([]);
  const [viewAll] = useState(false);
  const [country, setCountry] = useState(-1);
  const [countryExtract, setCountryExtract] = useState(-1);
  const [state, setState] = useState(-1);
  const [stateExtract, setStateExtract] = useState(-1);
  // const [city] = useState(-1);
  const [cityExtract, setCityExtract] = useState(-1);
  const [cityoptions, setCityOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [templates, setTemplates] = useState({});
  const [countryEmail, setCountryEmail] = useState(-1);
  const [stateEmail, setStateEmail] = useState(-1);
  const [cityEmail, setCityEmail] = useState(-1);
  
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const [selectedExtractIndustry, setSelectedExtractIndustry] = useState([]);
  const [selectedEmailIndustry, setSelectedEmailIndustry] = useState([]);
  

  useEffect(() => {
    setAddEmailSearch(false);
    console.log("uyerurueu");
    getLinkedlnIndustries();
    getEngageTemplate();
    console.log(linkedlnIndustries);
  }, []);

  useEffect(()=>{
    if(JSON.stringify(selectedTemplate) !== "[]"){
      var c = {...selectedTemplate};
      setEngageDetails(c);
      console.log(c);
    }
  },[selectedTemplate])

  useEffect(() => {
    if (typeof engageTemplate.template !== "undefined") {
      setTemplates(engageTemplate.template);
      // console.log(templates, "hesjsfcjdsjf");
    }
  }, [engageTemplate]);

  /*** CONTACT HQ LOCATION ***/

  useEffect(()=>{
    var c = ""
    if(state !== -1) {
      c = countries[country].name+","+countries[country].states[state].name;
      var cd = { ...contactDetails}
      cd["hq_location"] = c;
      setContactDetails(cd);
    }
      // setCityOptions(countries[country].states[state].cities)
  },[state]);

  useEffect(()=>{
      if(country !== -1)
        setStateOptions(countries[country].states)
  },[country]);

   /*** END OF CONTACT HQ LOCATION ***/

  /*** DATA EXTRACT LOCATION ***/
  useEffect(()=>{
    var c = ""
    if(cityExtract !== -1){
      c = countries[countryExtract].name+","+countries[countryExtract].states[stateExtract].name+","
      +countries[countryExtract].states[stateExtract].cities[cityExtract].name;
      var cd = { ...extractDetails}
      cd["location"] = c;
      setExtractDetails(cd);
    }
    
  },[cityExtract])

  useEffect(()=>{
    if(stateExtract !== -1 && countryExtract !== -1)
      setCityOptions(countries[countryExtract].states[stateExtract].cities)
  },[stateExtract]);

  useEffect(()=>{
      if(countryExtract !== -1)
        setStateOptions(countries[countryExtract].states)
  },[countryExtract]);

   /*** END OF DATA EXTRACT LOCATION ***/

   /*** CONTACT-EMAIL LOCATION ***/
  useEffect(()=>{
    var c = ""
    if(cityExtract !== -1){
      c = countries[countryEmail].name+","+countries[countryEmail].states[stateEmail].name+","
      +countries[countryEmail].states[stateEmail].cities[cityEmail].name;
      var cd = { ...contactDetails}
      cd["location"] = c;
      setContactDetails(cd);
    }
    
  },[cityEmail])

  useEffect(()=>{
    if(stateEmail !== -1 && countryEmail !== -1)
      setCityOptions(countries[countryEmail].states[stateEmail].cities)
  },[stateEmail]);

  useEffect(()=>{
      if(countryEmail !== -1)
        setStateOptions(countries[countryEmail].states)
  },[countryEmail]);

   /*** END OF CONTACT-EMAIL LOCATION ***/

  useEffect(() => {
    if (typeof linkedlnIndustries.data !== "undefined") {
      setIndustries(linkedlnIndustries.data);
      console.log(industries);
    }
  }, [linkedlnIndustries]);

  /*** CONTACT INDUSTRY ***/
  useEffect(()=>{
    var cc = "";
    for (var i = 0; i < selectedIndustry.length; i++){
      cc = selectedIndustry[i] + ","+ cc;
    }
    var s = {...contactDetails}
    s.industry = cc;
    setContactDetails(s);
  },[selectedIndustry])
  /*** END OF CONTACT INDUSTRY ***/

  /*** CONTACT-EMAIL INDUSTRY ***/
  useEffect(()=>{
    var cc = "";
    for (var i = 0; i < selectedEmailIndustry.length; i++){
      cc = selectedEmailIndustry[i] + ","+ cc;
    }
    var s = {...contactDetails}
    s.industry = cc;
    setContactDetails(s);
  },[selectedEmailIndustry])
  /*** END OF CONTACT-EMAIL INDUSTRY ***/

  /*** EXTRACT INDUSTRY ***/
  useEffect(()=>{
    // console.log("yabba")
    var cc = "";
    for (var i = 0; i < selectedExtractIndustry.length; i++){
      cc = selectedExtractIndustry[i] + ","+ cc;
      console.log(selectedExtractIndustry);
    }
    // console.log(cc)
    var s = {...extractDetails}
    s.industry = cc;
    setExtractDetails(s);
  },[selectedExtractIndustry])
  /*** END OF EXTRACT INDUSTRY ***/

  useEffect(() => {
    // console.log(managedCampaigns.campaign);
    if (typeof campaign.campaign !== "undefined") {
      if (typeof campaign.campaign.data !== "undefined") {
        setUserCampaignData(campaign.campaign.data);
        setPageCount(campaign.campaign.last_page);
      }
    }
  }, [campaign]);

  useEffect(()=>{
    setAddEmailSearch(false);
  },[innerPage])

  const showPaginationList = () => {
    let arr = Array.apply(null, { length: pageCount }).map(Number.call, Number);
    return (
      <ul className="pgntr" key={Number}>
        <li
          className="page-item page-link"
          onClick={() =>
            userCampaignPage !== 1
              ? setUserCampaignPage(userCampaignPage - 1)
              : ""
          }
        >
          Prev
        </li>
        {arr.map((item , index) => {
          return (
          <li
              key ={index}
              className={`page-item  page-link ${
                userCampaignPage === item + 1 ? "active" : ""
              }`}
              onClick={() => setUserCampaignPage(item + 1)}
            >
              {item + 1}
            </li>
          );
        })}
        <li
          className="page-item page-link"
          onClick={() =>
            userCampaignPage !== pageCount
              ? setUserCampaignPage(userCampaignPage + 1)
              : ""
          }
        >
          Next
        </li>
      </ul>
    );
  };

  const [contactDetails, setContactDetails] = useState({
    campaign_name: "",
    description: "",
    hq_location: "",
    industry: "",
    no_of_employees: "",
    estimated_revenue_range: "",
    founded: "",
    actively_hiring: "",
    leadership_hire: "",
    company_type: "",
    job_title: "",
    job_status: "",
    email_industry: "",
    skills_keywords: "",
    duration_current_role: "",
    location: "",
    company_size: "",
  });

  const [extractDetails, setExtractDetails] = useState({
    campaign_name: "",
    job_title: "",
    job_status: "",
    industry: "",
    skills_keywords: "",
    duration_current_role: "",
    location: "",
    company_size: "",
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
  };

  const handleDataExtractSubmit = (e) => {
    e.preventDefault();
  };

  const no_of_employees = [
    {label: "1-10", value: "1-10"},
    {label: "11-50", value: "11-50"},
    {label: "51-200", value: "51-200"},
    {label: "201-500", value: "201-500"},
    {label: "501-1000", value: "501-1000"},
    {label: "1001-5000", value: "1001-5000"},
    {label: "5001-10000", value: "5001-10000"},
    {label: "10000+", value: "10000+"}
  ];

  const [selectedEmployee, setSelectedEmployee] = useState([]);

  useEffect(()=>{
    var cc = "";
    for (var i = 0; i < selectedEmployee.length; i++){
      cc = selectedEmployee[i] + ","+ cc;
    }
    var s_em = {...contactDetails}
    s_em.no_of_employees = cc;
    setContactDetails(s_em);
  },[selectedEmployee])

  const founded = [
    {label: "Past 30 days", value: "past_30_days"},
    {label: "Past 60 days", value: "past_60_days"},
    {label: "Past 90 days", value: "past_90_days"},
    {label: "Past Year", value: "past_year"}
  ];

  const [selectedFoundedDate, setSelectedFoundedDate] = useState([]);

  useEffect(()=>{
    var cc = "";
    for (var i = 0; i < selectedFoundedDate.length; i++){
      cc = selectedFoundedDate[i] + ","+ cc;
    }
    var found_date = {...contactDetails}
    found_date.founded = cc;
    setContactDetails(found_date);
  },[selectedFoundedDate])

  const leadership_hire = [
    {label: "Past 30 days", value: "past_30_days"},
    {label: "Past 60 days", value: "past_60_days"},
    {label: "Past 90 days", value: "past_90_days"},
    {label: "Past Year", value: "past_year"}
  ];

  const [selectedLeadershipHire, setSelectedLeadershipHire] = useState([]);

  useEffect(()=>{
    var cc = "";
    for (var i = 0; i < selectedLeadershipHire.length; i++){
      cc = selectedLeadershipHire[i] + ","+ cc;
    }
    var lead_hr = {...contactDetails}
    lead_hr.leadership_hire = cc;
    setContactDetails(lead_hr);
  },[selectedLeadershipHire])


  const revenue_range = [
    {label: "Less than $1M", value: "less_than_1M"},
    {label: "$1M - $10M", value: "1M-10M"},
    {label: "$10M - $50M", value: "10M-50M"},
    {label: "$50M - $100M", value: "50M-100M"},
    {label: "$100M - $500M", value: "100M-500M"},
    {label: "$500M - $1B", value: "500M-1B"},
    {label: "$1B - $10B", value: "1B-10B"}
  ];

  const [selectedRevenueRange, setSelectedRevenueRange] = useState([]);

  useEffect(()=>{
    var cc = "";
    for (var i = 0; i < selectedRevenueRange.length; i++){
      cc = selectedRevenueRange[i] + ","+ cc;
    }
    var est_rr = {...contactDetails}
    est_rr.estimated_revenue_range = cc;
    setContactDetails(est_rr);
  },[selectedRevenueRange])

  useEffect(() => {
    userCampaign();
    cancelCampaign();
    confirmCampaignSubmission();
  }, []);

  return (
    <div className={`pagebody ${showSideBar ? "" : "expand"}`}>
      <div className="container-fluid p-0">
        {innerPage === 1 && (
          <div>
            <div className="d-flex justify-content-between user-val">
              <div className="heading-col">
                <h5>
                  <strong>Campaign</strong>
                </h5>
              </div>
              <div className="date-form">
                <DateTime />
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-xxl-12 d-flex camp-flex">
                <div className="w-100">
                  <div className="row flow-type">
                    <div className="camp-flow">
                      {campFlow === 1 && (
                        <>
                          <div className="campaign_first">
                            <div className="first-flow-img">
                              <img src="../../assets/img/Group-camp-1.png" alt="cool_img"/>
                            </div>
                            <div className="first-flow-txt">
                              <p className="small-txt">Submit your desired campaign</p>
                              <p className="big-txt">Start the process now</p>
                            </div>
                            <div 
                            className="first-flow-btn"
                            onClick={() => {
                              setCampFlow(2);
                            }}
                            >
                              <button>Start campaign</button>
                            </div>
                          </div>
                        </>
                      )}

                      {campFlow === 2 && (
                        <>
                          <div className="prev_flow">
                            <i 
                            className="bi bi-arrow-left-circle"
                            onClick={() => {
                              setCampFlow(1);
                            }}
                            >
                            </i>
                          </div>
                          <div className="card flow-card flex-fill bd-highlight">
                            <div className="card-body">
                              <div
                                onClick={() => {
                                  setInnerPage(2);
                                }}
                                className="card-content"
                              >
                                <img
                                  src="../../assets/img/Group-465.svg"
                                  alt=""
                                  width="80"
                                  height="150"
                                  className="camp-type mb-4 yo"
                                />
                              </div>
                            </div>
                            <p className="camp-name">Contact Search</p>
                          </div>
                          <div className="card flow-card flex-fill bd-highlight">
                            <div className="card-body">
                              <div
                                className="card-content"
                                onClick={() => {
                                  setInnerPage(5);
                                }}
                              >
                                <img
                                  src="../../assets/img/Group-465.svg"
                                  alt=""
                                  width="80"
                                  height="150"
                                  className="camp-type mb-4 yo"
                                />
                              </div>
                            </div>
                            <p className="camp-name">Engage</p>
                          </div>
                          <div className="card flow-card flex-fill bd-highlight">
                            <div className="card-body">
                              <div
                                className="card-content"
                                onClick={() => {
                                  setInnerPage(6);
                                }}
                              >
                                <img
                                  src="../../assets/img/Group-465.svg"
                                  alt=""
                                  width="80"
                                  height="150"
                                  className="camp-type mb-4 yo"
                                />
                              </div>
                            </div>
                            <p className="camp-name">Data Extract</p>
                          </div>
                        </>
                      )}
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-12 col-xxl-12 d-flex user-tab">
                <div className="card flex-fill">
                  <div className="card-header table-card-head d-flex justify-content-between">
                    <h5 className="card-title mb-0 table-title">
                      Campaign history
                    </h5>
                  </div>
                  <table className="table table-hover my-1">
                    <thead>
                      <tr>
                        <th scope="col">S/N</th>
                        <th>Campaign Type</th>
                        <th>Date</th>
                        <th>Linkedln User</th>
                        <th>Credits</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {userCampaignData.map((thisCampaignData, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                              {thisCampaignData.campaignable_type ===
                                "App\\Models\\ContactSearch" && (
                                <span>Contact Search</span>
                              )}
                              {thisCampaignData.campaignable_type ===
                                "App\\Models\\DataExtract" && (
                                <span>Data Extract</span>
                              )}
                              {thisCampaignData.campaignable_type ===
                                "App\\Models\\Engage" && <span>Engage</span>}
                            </td>
                            <td>
                              {moment(thisCampaignData.created_at).format("L")}
                            </td>
                            <td>
                              {thisCampaignData.campaign_status ===
                                "approved" && <span>---</span>}
                              {thisCampaignData.campaign_status ===
                                "cancelled" && <span>---</span>}
                              {thisCampaignData.campaign_status ===
                                "pending" && (
                                <a
                                  className="camp-form-lnk"
                                  onClick={() => {
                                    setShowModal(true);
                                    setModalPage("assign_user");
                                    setCampaignId(thisCampaignData.id);
                                  }}
                                >
                                  Assign/Add User
                                </a>
                              )}
                            </td>
                            <td>
                              {thisCampaignData.campaign_status ===
                                "approved" && <span>---</span>}
                              {thisCampaignData.campaign_status ===
                                "cancelled" && <span>---</span>}
                              {thisCampaignData.campaign_status ===
                                "pending" && (
                                <a
                                  className="camp-form-lnk"
                                  onClick={() => {
                                    setShowModal(true);
                                    setModalPage("assign_credit");
                                    setCampaignId(thisCampaignData.id);
                                  }}
                                >
                                  Assign Credits
                                </a>
                              )}
                            </td>
                            <td>{thisCampaignData.campaign_status}</td>
                            <td>
                              <div className="btn-group dropend">
                                <span
                                  className="bi bi-three-dots-vertical dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                ></span>
                                <ul className="dropdown-menu">
                                  <p
                                    className="dots_details"
                                    id="rerun_camp"
                                    onClick={() => {
                                      setShowModal(true);
                                      setModalPage("rerun_campaign");
                                      setCampaignId(thisCampaignData.id);
                                    }}
                                  >
                                    Rerun Campaign
                                  </p>
                                  <p className="dots_details" id="cancel_stuff">
                                    {thisCampaignData.campaign_status ===
                                      "pending" && (
                                      <span
                                        className="cancel_camp"
                                        onClick={() => {
                                          setShowModal(true);
                                          setModalPage("cancel_campaign");
                                          setCampaignId(thisCampaignData.id);
                                        }}
                                      >
                                        Cancel Campaign
                                      </span>
                                    )}
                                    {thisCampaignData.campaign_status ===
                                      "approved" && (
                                      <span
                                        className="cancel_camp text-success"
                                        onClick={() =>
                                          enqueueSnackbar(
                                            "Approved Campaigns cannot be cancelled",
                                            {
                                              variant: "error",
                                            }
                                          )
                                        }
                                      >
                                        Approved
                                      </span>
                                    )}
                                    {thisCampaignData.campaign_status ===
                                      "cancelled" && (
                                      <span
                                        className="cancel_camp text-danger"
                                        onClick={() =>
                                          enqueueSnackbar(
                                            "Cancelled Campaigns cannot be cancelled",
                                            {
                                              variant: "error",
                                            }
                                          )
                                        }
                                      >
                                        Cancelled
                                      </span>
                                    )}
                                  </p>
                                  <p
                                    className="dots_details"
                                    onClick={() => {
                                      confirmCampaignSubmission(
                                        thisCampaignData.id
                                      );
                                      enqueueSnackbar(
                                        "Campaign Submitted Successfully",
                                        {
                                          variant: "success",
                                        }
                                      );
                                    }}
                                  >
                                    Confirm Submission
                                  </p>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-end table-feat">
                    <nav aria-label="Page navigation example">
                      {viewAll ? "" : showPaginationList()}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COMPANY SEARCH */}
        <form
          onSubmit={handleContactSubmit}
          className="needs-validation"
          noValidate
        >
          {innerPage === 2 && (
            <div>
              <div className="d-flex justify-content-between user-val">
                <div className="heading-col plus-bck">
                  <h5>
                    Campaign &gt;&gt; <strong>Company Search</strong>
                  </h5>
                  <a
                    className="camp-back-lnk"
                    onClick={() => {
                      setInnerPage(1);
                    }}
                  >
                    <i
                      className="bi bi-arrow-left"
                      style={{ marginRight: "5px", fontSize: "16px" }}
                    ></i>
                    Go back
                  </a>
                </div>
                <div className="date-form">
                  <DateTime />
                </div>
              </div>
              <div className="row">
                <div className="col-10 col-lg-10 col-xxl-10 d-flex company-steps">
                  <h6
                    className={`camp-steps ${!showCheckMark ? "step-1" : ""}`}
                  >
                    Step 1
                  </h6>
                  <h6
                    className={`camp-steps ${!showCheckMark ? "step-2" : ""}`}
                  >
                    Step 2
                  </h6>
                  {addEmailSearch &&
                  <h6
                    className={`camp-steps ${!showCheckMark ? "step-2" : ""}`}
                  >
                    Step 3
                  </h6>
                  }
                </div>
                
                <div className="company-search">
                  <div className="my-2 mod-form">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Campaign Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg mod-input"
                      name="campaign_name"
                      onChange={(e) => {
                        var cs = { ...contactDetails };
                        cs.campaign_name = e.target.value;
                        setContactDetails(cs);
                      }}
                      value={
                        typeof contactDetails["campaign_name"] === "undefined"
                          ? ""
                          : contactDetails["campaign_name"]
                      }
                      id="validateCustom02"
                      placeholder="Enter a Campaign name"
                    />
                  </div>

                  <div className="my-2 mod-form">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Description Keywords
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg mod-input"
                      name="desc_keywords"
                      onChange={(e) => {
                        var cs = { ...contactDetails };
                        cs.description = e.target.value;
                        setContactDetails(cs);
                      }}
                      value={
                        typeof contactDetails["description"] === "undefined"
                          ? ""
                          : contactDetails["description"]
                      }
                      id="validationCustom03"
                    />
                  </div>
                  <div className="my-2 mod-form">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Headquarters Country
                    </label>

                    {/* {JSON.stringify(countries)} */}
                    <select
                      className="form-select form-select-lg mod-select"
                      aria-label="Default select example"
                      onChange={(e)=>{
                        var c = e.target.value;
                        setCountry(c);
                      }}
                    >
                      {countries.map((thiscountry, index)=>{
                        return(
                          <option key={index} value={index}>{thiscountry.name}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="my-3 mod-form-hidden">
                  {JSON.stringify(stateOptions) !== "[]" &&
                    <>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Headquarters City
                    </label>

                    <select
                      className="form-select form-select-lg mod-select"
                      aria-label="Default select example"
                      onChange={(e)=>{
                        setState(e.target.value);
                      }}
                    >
                      
                      {JSON.parse(JSON.stringify(stateOptions)).map((thisState, index)=>{
                        return(
                        <option selected value={index} className="slct-plchldr"  key={`${country} - ${index}`}>
                          {thisState.name}
                        </option>
                        )
                      })}
                    </select>
                    </>
                    }
                  </div>
                  <div className="my-2 mod-form">
                    <label
                      htmlFor="contact_industry"
                      className="form-label2"
                    >
                      Industry
                    </label>
                    <MultiSelect
                      className="mod-select"
                      options={linkedlnIndustries}
                      value={selectedIndustry}
                      onChange={setSelectedIndustry}
                      labelledBy="Select Industry"
                    />
                  </div>

                  <div className="my-2 mod-form">
                    <label
                      htmlFor="contact_employees"
                      className="form-label2"
                    >
                      Number of Employees
                    </label>
                    {/* <pre>{JSON.stringify(selectedEmployee)}</pre> */}
                    <MultiSelect
                      options={no_of_employees}
                      className="mod-select"
                      aria-label="Default select example"
                      value={selectedEmployee}
                      onChange={setSelectedEmployee}
                    />
                  </div>

                  <div className="my-3 mod-btn">
                    <button
                      onClick={() => {
                        setshowCheckMark(showCheckMark);
                        setInnerPage(3);
                      }}
                    >
                      Save and Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {innerPage === 3 && (
            <div>
              <div className="d-flex justify-content-between user-val">
                <div className="heading-col plus-bck">
                  <h5>
                    Campaign &gt;&gt; <strong>Company Search</strong>
                  </h5>
                  <a
                    className="camp-back-lnk"
                    onClick={() => {
                      setshowCheckMark(showCheckMark);
                      setInnerPage(2);
                    }}
                  >
                    <i
                      className="bi bi-arrow-left"
                      style={{ marginRight: "5px", fontSize: "16px" }}
                    ></i>
                    Go back
                  </a>
                </div>
                <div className="date-form">
                  <DateTime />
                </div>
              </div>
              <div className="row">
                <div className="col-10 col-lg-10 col-xxl-10 d-flex company-steps">
                  <h6
                    className={`camp-steps ${
                      !showCheckMark ? "check-step bi bi-check-circle" : ""
                    }`}
                  >
                    Step 1
                  </h6>
                  <h6
                    className={`camp-steps ${!showCheckMark ? "step-1" : ""}`}
                  >
                    Step 2
                  </h6>
                  {addEmailSearch &&
                  <h6
                    className={`camp-steps ${!showCheckMark ? "step-2" : ""}`}
                  >
                    Step 3
                  </h6>
                  }
                </div>
                <div className="company-search">
                  <div className="my-2 mod-form">
                    <label
                      htmlFor="estimated_revenue_range"
                      className="form-label2"
                    >
                      Estimated Revenue Range
                    </label>
                    <MultiSelect
                      options={revenue_range}
                      className="mod-select"
                      aria-label="Default select example"
                      value={selectedRevenueRange}
                      onChange={setSelectedRevenueRange}
                    />
                  </div>

                  <div className="my-2 mod-form">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label2"
                    >
                      Founded
                    </label>
                    <MultiSelect
                      options={founded}
                      className="mod-select"
                      aria-label="Default select example"
                      value={selectedFoundedDate}
                      onChange={setSelectedFoundedDate}
                    />
                  </div>

                  <div className="my-2 mod-form">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Actively Hiring
                    </label>
                    <select
                      className="form-select form-select-lg mod-select"
                      aria-label="Default select example"
                      onChange={(e) => {
                        var cs = { ...contactDetails };
                        cs.actively_hiring = e.target.value;
                        setContactDetails(cs);
                      }}
                      value={
                        typeof contactDetails["actively_hiring"] === "undefined"
                          ? ""
                          : contactDetails["actively_hiring"]
                      }
                    >
                      <option selected hidden className="slct-plchldr">
                        Choose
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div className="my-2 mod-form">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label2"
                    >
                      Leadership Hire
                    </label>
                    <MultiSelect
                      options={leadership_hire}
                      className="mod-select"
                      aria-label="Default select example"
                      value={selectedLeadershipHire}
                      onChange={setSelectedLeadershipHire}
                    />
                  </div>

                  <div className="my-2 mod-form">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Company Type
                    </label>
                    <select
                      className="form-select form-select-lg mod-select"
                      aria-label="Default select example"
                      onChange={(e) => {
                        var cs = { ...contactDetails };
                        cs.company_type = e.target.value;
                        setContactDetails(cs);
                      }}
                      value={
                        typeof contactDetails["company_type"] === "undefined"
                          ? ""
                          : contactDetails["company_type"]
                      }
                    >
                      <option selected hidden className="slct-plchldr">
                        Choose
                      </option>
                      <option value="profit">For Profit</option>
                      <option value="non_profit">For Non-profit</option>
                    </select>
                  </div>

                  <div className="email_campaign" onClick={() => {
                    setAddEmailSearch(!addEmailSearch)
                  }}>
                    
                    <span>
                      {addEmailSearch && <span><i class="bi bi-minus-circle"></i>remove Email Search</span>}
                      {!addEmailSearch && 
                        <span>
                          <i class="bi bi-plus-circle" style={{paddingRight: "5px"}}></i>
                            add Email Search
                        </span>}
                    </span>
                  </div>

                  {!addEmailSearch &&
                  <div className="my-3 mod-btn">
                    <button
                      onClick={() => {
                        // SUBMIT YOUR FORM
                        contactSearch(contactDetails);
                        setInnerPage(7);
                        // setshowCheckMark(showCheckMark);
                        // setInnerPage(4);
                      }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                  }
                  {addEmailSearch &&
                    <div className="my-3 mod-btn">
                      <button
                        onClick={() => {
                          setshowCheckMark(showCheckMark);
                          setInnerPage(4);
                        }}
                      >
                        Go to Add Email Search
                      </button>
                    </div>
                  }
                </div>
              </div>
            </div>
          )}
          {/* {innerPage === 11 &&
            <div>
              <div onClick={()=>setInnerPage(4)}>Back</div>
              Write Form for These


              <div className="my-3 mod-btn">
                <button
                  onClick={() => {
                    // contactSearch(contactDetails);
                    setshowCheckMark(showCheckMark);
                    setInnerPage(4);
                  }}
                  type="submit"
                >
                  Finish
                </button>
              </div>
            </div>
          } */}
          {innerPage === 4 && (
            <div>
              <div className="d-flex justify-content-between user-val">
                <div className="heading-col plus-bck">
                  <h5>
                    Campaign &gt;&gt; <strong>Email Search</strong>
                  </h5>
                  <a
                    className="camp-back-lnk"
                    onClick={() => {
                      setshowCheckMark(showCheckMark);
                      setInnerPage(3);
                    }}
                  >
                    <i
                      className="bi bi-arrow-left"
                      style={{ marginRight: "5px", fontSize: "16px" }}
                    ></i>
                    Go back
                  </a>
                </div>
                <div className="date-form">
                  <DateTime />
                </div>
              </div>
              <div className="row">
                <div className="col-10 col-lg-10 col-xxl-10 d-flex company-steps">
                  <h6
                    className={`camp-steps ${
                      !showCheckMark ? "check-step bi bi-check-circle" : ""
                    }`}
                  >
                    Step 1
                  </h6>
                  <h6
                    className={`camp-steps ${!showCheckMark ? "check-step bi bi-check-circle" : ""}`}
                  >
                    Step 2
                  </h6>
                 
                  <h6
                    className={`camp-steps ${!showCheckMark ? "step-2" : ""}`}
                  >
                    Step 3
                  </h6>
                </div>
             
                <div className="col-10 col-lg-10 col-xxl-10 d-flex">
                  <div className="email-search">
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Job title
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg mod-input"
                        name="job_title"
                        placeholder="e.g. Engineer, Accountant, Technician"
                        onChange={(e) => {
                          var es = { ...contactDetails };
                          es.job_title = e.target.value;
                          setContactDetails(es);
                          console.log(es);
                        }}
                        value={
                          typeof contactDetails["job_title"] === "undefined"
                            ? ""
                            : contactDetails["job_title"]
                        }
                      />
                    </div>
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Job status
                      </label>
                      <select
                        className="form-select form-select-lg mod-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          var es = { ...contactDetails };
                          es.job_status = e.target.value;
                          setContactDetails(es);
                        }}
                        value={
                          typeof contactDetails["job_status"] === "undefined"
                            ? ""
                            : contactDetails["job_status"]
                        }
                      >
                        <option selected hidden className="slct-plchldr">
                          Choose one
                        </option>
                        <option value="current">Current</option>
                        <option value="past">Past</option>
                        <option value="current_or_past">Current or Past</option>
                      </select>
                    </div>

                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Skills and Keyword
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg mod-input"
                        name="skills_keywords"
                        placeholder="e.g. SAP, JavaScript, Azure"
                        onChange={(e) => {
                          var es = { ...contactDetails };
                          es.skills_keywords = e.target.value;
                          setContactDetails(es);
                        }}
                        value={
                          typeof contactDetails["skills_keywords"] === "undefined"
                            ? ""
                            : contactDetails["skills_keywords"]
                        }
                      />
                    </div>
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Country
                      </label>
                      {/* {JSON.stringify(countries)} */}
                      <select
                        className="form-select form-select-lg mod-select"
                        aria-label="Default select example"
                        onChange={(e)=>{
                          var c = e.target.value;
                          setCountryEmail(c);
                        }}
                      >
                        {countries.map((thiscountry, index)=>{
                          return(
                            <option value={index}>{thiscountry.name}</option>
                          )
                        })}
                      </select>
                    </div>
                    <div className="my-3 mod-form-hidden">
                      {JSON.stringify(stateOptions) !== "[]" &&
                      <>
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          State
                        </label>
                        <select
                          className="form-select form-select-lg mod-select"
                          aria-label="Default select example"
                          onChange={(e)=>{
                            setStateEmail(e.target.value);
                          }}
                        >     
                          {JSON.parse(JSON.stringify(stateOptions)).map((thisState, index)=>{
                            return(
                            <option selected value={index} className="slct-plchldr"  key={`${countryEmail} - ${index}`}>
                              {thisState.name}
                            </option>
                            )
                          })}
                        </select>
                      </>
                      }
                    </div>
                    <div className="my-3 mod-form-hidden">
                      {JSON.stringify(cityoptions) !== "[]" &&
                      <>
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Region
                        </label>       
                        <select
                          className="form-select form-select-lg mod-select"
                          aria-label="Default select example"
                          onChange={(e)=>{
                            setCityEmail(e.target.value);
                          }}
                        >
                          {cityoptions.map((thiscity, index)=>{
                            return(
                              <option selected value={index} className="slct-plchldr" key={`${countryExtract} - ${stateExtract} -  ${index}`}>
                                  {thiscity.name}
                              </option>
                            )
                          })}
                        </select>
                      </>
                      }
                    </div>
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label2"
                      >
                        Industry
                      </label>
                      <MultiSelect
                        className="mod-select"
                        options={linkedlnIndustries}
                        value={selectedEmailIndustry}
                        onChange={setSelectedEmailIndustry}
                        labelledBy="Select Industry"
                      />
                    </div>
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Duration in current role
                      </label>
                      <select
                        className="form-select form-select-lg mod-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          var es = { ...contactDetails };
                          es.duration_current_role = e.target.value;
                          setContactDetails(es);
                        }}
                        value={
                          typeof contactDetails["duration_current_role"] ===
                          "undefined"
                            ? ""
                            : contactDetails["duration_current_role"]
                        }
                      >
                        <option selected hidden className="slct-plchldr">
                          Choose
                        </option>
                        <option value="0-12">0 - 12 months</option>
                        <option value="1-3">1 - 3 years</option>
                        <option value="3-5">3 - 5 years</option>
                        <option value="5-10">5 - 10 years</option>
                        <option value="10+">10 years+</option>
                      </select>
                    </div>
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Company Size
                      </label>
                      <select
                        className="form-select form-select-lg mod-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          var es = { ...contactDetails };
                          es.company_size = e.target.value;
                          setContactDetails(es);
                        }}
                        value={
                          typeof contactDetails["company_size"] === "undefined"
                            ? ""
                            : contactDetails["company_size"]
                        }
                      >
                        <option selected hidden className="slct-plchldr">
                          Choose
                        </option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="501-1000">501-1000</option>
                        <option value="1001-5000">1001-5000</option>
                        <option value="5001-10000">5001-10000</option>
                        <option value="10000+">10000+</option>
                      </select>
                    </div>

                    <div className="my-3 mod-btn">
                      <button
                        type="submit"
                        onClick={() => {
                          contactSearch(contactDetails);
                          setInnerPage(7);
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          )}
          {innerPage === 7 && (
            <div>
              <div className="d-flex justify-content-between user-val">
                <div className="heading-col plus-bck">
                  <h5>
                    Campaign &gt;&gt; <strong>Company Search</strong>
                  </h5>
                  <a
                    className="camp-back-lnk"
                    onClick={() => {
                      setInnerPage(1);
                    }}
                  >
                    <i
                      className="bi bi-arrow-left"
                      style={{ marginRight: "5px", fontSize: "16px" }}
                    ></i>
                    Go back
                  </a>
                </div>
                <div className="date-form">
                  <DateTime />
                </div>
              </div>
              <div className="success-page">
                <i className="bi bi-check-circle"></i>
                <p>{contactSearchResult.message}</p>
                {/* {console.log(companySearchResult.message)} */}
              </div>

              <button
                className="my-3 bck-btn"
                onClick={() => {
                  setInnerPage(1);
                }}
              >
                Go back to Campaigns
              </button>
            </div>
          )}
        </form>
        {/* END OF COMPANY SEARCH */}

        {/* ENGAGE */}
        {innerPage === 5 && (
          <div>
            <div className="d-flex justify-content-between user-val">
              <div className="heading-col plus-bck">
                <h5>
                  Campaign &gt;&gt; <strong>Engage</strong>
                </h5>
                <a
                  className="camp-back-lnk"
                  onClick={() => {
                    setInnerPage(1);
                  }}
                >
                  <i
                    className="bi bi-arrow-left"
                    style={{ marginRight: "5px", fontSize: "16px" }}
                  ></i>
                  Go back
                </a>
              </div>
              <div className="date-form">
                <DateTime />
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-lg-10 col-xxl-10 d-flex company-steps">
                <h6
                  className={`engage-steps ${
                    createListPage == 1 || createListPage == 1.5
                      ? "step-1"
                      : "step-2"
                  } ${
                    createListPage > 1.5 ? "check-step bi bi-check-circle" : ""
                  }`}
                >
                  1 - Add List
                </h6>
                <h6
                  className={`engage-steps ${
                    createListPage == 2 ||
                    createListPage == 2.3 ||
                    createListPage == 2.5
                      ? "step-1"
                      : "step-2"
                  } ${
                    createListPage > 2.5 ? "check-step bi bi-check-circle" : ""
                  }`}
                >
                  2 - Create Sequence
                </h6>
                <h6
                  className={`engage-steps ${
                    createListPage == 3 ? "step-1" : "step-2"
                  } ${createListPage > 3 ? "check-step" : ""}`}
                >
                  3 - Summary
                </h6>
              </div>
              {createListPage == 1 && (
                <div className="big-add-icon">
                  <i
                    className="bi bi-plus"
                    onClick={() => {
                      setShowModal(true);
                      setModalPage("add_leads");
                      setshowCheckMark(showCheckMark);
                    }}
                  ></i>
                  <p>Add new leads</p>
                </div>
              )}

              {createListPage == 1.5 && (
                <div>
                  <div className="eng-row">
                    <div className="seq_create">
                      <p className="seq-txt">Engage history</p>
                      <button
                        className="seq-btn"
                        onClick={() => {
                          setShowModal(true);
                          setModalPage("add_leads");
                        }}
                      >
                        Create new list
                      </button>
                    </div>
                    {templates.map((thisEngageTemplate, index) => {
                      return (
                        <div className="my-3 saved-items" key={index}
                        onClick={()=>{
                          setSelectedTemplate(thisEngageTemplate);
                          console.log(thisEngageTemplate);
                          setCreateListPage(3);
                        }}
                        >
                          <span>{index + 1}</span>
                          <span>{thisEngageTemplate.template_name}</span>
                          <span>{thisEngageTemplate.list_name}</span>
                          <span>{moment(thisEngageTemplate.created_at).format("L")}</span>
                        </div>
                      );
                    })}
                </div>
                </div>
              )}

              {createListPage == 2 && (
                <div>
                  <button
                    className="prev-btn"
                    onClick={() => {
                      setCreateListPage(1);
                    }}
                  >
                    Previous
                  </button>
                  <div className="eng-row">
                    <div className="seq_create">
                      <p className="seq-txt">Create Sequence</p>
                      <button
                        className="seq-btn"
                        onClick={() => {
                          setShowModal(true);
                          setModalPage("create_sequence");
                        }}
                      >
                        Create Sequence
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {createListPage == 2.3 && (
                <div>
                  <div className="eng-row">
                    <div className="seq_create">
                      <p className="seq-txt">Engage history</p>
                      <button
                        className="seq-btn"
                        onClick={() => {
                          setShowModal(true);
                          setModalPage("create_sequence");
                        }}
                      >
                        Create Sequence
                      </button>
                    </div>
                    {templates.map((thisEngageTemplate, index) => {
                      return (
                        <div className="my-3 saved-items" key={index}
                        onClick={()=>{
                          setSelectedTemplate(thisEngageTemplate);
                          setCreateListPage(3);
                        }}
                        >
                          <span>{index + 1}</span>
                          <span>{thisEngageTemplate.template_name}</span>
                          <span>{thisEngageTemplate.list_name}</span>
                          <span>{moment(thisEngageTemplate.created_at).format("L")}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {createListPage == 2.5 && (
                <div>
                  <button
                    className="prev-btn"
                    onClick={() => {
                      setCreateListPage(2);
                    }}
                  >
                    Previous
                  </button>
                  <div className="eng-row">
                    <div className="seq_create">
                      <p className="seq-txt">Create Sequence</p>
                      <button
                        className="seq-btn"
                        onClick={() => {
                          setShowModal(true);
                          setModalPage("engage_steps");
                          resetStep();
                        }}
                      >
                        Add step
                      </button>
                    </div>
                    {selectedSteps.map((selectedStep, index) => {
                      return (
                        <div key={index}>
                          <div className="mt-5 add-steps">
                            <div className="form-check step-prechck">
                              <div>
                                <img
                                  src="../../assets/img/Rectangle-714.png"
                                  className="img-chckbx"
                                />
                              </div>
                              <label
                                className="form-check-label"
                                htmlFor="follow_contact"
                              >
                                Step {index + 1} - {selectedStep.text}
                              </label>
                            </div>
                            <div className="delays">
                              <span className="step_day">
                                <label htmlFor="days">Days:</label>
                                <input
                                  type="text"
                                  id="days"
                                  name="days"
                                  size="1"
                                  onChange={(e) => {
                                    var m = [...selectedSteps];
                                    var name = e.target.name;
                                    var value = e.target.value;
                                    m[index][name] = value;
                                    setSelectedSteps(m);
                                  }}
                                />
                              </span>
                              <span className="step_hr">
                                <label htmlFor="hours">Hours:</label>
                                <input
                                  type="text"
                                  id="hours"
                                  name="hours"
                                  size="1"
                                  onChange={(e) => {
                                    var m = [...selectedSteps];
                                    var name = e.target.name;
                                    var value = e.target.value;
                                    m[index][name] = value;
                                    setSelectedSteps(m);
                                  }}
                                />
                              </span>
                              {typeof selectedStep.message !== "undefined" && (
                                <div className="my-2">
                                  <textarea
                                    rows="2"
                                    cols="40"
                                    id="message"
                                    name="message"
                                    placeholder="Type your message"
                                    onChange={(e) => {
                                      var m = [...selectedSteps];
                                      var name = e.target.name;
                                      var value = e.target.value;
                                      m[index][name] = value;
                                      setSelectedSteps(m);
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                            {index > 1 && (
                                <div
                                  onClick={() => {
                                    var m = [...selectedSteps];
                                    m.splice(index, 1);
                                    setSelectedSteps(m);
                                  }}
                                >
                                  <i class="bi bi-x"></i>
                                </div>
                              )}
                            <div></div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="my-5 eng-btns">
                      <button 
                        className="temp-btn"
                        onClick={() => {
                          setShowModal(true);
                          setModalPage("save_template");
                        }}
                        >Save as template
                      </button>
                      <button
                        className="continue-btn"
                        onClick={() => {
                          setCreateListPage(3);
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {createListPage == 3 && (
                <div>
                  <button
                      className="prev-btn"
                      onClick={() => {
                        setCreateListPage(2.5);
                      }}
                    >
                     Previous
                    </button>
                  <div className="eng-row">
                    <div className="seq_summary">
                      
                        <div className="my-2 eng_name">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Campaign Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg mod-input"
                          name="campaign_name"
                          onChange={(e) => {
                            var ec = { ...engageDetails };
                            ec.campaign_name = e.target.value;
                            setEngageDetails(ec);
                          }}
                          value={
                            typeof engageDetails["campaign_name"] === "undefined"
                              ? ""
                              : engageDetails["campaign_name"]
                          }
                          placeholder="Enter Campaign name"
                        />
                        </div>

                        <p className="seq-txt2">Summary of your campaign</p>
                      
                    </div>
                    {/* {JSON.stringify(selectedSteps)} */}
                    {/* {JSON.stringify(engageDetails)} */}
                    <div className="add_leads">
                      <h5>Step 1 - Add Leads</h5>
                      <hr/>

                      <div className="my-4">
                        <p className="faded-p">List Name</p>
                        <p className="norm-p">
                          {engageDetails.list_name}
                        </p>
                      </div>

                      <div className="my-4">
                        <p className="faded-p">Connection Status</p>
                        <p className="norm-p">
                          {engageDetails.connection_status}
                        </p>
                      </div>

                      <div className="my-4">
                        <p className="faded-p">Job Title</p>
                        <p className="norm-p">
                          {engageDetails.job_title}
                        </p>
                      </div>

                      <div className="my-4">
                        <p className="faded-p">Job Status</p>
                        <p className="norm-p">
                          {engageDetails.job_status}
                        </p>
                      </div>

                      <div className="my-4">
                        <p className="faded-p">Skills and Keywords</p>
                        <p className="norm-p">
                          {engageDetails.skills_keywords}
                        </p>
                      </div>

                      <div className="my-4">
                        <p className="faded-p">Location</p>
                        <p className="norm-p">
                          {engageDetails.location}
                        </p>
                      </div>

                      <div className="my-4">
                        <p className="faded-p">Industry</p>
                        <p className="norm-p">
                          {engageDetails.industry}
                        </p>
                      </div>

                      <div className="my-4">
                        <p className="faded-p">Duration in current role</p>
                        <p className="norm-p">
                          {engageDetails.duration_current_role}
                        </p>
                      </div>
                    </div>
                    <div></div>

                    <div className="add_leads">
                      <h5>Step 2 - Create Sequence</h5>
                      <hr/>
                      {selectedSteps.map((thisStep, index) => {
                        return (
                          <div key={index}>
                            <h4>
                              Step {index + 1} - {thisStep.text}
                            </h4>
                            <p>Days - {thisStep.days}</p>
                            <p>Hours - {thisStep.hours}</p>
                            {typeof thisStep.message !== "undefined" && (
                              <p>Message - {thisStep.message}</p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="my-5 eng-btns">
                      <button
                        className="continue-btn"
                        onClick={() => {
                          engageCampaign();
                          setInnerPage(10);
                        }}
                      >
                        Submit a Campaign
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {innerPage === 10 && (
          <div>
            <div className="d-flex justify-content-between user-val">
              <div className="heading-col plus-bck">
                <h5>
                  Campaign &gt;&gt; <strong>Engage</strong>
                </h5>
                <a
                  className="camp-back-lnk"
                  onClick={() => {
                    setInnerPage(1);
                  }}
                >
                  <i
                    className="bi bi-arrow-left"
                    style={{ marginRight: "5px", fontSize: "16px" }}
                  ></i>
                  Go back
                </a>
              </div>
              <div className="date-form">
                <DateTime />
              </div>
            </div>
            <div className="success-page">
              <i className="bi bi-check-circle"></i>
              <p>{engageResult.message}</p>
            </div>

            <button
              className="my-3 bck-btn"
              onClick={() => {
                setInnerPage(1);
              }}
            >
              Go back to Campaigns
            </button>
          </div>
        )}

        {/* END OF ENGAGE */}

        {/* DATA EXTRACT */}
        <form onSubmit={handleDataExtractSubmit}>
          {innerPage === 6 && (
            <div>
              <div className="d-flex justify-content-between user-val">
                <div className="heading-col plus-bck">
                  <h5>
                    Campaign &gt;&gt; <strong>Data Extract</strong>
                  </h5>
                  <a
                    className="camp-back-lnk"
                    onClick={() => {
                      setshowCheckMark(showCheckMark);
                      setInnerPage(1);
                    }}
                  >
                    <i
                      className="bi bi-arrow-left"
                      style={{ marginRight: "5px", fontSize: "16px" }}
                    ></i>
                    Go back
                  </a>
                </div>
                <div className="date-form">
                  <DateTime />
                </div>
              </div>
              <div className="row">
                <div className="col-10 col-lg-10 col-xxl-10 d-flex">
                  <div className="email-search">
                    <div className="note-1">
                      <p>
                        *you must be first level connected on LinkedIn to use
                        this service
                      </p>
                    </div>
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Campaign Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg mod-input"
                        name="campaign_name"
                        onChange={(e) => {
                          var de = { ...extractDetails };
                          de.campaign_name = e.target.value;
                          setExtractDetails(de);
                        }}
                        value={
                          typeof extractDetails["campaign_name"] === "undefined"
                            ? ""
                            : extractDetails["campaign_name"]
                        }
                        placeholder="Enter Campaign name"
                      />
                    </div>
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Job title
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg mod-input"
                        name="skills_keywords"
                        placeholder="e.g. Engineer, Accountant, Technician"
                        onChange={(e) => {
                          var de = { ...extractDetails };
                          de.job_title = e.target.value;
                          setExtractDetails(de);
                        }}
                        value={
                          typeof extractDetails["job_title"] === "undefined"
                            ? ""
                            : extractDetails["job_title"]
                        }
                      />
                    </div>
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Job Status
                      </label>
                      <select
                        className="form-select form-select-lg mod-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          var de = { ...extractDetails };
                          de.job_status = e.target.value;
                          setExtractDetails(de);
                        }}
                        value={
                          typeof extractDetails["job_status"] === "undefined"
                            ? ""
                            : extractDetails["job_status"]
                        }
                      >
                        <option selected hidden className="slct-plchldr">
                          Choose one
                        </option>
                        <option value="current">Current</option>
                        <option value="past">Past</option>
                        <option value="current_or_past">Current or Past</option>
                      </select>
                    </div>

                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Skills and Keyword
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg mod-input"
                        name="skills_keywords"
                        placeholder="e.g. SAP, JavaScript, Azure"
                        onChange={(e) => {
                          var de = { ...extractDetails };
                          de.skills_keywords = e.target.value;
                          setExtractDetails(de);
                        }}
                        value={
                          typeof extractDetails["skills_keywords"] ===
                          "undefined"
                            ? ""
                            : extractDetails["skills_keywords"]
                        }
                      />
                    </div>
                    <div className="my-2 mod-form">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Country
                    </label>

                    {/* {JSON.stringify(countries)} */}
                    <select
                      className="form-select form-select-lg mod-select"
                      aria-label="Default select example"
                      onChange={(e)=>{
                        var c = e.target.value;
                        setCountryExtract(c);
                      }}
                    >
                      {countries.map((thiscountry, index)=>{
                        return(
                          <option value={index}>{thiscountry.name}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="my-3 mod-form-hidden">
                  {JSON.stringify(stateOptions) !== "[]" &&
                    <>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      State
                    </label>

                    <select
                      className="form-select form-select-lg mod-select"
                      aria-label="Default select example"
                      onChange={(e)=>{
                        setStateExtract(e.target.value);
                      }}
                    >
                      
                      {JSON.parse(JSON.stringify(stateOptions)).map((thisState, index)=>{
                        return(
                        <option selected value={index} className="slct-plchldr"  key={`${countryExtract} - ${index}`}>
                          {thisState.name}
                        </option>
                        )
                      })}
                    </select>
                    </>
                    }
                  </div>
                  <div className="my-3 mod-form-hidden">
                  {JSON.stringify(cityoptions) !== "[]" &&
                    <>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Region
                    </label>
                    {/* {JSON.stringify(stateOptions)} */}
                    
                    <select
                      className="form-select form-select-lg mod-select"
                      aria-label="Default select example"
                      onChange={(e)=>{
                        setCityExtract(e.target.value);
                      }}
                    >
                      {cityoptions.map((thiscity, index)=>{
                        return(
                          <option selected value={index} className="slct-plchldr" key={`${countryExtract} - ${stateExtract} -  ${index}`}>
                              {thiscity.name}
                          </option>
                        )
                      })}
                    </select>
                    </>
                    }
                  </div>
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label2"
                      >
                        Industry
                      </label>
                      <MultiSelect
                      className="mod-select"
                      options={linkedlnIndustries}
                      value={selectedExtractIndustry}
                      onChange={setSelectedExtractIndustry}
                      // labelledBy="Select Industry"
                    />
                    </div>
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Duration in current role
                      </label>
                      <select
                        className="form-select form-select-lg mod-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          var de = { ...extractDetails };
                          de.duration_current_role = e.target.value;
                          setExtractDetails(de);
                        }}
                        value={
                          typeof extractDetails["duration_current_role"] ===
                          "undefined"
                            ? ""
                            : extractDetails["duration_current_role"]
                        }
                      >
                        <option selected hidden className="slct-plchldr">
                          Choose
                        </option>
                        <option value="0-12">0 - 12 months</option>
                        <option value="1-3">1 - 3 years</option>
                        <option value="3-5">3 - 5 years</option>
                        <option value="5-10">5 - 10 years</option>
                        <option value="10+">10 years+</option>
                      </select>
                    </div>
                    <div className="my-2 mod-form">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Company Size
                      </label>
                      <select
                        className="form-select form-select-lg mod-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          var de = { ...extractDetails };
                          de.company_size = e.target.value;
                          setExtractDetails(de);
                        }}
                        value={
                          typeof extractDetails["company_size"] === "undefined"
                            ? ""
                            : extractDetails["company_size"]
                        }
                      >
                        <option selected hidden className="slct-plchldr">
                          Choose
                        </option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="501-1000">501-1000</option>
                        <option value="1001-5000">1001-5000</option>
                        <option value="5001-10000">5001-10000</option>
                        <option value="10000+">10000+</option>
                      </select>
                    </div>

                    <div className="my-3 mod-btn">
                      <button
                        type="submit"
                        onClick={() => {
                          dataExtract(extractDetails);
                          setInnerPage(9);
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {innerPage === 9 && (
            <div>
              <div className="d-flex justify-content-between user-val">
                <div className="heading-col plus-bck">
                  <h5>
                    Campaign &gt;&gt; <strong>Company Search</strong>
                  </h5>
                  <a
                    className="camp-back-lnk"
                    onClick={() => {
                      setInnerPage(1);
                    }}
                  >
                    <i
                      className="bi bi-arrow-left"
                      style={{ marginRight: "5px", fontSize: "16px" }}
                    ></i>
                    Go back
                  </a>
                </div>
                <div className="date-form">
                  <DateTime />
                </div>
              </div>
              <div className="success-page">
                <i className="bi bi-check-circle"></i>
                <p>{extractResult.message}</p>
              </div>

              <button
                className="my-3 bck-btn"
                onClick={() => {
                  setInnerPage(1);
                }}
              >
                Go back to Campaigns
              </button>
            </div>
          )}
        </form>
        {/* END OF DATA EXTRACT */}
      </div>
    </div>
  );
}
