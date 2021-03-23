import React, {useState} from 'react'


const FunctionsProvider = (props) =>{
    const [showSideBar, setShowSideBar] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalPage, setModalPage] = useState("");
    const [userId, setUserId] = useState("");
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
            setUserId
        }}   
        >
            {props.children}
        </providerFunctions.Provider>
    )
}

export default FunctionsProvider;
export const providerFunctions = React.createContext()