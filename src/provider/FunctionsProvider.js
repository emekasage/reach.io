import React, {useEffect, useState} from 'react'
import { useSnackbar } from 'notistack'


const FunctionsProvider = (props) =>{
    const [showSideBar, setShowSideBar] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalPage, setModalPage] = useState("");
    const {enqueueSnackbar} = useSnackbar();
    const [userId, setUserId] = useState("");
    const [token, setToken] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [allUsers, setAllUsers] = useState("");
    const [userDetails, setUserDetails] = useState({});  
    const [metrics, setMetrics] = useState({});
    const [campaign, setCampaign] = useState({});

    useEffect(()=>{
        if(typeof(localStorage.getItem("token")) !== "undefined" && typeof(localStorage.getItem("token")) !== null){
            if(localStorage.getItem("token") !== ""){
                setToken(localStorage.getItem("token"));
            }
        }
    },[])
    useEffect(()=>{
        if(token !== "") {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer "+token);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            fetch("http://bamyxitsolutions.com/api/user", requestOptions)
            .then(response => response.json())
            .then(result => {
                setUserDetails(result);
                setLoggedIn(true);
                // alert("User Logged In");
                enqueueSnackbar("Log in Successfull", 
                {variant: "success"});

            })
            .catch(error => console.log('error', error));
        }
    },[token]);



    const login = (email, password)=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
       
        var raw = JSON.stringify({"email":email,"password":password});
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://bamyxitsolutions.com/api/login", requestOptions)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(result => {
            if(result.success === true){
                console.log(result.token)
                setToken(result.token);
                localStorage.setItem("token", result.token);
                
            }else{
                setLoggedIn(false)
            }
        })
        .catch(error => console.log('error', error));
    }
    

    const adminlogin = (email, password)=>{
        

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
       
        var raw = JSON.stringify({"email":email,"password":password});
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        fetch("http://bamyxitsolutions.com/api/signin", requestOptions)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(result => {
            if(result.success === true){
                console.log(result.token)
                setToken(result.token);
                localStorage.setItem("token", result.token);
                
            }else{
                setLoggedIn(false)
            }
        })
        .catch(error => console.log('error', error));


    }


    const banUser = (userId) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+token);
        
        var formdata = new FormData();
        
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://bamyxitsolutions.com/api/admin/user/"+userId+"/ban", requestOptions)
          .then(response => response.text())
          .then(result => {
            getAllUsers()  
            console.log(result)
          })
          .catch(error => console.log('error', error));

    }

    const activateUser = (userId) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+token);
        
        var formdata = new FormData();
        
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://bamyxitsolutions.com/api/admin/user/"+userId+"/activate", requestOptions)
          .then(response => response.text())
          .then(result => {
              console.log(result);
              getAllUsers();
          })
          .catch(error => console.log('error', error));
        
    }

    const getMetrics = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+token);
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("http://bamyxitsolutions.com/api/admin/metrics", requestOptions)
          .then(response => response.json())
          .then(result => {
            setMetrics(result);
          })
          .catch(error => console.log('error', error));
        
    }

    const userCampaign = () => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://bamyxitsolutions.com/api/campaigns", requestOptions)
        .then(response => response.json())
        .then(result => {
            setCampaign(result);
        })
        .catch(error => console.log('error', error));

    }


    const getAllUsers = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://bamyxitsolutions.com/api/admin/users", requestOptions)
        .then(response => response.json())
        .then(result => {
            setAllUsers(result);
        })
        .catch(error => console.log('error', error));
        
    }
    
    const logout = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer "+token);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://bamyxitsolutions.com/api/logout", requestOptions)
        .then(response => response.text())
        .then(result => {
            setLoggedIn(false);
            setUserDetails({});
            setToken("");
            localStorage.setItem("token", "");
            enqueueSnackbar("Logged out Successfully", 
            {variant: "success"});
            // alert("logged out");
            // redirect to login
        })
        .catch(error => console.log('error', error));
    }
    return (
        <providerFunctions.Provider
        value={{
            showSideBar,
            setShowSideBar,
            showModal, 
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
            userCampaign

        }}   
        >
            {props.children}
        </providerFunctions.Provider>
    )
}

export default FunctionsProvider;
export const providerFunctions = React.createContext()