import React, { useContext } from "react";
import { providerFunctions } from "../provider/FunctionsProvider";
import CreditModal from "./CreditModal";
import CampaignModal from "./CampaignModal";
import UserRegisterModal from "./UserRegisterModal";
import AssignCreditsModal from "./AssignCreditsModal";
import AssignUserModal from "./AssignUserModal";
import RequestCancelModal from "./RequestCancelModal";
import ViewCancelRequestModal from "./ViewCancelRequestModal";
import CreateUserModal from "./CreateUserModal";
import DeleteUserModal from "./DeleteUserModal";
import CreateRolesModal from "./CreateRolesModal";
import DeleteRoleModal from "./DeleteRoleModal";
import UpdateRoleModal from "./UpdateRoleModal";
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

          {modalPage === "create_user" && (
            <CreateUserModal
              setShowModal={setShowModal}
              userId={userId}
            ></CreateUserModal>
          )}
          {modalPage === "create_role" && (
            <CreateRolesModal
              setShowModal={setShowModal}
              userId={userId}
            ></CreateRolesModal>
          )}
          {modalPage === "delete_user" && (
            <DeleteUserModal
              setShowModal={setShowModal}
              userId={userId}
            ></DeleteUserModal>
          )}
          {modalPage === "delete_role" && (
            <DeleteRoleModal
              setShowModal={setShowModal}
              userId={userId}
            ></DeleteRoleModal>
          )}
          {modalPage === "update_role" && (
            <UpdateRoleModal
              setShowModal={setShowModal}
              userId={userId}
            ></UpdateRoleModal>
          )}
        </ClickOutside>
      </div>
    </div>
  );
}
