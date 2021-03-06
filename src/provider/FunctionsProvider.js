/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import config from "../config";

const FunctionsProvider = (props) => {
  const baseURL = config().apiHost;
  const steps = [
    { icon: "", text: "View Profile" },
    { icon: "", text: "Send Connection Request" },
    { icon: "", text: "Like a Post" },
    { icon: "", text: "Send Follow Up Message" },
  ];
  const [engageDetails, setEngageDetails] = useState({
    job_title: "",
    location: "",
    industry: "",
    company_size: "",
    list_name: "",
    connection_status: "",
    job_status: "",
    like_a_post_seq: "",
    send_follow_up_seq_message: "",
    skills_keywords: "",
    duration_current_role: "",
    campaign_name: "",
  });
  const [templateDetails, setTemplateDetails] = useState({
    template_name: "",
    job_title: "",
    location: "",
    industry: "",
    company_size: "",
    list_name: "",
    connection_status: "",
    job_status: "",
    like_a_post_seq: "",
    send_follow_up_seq_message: "",
    skills_keywords: "",
    duration_current_role: "",
  });
  const [selectedSteps, setSelectedSteps] = useState([]);
  const resetStep = () => {
    setSelectedSteps([
      { icon: "", text: "View Profile", days: 0, hours: 0 },
      { icon: "", text: "Follow Contact", days: 0, hours: 0 },
    ]);
  };
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");
  const [showSideBar, setShowSideBar] = useState(true);
  const [credit, setCredit] = useState({ credit: 0, value: 0 });
  const [showModal, setShowModal] = useState(false);
  const [modalPage, setModalPage] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [userId, setUserId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [campaignId, setCampaignId] = useState(null);
  const [requestId, setRequestId] = useState(null);
  const [campaignPage, setCampaignPage] = useState(1);
  const [userCampaignPage, setUserCampaignPage] = useState(1);
  const [cancelRequest, setCancelRequests] = useState({
    campaign_requests: { data: [] },
  });
  const [defaultSteps, setDefaultSteps] = useState([
    { id: 1, name: "View Profile", days: 0, hours: 0 },
    { id: 1, name: "Follow Contact", days: 0, hours: 0 },
  ]);
  const [createListPage, setCreateListPage] = useState(1);
  const [singleCancelRequest, setSingleCancelRequest] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const [token, setToken] = useState("");
  const [passwordToken, setPasswordToken] = useState("");
  // const [verificationToken, setVerificationToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [allUsers, setAllUsers] = useState("");
  const [linkedlnUsers, setLinkedlnUsers] = useState({});
  const [allUserInfo, setAllUserInfo] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [metrics, setMetrics] = useState({});
  const [metricsGraph, setMetricsGraph] = useState({
    data: { mon: 0, tue: 0, wed: 0, thur: 0, fri: 0, sat: 0, sun: 0 },
  });
  const [connectMetrics, setConnectMetrics] = useState({});
  const [connectGraph, setConnectGraph] = useState({
    mon: 0,
    tue: 0,
    wed: 0,
    thur: 0,
    fri: 0,
    sat: 0,
    sun: 0,
  });
  const [campaign, setCampaign] = useState({
    campaign: { data: [] },
  });
  const [allConnections, setAllConnections] = useState({});
  const [transaction, setTransaction] = useState({});
  const [signUpData, setSignUpData] = useState({});
  const [resetPass, setResetPass] = useState({});
  const [managedCampaigns, setManagedCampaigns] = useState({
    campaign: { data: [] },
  });
  const [managedRoles, setManagedRoles] = useState({
    Roles: { data: [] },
  });
  const [linkedlnIndustries, setLinkedlnIndustries] = useState([]);
  const [allPermissions, setAllPermissions] = useState({});
  const [showForgotPasswordSuccess, setShowForgotPasswordSuccess] =
    useState("");

  const [creditMessage, setCreditMessage] = useState([]);
  const [assignUserMessage, setAssignUserMessage] = useState({});
  const [deleteUserMessage, setDeleteUserMessage] = useState("");
  const [buyCreditMessage, setBuyCreditMessage] = useState("");
  const [creditStatus, setCreditStatus] = useState(false);
  const [changePass, setChangePass] = useState({});
  const [changeUserPass, setChangeUserPass] = useState({
    current_pwd: "",
    new_pwd: "",
  });
  const [changeUserDets, setChangeUserDets] = useState({});
  const [utilization, setUtilization] = useState({});
  const [cancellationMsg, setCancellationMsg] = useState([]);
  const [cancellationStatus, setCancellationStatus] = useState(false);
  const [userAlert, setUserAlert] = useState({});
  const [adminAlert, setAdminAlert] = useState({});
  const [creditUtilized, setCreditUtilized] = useState({});
  const [contactSearchResult, setContactSearchResult] = useState({});
  const [rerunMessage, setRerunMessage] = useState({});
  const [extractResult, setExtractResult] = useState({});
  const [engageResult, setEngageResult] = useState({});
  const [robotMessages, setRobotMessages] = useState({});
  const [verifyMessage, setVerifyMessage] = useState({});
  const [signUpMessage, setSignUpMessage] = useState({});
  const [engageTemplate, setEngageTemplate] = useState({});
  const [addEmailSearch, setAddEmailSearch] = useState(false);

  let history = useHistory();
  // useEffect(() => {
  //   if (creditMessage !== "") {
  //     setTimeout(function () {
  //       setCreditMessage("");
  //     }, 60000);
  //   }
  // }, [creditMessage]);
  useEffect(() => {
    campaignManagement(campaignPage);
  }, [campaignPage]);

  useEffect(() => {
    userCampaign(userCampaignPage);
  }, [userCampaignPage]);

  useEffect(() => {
    if (
      typeof localStorage.getItem("token") !== "undefined" &&
      // eslint-disable-next-line valid-typeof
      typeof localStorage.getItem("token") !== null
    ) {
      if (localStorage.getItem("token") !== "") {
        setToken(localStorage.getItem("token"));
      }
    }
  }, []);
  useEffect(() => {
    if (token !== "") {
      getUserDetails();
    }
  }, [token]);

  const getUserDetails = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/user", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserDetails(result);
        setLoggedIn(true);
        enqueueSnackbar("Log in Successfull", { variant: "success" });
      })
      .catch((error) => console.log("error", error));
  };

  const login = (email, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    var raw = JSON.stringify({ email: email, password: password });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(baseURL + "/login", requestOptions)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        if (result.success === true) {
          console.log(result.token);
          setToken(result.token);
          localStorage.setItem("token", result.token);
          history.push("/dashboard");
        } else {
          setLoggedIn(false);
          enqueueSnackbar("Invalid Credientials or Account Disabled", {
            variant: "error",
          });
        }
      })
      .catch((error) => console.log("error", error));
  };

  const adminlogin = (email, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    var raw = JSON.stringify({ email: email, password: password });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    console.log(baseURL);
    fetch(baseURL + "/signin", requestOptions)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        if (result.success === true) {
          console.log(result.token);
          setToken(result.token);
          localStorage.setItem("token", result.token);
          history.push("/admin/dashboard");
        } else {
          setLoggedIn(false);
          enqueueSnackbar("Invalid Credientials or Account Disabled", {
            variant: "error",
          });
        }
      })
      .catch((error) => console.log("error", error));
  };

  const registerUser = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var raw = JSON.stringify(signUpData);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(baseURL + "/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // login(signUpData.email, signUpData.password);
        //put snackbar here
        enqueueSnackbar("Sign Up Successfull", { variant: "success" });
        setSignUpMessage(result);
        // setShowModal(true);
        // setModalPage("user_registered");
        //redirect to loginset
      })
      .catch((error) => console.log("error", error));
  };

  const verifyEmail = (verificationToken) => {
    alert("djhdshds");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(baseURL + "/verify-email/" + verificationToken, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        enqueueSnackbar("Account Verified", { variant: "success" });
        history.push("/login");
      })
      .catch(error => console.log('error', error));
      
  }

  const banUser = (userId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var formdata = new FormData();

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(baseURL + "/admin/user/" + userId + "/ban", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        getAllUsers();
        enqueueSnackbar("User banned", {
          variant: "success",
        });
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const activateUser = (userId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var formdata = new FormData();

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      baseURL + "/admin/user/" + userId + "/activate",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        getAllUsers();
        enqueueSnackbar("User activated", {
          variant: "success",
        });
      })
      .catch((error) => console.log("error", error));
  };
  const assignCredit = (creditAmount, campaignId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      no_of_credits_allocated: creditAmount,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      baseURL + "/campaign/assign-credit/" + campaignId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        getUserDetails();
        console.log(result);
        // setCreditMessage(result);
        if (typeof result.error == "undefined") {
          setCreditMessage(result.message);
          setCreditStatus(true);
        } else {
          setCreditMessage(result.error);
          setCreditStatus(false);
        }
        getUserDetails();
        userCampaign();
      })
      .catch((error) => console.log("error", error));
  };
  /*************** CREATE CAMPAIGN *****************/

  /*** CONTACT SEARCH CAMPAIGN ***/
  const contactSearch = (contactDetails) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var formdata = new FormData();
    formdata.append("campaign_name", contactDetails.campaign_name);
    formdata.append("description", contactDetails.description);
    formdata.append("hq_location", contactDetails.hq_location);
    formdata.append("industry", contactDetails.industry);
    formdata.append("no_of_employees", contactDetails.no_of_employess);
    formdata.append("estimated_revenue_range", contactDetails.estimated_revenue_range);
    formdata.append("founded", contactDetails.founded);
    formdata.append("actively_hiring", contactDetails.actively_hiring);
    formdata.append("leadership_hire", contactDetails.leadership_hire);
    formdata.append("company_type", contactDetails.company_type);
    formdata.append("job_title", contactDetails.job_title);
    formdata.append("job_status", contactDetails.job_status);
    formdata.append("skills_and_keyword", contactDetails.skills_keywords);
    formdata.append("location", contactDetails.location);
    formdata.append("duration_in_current_role", contactDetails.duration_current_role);
    formdata.append("company_size", contactDetails.company_size);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(baseURL + "/campaign/create/contact-search", requestOptions)
      .then(response => response.json())
      .then(result => {
        userCampaign();
        setContactSearchResult(result);
        console.log(result);
      })
      .catch(error => console.log('error', error));
  };

  /*** DATA EXTRACT CAMPAIGN ***/
  const dataExtract = (extractDetails) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var formdata = new FormData();
    formdata.append("campaign_name", extractDetails.campaign_name);
    formdata.append("job_title", extractDetails.job_title);
    formdata.append("job_status", extractDetails.job_status);
    formdata.append("skills_and_keyword", extractDetails.skills_keywords);
    formdata.append("location", extractDetails.location);
    formdata.append("industry", extractDetails.industry);
    formdata.append(
      "duration_in_current_role",
      extractDetails.duration_current_role
    );
    formdata.append("company_size", extractDetails.company_size);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      baseURL + "/campaign/create/data-extract",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        userCampaign();
        setExtractResult(result);
        // console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  /*** ENGAGE CAMPAIGN ***/
  const engageCampaign = () => {
    let viewProfile = { icon: "", text: "View Profile", days: 0, hours: 0 };
    let connectionRequest = {
      icon: "",
      text: "Send Connection Request",
      days: 0,
      hours: 0,
    };
    let likeAPost = { icon: "", text: "Like a Post", days: 0, hours: 0 };
    let followMessage = {
      icon: "",
      text: "Send Follow Up Message",
      days: 0,
      hours: 0,
    };

    selectedSteps.filter((thisSelectedStep) => {
      if (thisSelectedStep.text === "View Profile") {
        viewProfile = thisSelectedStep;
      } else if (thisSelectedStep.text === "Send Connection Request") {
        connectionRequest = thisSelectedStep;
      } else if (thisSelectedStep.text === "Like a Post") {
        likeAPost = thisSelectedStep;
      } else {
        followMessage = thisSelectedStep;
      }
    });

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    console.log(
      selectedSteps,
      viewProfile,
      connectionRequest,
      likeAPost,
      followMessage
    );
    var formdata = new FormData();
    formdata.append("job_title", engageDetails.job_title);
    formdata.append("industry", engageDetails.industry);
    formdata.append("location", engageDetails.location);
    formdata.append("duration_in_current_role", engageDetails.duration_current_role);
    formdata.append("company_size", engageDetails.company_size);
    formdata.append("skills_and_keyword", engageDetails.skills_keywords);
    formdata.append("list_name", engageDetails.list_name);
    formdata.append("connection_status", engageDetails.connection_status);
    formdata.append("job_status", engageDetails.job_status);
    formdata.append("campaign_name", engageDetails.campaign_name);

    formdata.append(
      "view_profile_seq_duration[0]",
      "days: " + viewProfile.days
    );
    formdata.append(
      "view_profile_seq_duration[1]",
      "hours: " + viewProfile.hours
    );
    formdata.append(
      "follow_contact_seq_duration[0]",
      "days: " + connectionRequest.days
    );
    formdata.append(
      "follow_contact_seq_duration[1]",
      "hours: " + connectionRequest.hours
    );
    formdata.append(
      "send_follow_up_seq_message[0]",
      "hours:" + followMessage.hours
    );
    formdata.append(
      "send_follow_up_seq_message[1]",
      "days:" + followMessage.days
    );

    formdata.append("like_a_post_seq[0]", "hours: " + likeAPost.hours);
    formdata.append("like_a_post_seq[1]", "days:" + likeAPost.days);
    formdata.append("like_a_post_seq[2]", "message: Loremipsum");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      baseURL + "/campaign/create/engage",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        userCampaign();
        setEngageResult(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const createEngageTemplate = () => {
    let viewProfile = { icon: "", text: "View Profile", days: 0, hours: 0 };
    let connectionRequest = {
      icon: "",
      text: "Send Connection Request",
      days: 0,
      hours: 0,
    };
    let likeAPost = { icon: "", text: "Like a Post", days: 0, hours: 0 };
    let followMessage = {
      icon: "",
      text: "Send Follow Up Message",
      days: 0,
      hours: 0,
    };

    selectedSteps.filter((thisSelectedStep) => {
      if (thisSelectedStep.text === "View Profile") {
        viewProfile = thisSelectedStep;
      } else if (thisSelectedStep.text === "Send Connection Request") {
        connectionRequest = thisSelectedStep;
      } else if (thisSelectedStep.text === "Like a Post") {
        likeAPost = thisSelectedStep;
      } else {
        followMessage = thisSelectedStep;
      }
    });

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    console.log(
      selectedSteps,
      viewProfile,
      connectionRequest,
      likeAPost,
      followMessage
    );

    var formdata = new FormData();
    formdata.append("template_name", templateDetails.template_name);
    formdata.append("job_title", templateDetails.job_title);
    formdata.append("industry", templateDetails.industry);
    formdata.append("location", templateDetails.location);
    formdata.append(
      "duration_in_current_role",
      templateDetails.duration_current_role
    );
    formdata.append("company_size", templateDetails.company_size);
    formdata.append("list_name", templateDetails.list_name);
    formdata.append("connection_status", templateDetails.connection_status);
    formdata.append("job_status", templateDetails.job_status);
    formdata.append("skills_and_keyword", templateDetails.skills_keywords);

    formdata.append(
      "view_profile_seq_duration[0]",
      "days: " + viewProfile.days
    );
    formdata.append(
      "view_profile_seq_duration[1]",
      "hours: " + viewProfile.hours
    );
    formdata.append(
      "follow_contact_seq_duration[0]",
      "days: " + connectionRequest.days
    );
    formdata.append(
      "follow_contact_seq_duration[1]",
      "hours: " + connectionRequest.hours
    );
    formdata.append(
      "send_follow_up_seq_message[0]",
      "hours:" + followMessage.hours
    );
    formdata.append(
      "send_follow_up_seq_message[1]",
      "days:" + followMessage.days
    );

    formdata.append("like_a_post_seq[0]", "hours: " + likeAPost.hours);
    formdata.append("like_a_post_seq[1]", "days:" + likeAPost.days);
    formdata.append("like_a_post_seq[2]", "message: Loremipsum");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      baseURL + "/campaigns/engage/template/create",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        getEngageTemplate();
        console.log(result);
        enqueueSnackbar("Template Saved", {
          variant: "success",
        });
      })
      .catch((error) => console.log("error", error));
  };

  /* END OF CREATE CAMPAIGN */

  const getEngageTemplate = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(baseURL + "/campaigns/engage/template", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setEngageTemplate(result);
      })
      .catch(error => console.log('error', error));
  }

  const confirmCampaignSubmission = (campaignId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var raw = "";

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      baseURL + "/campaign/confirm-submission/" +
        campaignId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        userCampaign();
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const rerunCampaign = (campaignId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = "";

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      baseURL + "/campaign/rerun/" + campaignId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        userCampaign();
        setRerunMessage(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const approveCampaign = (campaignId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      baseURL + "/admin/approve-campaign/" + campaignId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        campaignManagement();
        enqueueSnackbar("Campaign Approved Successfully", {
          variant: "success",
        });
      })
      .catch((error) => console.log("error", error));
  };

  const declineCampaign = (campaignId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      baseURL + "/admin/cancel-campaign/" + campaignId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        campaignManagement();
        enqueueSnackbar("Campaign Declined Successfully", {
          variant: "success",
        });
      })
      .catch((error) => console.log("error", error));
  };

  const createUser = (newUser) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: newUser.name,
      email: newUser.email,
      company: newUser.company,
      password: newUser.password,
      confirm_password: newUser.confirm_password,
      roles: newUser.role,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(baseURL + "/admin/user/create", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        getAllUsers();
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const getMetrics = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/admin/metrics", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setMetrics(result);
      })
      .catch((error) => console.log("error", error));
  };

  const getGraph = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      baseURL + "/admin/graph",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setMetricsGraph(result);
      })
      .catch((error) => console.log("error", error));
  };

  const connectionMetrics = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/connections/metrics", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setConnectMetrics(result);
      })
      .catch((error) => console.log("error", error));
  };

  const connectionGraph = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/connections/graph", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setConnectGraph(result);
      })
      .catch((error) => console.log("error", error));
  };

  const creditGraph = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      baseURL + "/credit/charts",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCreditUtilized(result);
        // console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const userCampaign = (userCampaignPage) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      baseURL + "/campaigns?page=" + userCampaignPage,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCampaign(result);
      })
      .catch((error) => console.log("error", error));
  };
  const getUniqueCampaign = (campaign_id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/campaign/" + campaign_id, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const cancelCampaign = (campaignId, campaignBody) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      campaign_id: campaignId,
      body: campaignBody,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(baseURL + "/campaign/cancel", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (typeof result.error == "undefined") {
          setCancellationMsg(result.message);
          setCancellationStatus(true);
        } else {
          setCancellationMsg(result.error);
          setCancellationStatus(false);
        }

        userCampaign();
      })
      .catch((error) => console.log("error", error));
  };

  const viewCancelCampaign = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/admin/request/camp", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCancelRequests(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const viewSingleCampaignRequest = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      baseURL + "/admin/request/camp/" + requestId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setSingleCancelRequest(result);
      })
      .catch((error) => console.log("error", error));
  };

  const getRobotMessage = (username, password, country) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    console.log("asassas");
    
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      baseURL + "/get-robot-messages",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setRobotMessages(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const sendRobotData = (username, password, country) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: username,
      password: password,
      country: country,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      baseURL + "/send-data-to-robot",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        getRobotMessage(username, password, country);
        if (result.success === true) {
          console.log(result);
          // getRobotMessage();
        } else {
          enqueueSnackbar("Request could not be sent at the moment, please try again after some time", {
            variant: "warning",
          });
        }
      })
      .catch((error) => console.log("error", error));
  };

  const sendTwoFaCode = () => {
    var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "verification_code": 12345
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(baseURL + "/linkedin-save-2fa-code-to-db", requestOptions)
    .then(response => response.json())
    .then(result => {
      setVerifyMessage(result);
      console.log(result);
    })
    .catch(error => console.log('error', error));
  }

  const getAllUsers = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/admin/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllUsers(result);
      })
      .catch((error) => console.log("error", error));
  };

  const deleteUser = (userId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/admin/user/" + userId, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setDeleteUserMessage(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const getUserInfo = async (userId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    var userInfo = [];
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(baseURL + "/admin/user/" + userId, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        userInfo = result;
      })
      .catch((error) => console.log("error", error));
    return userInfo;
  };

  const getCampaignInfo = async (campaignnable_id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    var userInfo = [];
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      baseURL + "/admin/campaign/" + campaignnable_id,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        userInfo = result;
      })
      .catch((error) => console.log("error", error));
    return userInfo;
  };

  const getLinkedlnIndustries = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(baseURL + "/get-linkedin-industries", requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        var lod = Array();
        if(typeof result.data !== "undefined"){
          for(var i=0; i< result.data.length; i++){
            if(typeof result.data[i].Description !== "undefined"){
              var ee = {};
              ee.value = result.data[i].Description;
              ee.label = result.data[i].Description;
              lod.push(ee);
            }
          }
          setLinkedlnIndustries(lod);
        }
        
        console.log(lod)
      })
      .catch(error => console.log('error', error));

  }

  const getLinkedlnUser = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/linkedin-users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLinkedlnUsers(result);
      })
      .catch((error) => console.log("error", error));
  };

  const assignUserToCampaign = (linkedIn_id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      linkedin_id: linkedIn_id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      baseURL + "/campaign/assign/linkedin-user/" + campaignId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(linkedIn_id);
        console.log(result);
        setAssignUserMessage(result);
        // getLinkedlnUser();
      })
      .catch((error) => console.log("error", error));
  };

  const resetPassword = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer null");
    var raw = JSON.stringify({
      email: resetPass,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
      body: raw,
    };

    fetch(baseURL + "/reset-password-request", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (
          result.message ===
          "Check your inbox, we have sent a link to reset email."
        ) {
          setShowForgotPasswordSuccess(result);
        } else {
          enqueueSnackbar("User does not exist", { variant: "error" });
        }
      })
      .catch((error) => console.log("error", error));
  };

  const changePassword = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var raw = JSON.stringify({
      email: changePass.email,
      password: changePass.password,
      password_confirmation: changePass.password_confirmation,
      passwordToken: changePass.passwordToken,
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
      body: raw,
    };

    fetch(
      baseURL + "/change-password?token=" + passwordToken,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        enqueueSnackbar("Password Reset Successfull", { variant: "success" });
        history.push("/login");
      })
      .catch((error) => console.log("error", error));
  };

  const changeUserDetails = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: changeUserDets.name,
      phone: changeUserDets.phone,
      company: changeUserDets.company,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(baseURL + "/user/update-profile", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const changeUserPassword = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      current_pwd: changeUserPass.current_pwd,
      new_pwd: changeUserPass.new_pwd,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(baseURL + "/user/update-password", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const userConnections = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/connections?page=1", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllConnections(result);
      })
      .catch((error) => console.log("error", error));
  };

  const uploadImage = (file) => {
    console.log(file);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    var formdata = new FormData();
    formdata.append("avatar", file, file.name);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(baseURL + "/user/upload-image", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        getUserDetails();
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const campaignManagement = (campaignPage) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      baseURL + "/admin/campaigns?page=" + campaignPage,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setManagedCampaigns(result);
      })
      .catch((error) => console.log("error", error));
  };

  const createRoles = (newRole, newRoleName) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: newRoleName,
      permission: newRole,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(baseURL + "/admin/role/add/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const deleteRole = (roleId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/admin/role/delete/" + roleId, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const updateRole = (changeRole, roleId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: changeRole.name,
      permission: [1, 2, 3, 4],
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(baseURL + "/admin/role/update/" + roleId, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const getPermission = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/admin/permissions", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllPermissions(result);
        // console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const rolesManagement = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/admin/roles", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setManagedRoles(result);
        // console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const purchaseCredits = (
    amount,
    stripe_token,
    exp_month,
    exp_year,
    card_no,
    cvc
  ) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      amount: amount,
      stripeToken: stripe_token,
      card: {
        exp_month: exp_month,
        exp_year: exp_year,
        number: card_no,
        cvc: cvc,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(baseURL + "/purchase-credits", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPaymentMessage(result);
        getUserDetails();
      })
      .catch((error) => console.log("error", error));
  };

  const creditTransaction = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/transactions", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTransaction(result);
      })
      .catch((error) => console.log("error", error));
  };

  const creditUtilization = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/campaign-transactions", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUtilization(result);
      })
      .catch((error) => console.log("error", error));
  };

  const userNotifications = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/notifications", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // setUserAlert(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const adminNotifications = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      baseURL + "/admin/notifications",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setAdminAlert(result);
        // console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const markRead = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      baseURL + "/admin/notification/mark-as-read",
      requestOptions
    )
      .then((response) => response.textz())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const logout = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/logout", requestOptions)
      .then((response) => response.text())
      .then(() => {
        setLoggedIn(false);
        setUserDetails({});
        setToken("");
        localStorage.setItem("token", "");
        enqueueSnackbar("Logged out Successfully", { variant: "success" });
        // alert("logged out");
        // redirect to login
        history.push("/login");
      })
      .catch((error) => console.log("error", error));
  };

  const adminLogout = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(baseURL + "/logout", requestOptions)
      .then((response) => response.json())
      .then(() => {
        setLoggedIn(false);
        setUserDetails({});
        setToken("");
        localStorage.setItem("token", "");
        enqueueSnackbar("Logged out Successfully", { variant: "success" });
        // alert("logged out");
        // redirect to login
        history.push("/admin");
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <providerFunctions.Provider
      value={{
        showSideBar,
        setShowSideBar,
        showModal,
        passwordToken,
        setPasswordToken,
        setShowModal,
        modalPage,
        setModalPage,
        userId,
        setUserId,
        login,
        adminlogin,
        userDetails,
        setUserDetails,
        metrics,
        banUser,
        activateUser,
        allUsers,
        assignUserMessage,
        getAllUsers,
        logout,
        adminLogout,
        loggedIn,
        getMetrics,
        campaign,
        userCampaign,
        registerUser,
        signUpData,
        setSignUpData,
        resetPassword,
        resetPass,
        creditMessage,
        credit,
        setCredit,
        setResetPass,
        showForgotPasswordSuccess,
        setShowForgotPasswordSuccess,
        changePass,
        setChangePass,
        changePassword,
        changeUserPass,
        setChangeUserPass,
        changeUserPassword,
        changeUserDetails,
        changeUserDets,
        setChangeUserDets,
        connectionMetrics,
        connectMetrics,
        setConnectMetrics,
        userConnections,
        allConnections,
        setAllConnections,
        creditTransaction,
        transaction,
        setTransaction,
        uploadImage,
        imageFile,
        setImageFile,
        campaignManagement,
        managedCampaigns,
        setManagedCampaigns,
        approveCampaign,
        campaignId,
        setCampaignId,
        declineCampaign,
        getUserInfo,
        allUserInfo,
        setAllUserInfo,
        cancelCampaign,
        viewCancelCampaign,
        assignCredit,
        creditStatus,
        assignUserToCampaign,
        getUniqueCampaign,
        getLinkedlnUser,
        linkedlnUsers,
        setLinkedlnUsers,
        cancellationMsg,
        setCancellationMsg,
        cancellationStatus,
        setCancellationStatus,
        rolesManagement,
        managedRoles,
        setManagedRoles,
        createUser,
        deleteUser,
        createRoles,
        getPermission,
        allPermissions,
        setAllPermissions,
        deleteUserMessage,
        setDeleteUserMessage,
        deleteRole,
        roleId,
        setRoleId,
        updateRole,
        markRead,
        purchaseCredits,
        creditUtilization,
        buyCreditMessage,
        setBuyCreditMessage,
        setUtilization,
        utilization,
        connectionGraph,
        paymentStatus,
        setPaymentStatus,
        paymentMessage,
        setPaymentMessage,
        connectGraph,
        setConnectGraph,
        viewSingleCampaignRequest,
        requestId,
        setRequestId,
        getGraph,
        metricsGraph,
        setMetricsGraph,
        cancelRequest,
        setCancelRequests,
        singleCancelRequest,
        setSingleCancelRequest,
        userNotifications,
        userAlert,
        setUserAlert,
        adminNotifications,
        adminAlert,
        setAdminAlert,
        creditGraph,
        creditUtilized,
        setCreditUtilized,
        createListPage,
        setCreateListPage,
        defaultSteps,
        setDefaultSteps,
        rerunCampaign,
        rerunMessage,
        setRerunMessage,
        confirmCampaignSubmission,
        campaignPage,
        setCampaignPage,
        userCampaignPage,
        setUserCampaignPage,
        selectedSteps,
        setSelectedSteps,
        steps,
        resetStep,
        dataExtract,
        extractResult,
        setExtractResult,
        engageCampaign,
        getCampaignInfo,
        sendRobotData,
        getRobotMessage,
        robotMessages,
        setRobotMessages,
        verifyMessage,
        setVerifyMessage,
        engageDetails,
        setEngageDetails,
        createEngageTemplate,
        sendTwoFaCode,
        engageResult,
        setEngageResult,
        templateDetails,
        setTemplateDetails,
        signUpMessage,
        setSignUpMessage,
        verifyEmail,
        getLinkedlnIndustries,
        linkedlnIndustries,
        setLinkedlnIndustries,
        contactSearchResult,
        setContactSearchResult,
        contactSearch,
        getEngageTemplate,
        engageTemplate,
        setEngageTemplate,
        addEmailSearch,
        setAddEmailSearch,
      }}
    >
      {props.children}
    </providerFunctions.Provider>
  );
};

export default FunctionsProvider;
export const providerFunctions = React.createContext();
