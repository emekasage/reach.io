import React, {useContext} from 'react'
import {providerFunctions} from "../provider/FunctionsProvider"
import Adebola from "./Adebola";
import CampaignModal from './CampaignModal';

export default function Modal() {
    const {
        
        setShowModal,
        modalPage,
        userId,
    } = useContext(providerFunctions)
      
    return (
        <div className="modalOverlay">

            <div className="modalClose" onClick={()=>setShowModal(false)}>
                <i class="bi bi-x-square"></i>
            </div>
            
            <div className="modalBody">
                
                {modalPage === "campaign-modal" &&
                    <CampaignModal></CampaignModal>
                }
            
                {modalPage === "adebola" &&
                    <Adebola userId={userId}></Adebola>
                }
            </div>
        </div>
    )
}
