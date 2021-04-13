/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";

const FunctionsProvider = (props) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalPage, setModalPage] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [passwordToken, setPasswordToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [allUsers, setAllUsers] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [metrics, setMetrics] = useState({});
  const [connectMetrics, setConnectMetrics] = useState({});
  const [campaign, setCampaign] = useState({});
  const [allConnections, setAllConnections] = useState({});
  const [transaction, setTransaction] = useState({});
  const [signUpData, setSignUpData] = useState({});
  const [resetPass, setResetPass] = useState({});
  const [showForgotPasswordSuccess, setShowForgotPasswordSuccess] = useState(
    ""
  );
  const [changePass, setChangePass] = useState({});
  const [changeUserPass, setChangeUserPass] = useState({
    current_pwd: "",
    new_pwd: "",
  });
  const [changeUserDets, setChangeUserDets] = useState({});

  let history = useHistory();

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
          // alert("User Logged In");
          enqueueSnackbar("Log in Successfull", { variant: "success" });
        })
        .catch((error) => console.log("error", error));
    }
  }, [token]);

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
        //put snackbar here
        enqueueSnackbar("Sign Up Successfull", { variant: "success" });
        //redirect to login
        history.push("/login");
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
        console.log(result);
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
        getAllUsers,
        logout,
        loggedIn,
        getMetrics,
        campaign,
        userCampaign,
        registerUser,
        signUpData,
        setSignUpData,
        resetPassword,
        resetPass,
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
      }}
    >
      {props.children}
    </providerFunctions.Provider>
  );
};

export default FunctionsProvider;
export const providerFunctions = React.createContext();
