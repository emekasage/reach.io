import React, {useState, useEffect} from 'react'


const FunctionsProvider = (props) =>{
    const [showSideBar, setShowSideBar] = useState(true);

    return (
        <providerFunctions.Provider
        value={{
            showSideBar,
            setShowSideBar
        }}   
        >
            {props.children}
        </providerFunctions.Provider>
    )
}

export default FunctionsProvider;
export const providerFunctions = React.createContext()