import React, { useContext } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import CreditModal from "./CreditModal";
import CampaignModal from "./CampaignModal";
import UserRegisterModal from "./UserRegisterModal";
import AssignCreditsModal from "./AssignCreditsModal";
import AssignUserModal from "./AssignUserModal";
import RequestCancelModal from "./RequestCancelModal";
import ViewCancelRequestModal from "./ViewCancelRequestModal";
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
          {modalPage === "assign_credit" && (
            <AssignCreditsModal
              setShowModal={setShowModal}
              userId={userId}
            ></AssignCreditsModal>
          )}
          {modalPage === "assign_user" && (
            <AssignUserModal
              setShowModal={setShowModal}
              userId={userId}
            ></AssignUserModal>
          )}
          {modalPage === "cancel_campaign" && (
            <RequestCancelModal
              setShowModal={setShowModal}
              userId={userId}
            ></RequestCancelModal>
          )}
          {modalPage === "view_request" && (
            <ViewCancelRequestModal
              setShowModal={setShowModal}
              userId={userId}
            ></ViewCancelRequestModal>
          )}
        </ClickOutside>
      </div>
    </div>
  );
}
