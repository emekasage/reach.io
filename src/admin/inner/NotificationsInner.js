import React, { useContext, useState, useEffect } from "react";
import { providerFunctions } from "../../provider/FunctionsProvider";
import moment from "moment";
// import { useSnackbar } from "notistack";

export default function NotificationsInner() {
  // const { enqueueSnackbar } = useSnackbar();
  const { showSideBar, adminNotifications, adminAlert } =
    useContext(providerFunctions);

  const [notify, setNotify] = useState([]);

  useEffect(() => {
    adminNotifications();
  }, []);

  useEffect(() => {
    if (typeof adminAlert.notifications !== "undefined") {
      setNotify(adminAlert.notifications);
      // console.log("test");
    }
  }, [adminAlert]);

  return (
    <div className={`pagebody ${showSideBar ? "" : "expand"}`}>
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-between user-val">
          <div className="heading-col">
            <h5>
              <strong>Notifications</strong>
            </h5>
          </div>
          <button className="notify-btn not">Mark all as read</button>
        </div>

        <div className="row pro-tab">
          <div className="col-sm-12">
            <div className="card sett-pg">
              <div className="card-body lg-10">
                <>
                  {notify.length !== 0 &&
                    notify.map((thisAdminAlertData, index) => {
                      return (
                        <div
                          key={index}
                          className="d-flex justify-content-between notify-area"
                        >
                          <div className="notify-prt">
                            <span className="bi bi-dot"></span>
                            <span>{thisAdminAlertData.data.message}</span>
                          </div>
                          <div className="notify-prt">
                            <span>
                              {moment(thisAdminAlertData.created_at).format(
                                "LLL"
                              )}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
