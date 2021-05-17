/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";

const FunctionsProvider = (props) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [credit, setCredit] = useState({ credit: 0, value: 0 });
  const [showModal, setShowModal] = useState(false);
  const [modalPage, setModalPage] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [userId, setUserId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [campaignId, setCampaignId] = useState(null);
  const [imageFile, setImageFile] = useState([]);
  const [token, setToken] = useState("");
  const [passwordToken, setPasswordToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [allUsers, setAllUsers] = useState("");
  const [linkedlnUsers, setLinkedlnUsers] = useState({});
  const [allUserInfo, setAllUserInfo] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [metrics, setMetrics] = useState({});
  const [connectMetrics, setConnectMetrics] = useState({});
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
  const [allPermissions, setAllPermissions] = useState({});
  const [showForgotPasswordSuccess, setShowForgotPasswordSuccess] = useState(
    ""
  );

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

  let history = useHistory();
  // useEffect(() => {
  //   if (creditMessage !== "") {
  //     setTimeout(function () {
  //       setCreditMessage("");
  //     }, 60000);
  //   }
  // }, [creditMessage]);
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

    fetch("https://reachio-api-v1.herokuapp.com/api/user", requestOptions)
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

    fetch("https://reachio-api-v1.herokuapp.com/api/login", requestOptions)
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
    fetch("https://reachio-api-v1.herokuapp.com/api/signin", requestOptions)
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

    fetch("https://reachio-api-v1.herokuapp.com/api/register", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        login(signUpData.email, signUpData.password);
        //put snackbar here
        enqueueSnackbar("Sign Up Successfull", { variant: "success" });
        setShowModal(true);
        setModalPage("user_registered");
        //redirect to loginset
      })
      .catch((error) => console.log("error", error));
  };

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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/user/" + userId + "/ban",
      requestOptions
    )
      .then((response) => response.text())
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
      "https://reachio-api-v1.herokuapp.com/api/admin/user/" +
        userId +
        "/activate",
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
      "https://reachio-api-v1.herokuapp.com/api/campaign/assign-credit/" +
        campaignId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
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
  const createCampaign = (campaignDetails) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var formdata = new FormData();
    formdata.append("campaign_name", campaignDetails.name);
    formdata.append("email", campaignDetails.email);
    formdata.append("company", campaignDetails.company);
    formdata.append("campaign_duration", campaignDetails.duration);
    formdata.append("campaign_options", campaignDetails.options);
    formdata.append("crm", campaignDetails.crm);
    formdata.append("others", campaignDetails.others);
    formdata.append("job_titles", campaignDetails.job_titles);
    formdata.append("skills_and_keywords", campaignDetails.skills_keywords);
    formdata.append("industry", campaignDetails.industry);
    formdata.append("location", campaignDetails.location);
    formdata.append(
      "send_connection_request_message",
      campaignDetails.send_connection_request
    );
    formdata.append("send_follow_up_message", campaignDetails.send_follow_up);
    formdata.append(
      "hiring_manager_connection_request_message",
      campaignDetails.hiring_manager_connection_request
    );
    formdata.append(
      "hiring_manager_follow_up_message",
      campaignDetails.hiring_manager_follow_up
    );
    formdata.append("open_to_opportunities", campaignDetails.opportunities);
    formdata.append(
      "duration_in_current_role",
      campaignDetails.duration_current_role
    );
    formdata.append("company_size", campaignDetails.company_size);
    formdata.append("sequence_step[0]", campaignDetails.sequence_step_0);
    formdata.append(
      "extract_data_after_person_connected",
      campaignDetails.extract_data_after_person_connected
    );
    formdata.append("sequence_step[1]", campaignDetails.sequence_step_1);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/campaign/create",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  /* End of Create Campain */

  const approveCampaign = (campaignId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/approve-campaign/" +
        campaignId,
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
      "https://reachio-api-v1.herokuapp.com/api/admin/cancel-campaign/" +
        campaignId,
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/user/create",
      requestOptions
    )
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/metrics",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setMetrics(result);
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/connections/metrics",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setConnectMetrics(result);
      })
      .catch((error) => console.log("error", error));
  };

  const userCampaign = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://reachio-api-v1.herokuapp.com/api/campaigns", requestOptions)
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/campaign/" + campaign_id,
      requestOptions
    )
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/campaign/cancel",
      requestOptions
    )
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/request/camp",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const getAllUsers = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/users",
      requestOptions
    )
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/user/" + userId,
      requestOptions
    )
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

    await fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/user/" + userId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        userInfo = result;
      })
      .catch((error) => console.log("error", error));
    return userInfo;
  };

  const getLinkedlnUser = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/campaigns/linkedin-users",
      requestOptions
    )
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
      "https://reachio-api-v1.herokuapp.com/api/campaign/assign/linkedin-user/" +
        campaignId,
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/reset-password-request",
      requestOptions
    )
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
      "https://reachio-api-v1.herokuapp.com/api/change-password?token=" +
        passwordToken,
      requestOptions
    )
      .then((response) => response.text())
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
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/user/update-profile",
      requestOptions
    )
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/user/update-password",
      requestOptions
    )
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/connections?page=1",
      requestOptions
    )
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/user/upload-image",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const campaignManagement = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/campaigns",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setManagedCampaigns(result);
        console.log(result);
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/role/add/",
      requestOptions
    )
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/role/delete/" + roleId,
      requestOptions
    )
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/role/update/" + roleId,
      requestOptions
    )
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/permissions",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setAllPermissions(result);
        console.log(result);
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/admin/roles",
      requestOptions
    )
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/purchase-credits",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        getUserDetails();
        console.log(result);
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/transactions",
      requestOptions
    )
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

    fetch(
      "https://reachio-api-v1.herokuapp.com/api/campaign-transactions",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setUtilization(result);
        console.log(result);
      })
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

    fetch("https://reachio-api-v1.herokuapp.com/api/logout", requestOptions)
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

    fetch("https://reachio-api-v1.herokuapp.com/api/logout", requestOptions)
      .then((response) => response.text())
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
        createCampaign,
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
        purchaseCredits,
        creditUtilization,
        buyCreditMessage,
        setBuyCreditMessage,
        setUtilization,
        utilization,
      }}
    >
      {props.children}
    </providerFunctions.Provider>
  );
};

export default FunctionsProvider;
export const providerFunctions = React.createContext();
