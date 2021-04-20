import React, { useContext } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import CreditModal from "./CreditModal";
import CampaignModal from "./CampaignModal";
import UserRegisterModal from "./UserRegisterModal";
import ClickOutside from "react-click-outside";

export default function Modal() {
  const { setShowModal, modalPage, userId } = useContext(providerFunctions);

  return (
    <div className="modalOverlay">
      <div className="modalBody">
        <ClickOutside onClickOutside={() => setShowModal(false)}>
          {modalPage === "campaign-modal" && (
            <CampaignModal setShowModal={setShowModal}></CampaignModal>
          )}

          {modalPage === "credit-modal" && (
            <CreditModal userId={userId}></CreditModal>
          )}
          {modalPage === "user_registered" && (
            <UserRegisterModal
              setShowModal={setShowModal}
              userId={userId}
            ></UserRegisterModal>
          )}
        </ClickOutside>
      </div>
    </div>
  );
}
