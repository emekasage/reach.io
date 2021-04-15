import React, { useContext, useRef, useState } from "react";
import { providerFunctions } from "../../provider/FunctionsProvider";
import { useSnackbar } from "notistack";

export default function SettingsInner() {
  const { enqueueSnackbar } = useSnackbar();
  const {
    showSideBar,
    changeUserPass,
    setChangeUserPass,
    changeUserPassword,
    changeUserDets,
    setChangeUserDets,
    changeUserDetails,
    userDetails,
    setImageFile,
    uploadImage,
  } = useContext(providerFunctions);

  const handleUserPasswordChange = (value, key) => {
    var sd = { ...changeUserPass };
    sd[key] = value;
    setChangeUserPass(sd);
  };
  const handleUserDetailsChange = (value, key) => {
    var sd = { ...changeUserDets };
    sd[key] = value;
    setChangeUserDets(sd);
  };
  const [confirm_pwd, setConfirm_pwd] = useState("");
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    console.log(file.name);
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    console.log(file.name);
    setImageFile("");
    uploadImage(file);
  };

  return (
    <div className={`pagebody ${showSideBar ? "" : "expand"}`}>
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-between user-val">
          <div className="heading-col">
            <h5>
              <strong>Settings</strong>
            </h5>
          </div>
        </div>

        <div className="row pro-tab">
          <div className="col-sm-12">
            <div className="card sett-pg">
              <div className="card-header pro-head">
                <h5>Profile</h5>
              </div>
              <div className="card-body lg-10">
                {/* User Profile Image */}
                <div className="pro-img">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={imageUploader}
                    style={{
                      display: "none",
                    }}
                  />
                  {userDetails.user !== "undefined" && (
                    <span>
                      <img
                        src={
                          userDetails.user.avatar !== "undefined"
                            ? userDetails.user.avatar
                            : "../../assets/img/profile-avatar.png"
                        }
                        style={{
                          background: "url(" + userDetails.user.avatar + " ) ",
                          width: "6em",
                          height: "6em",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderRadius: "50%",
                          margin: "0 auto",
                        }}
                        className="image"
                        ref={uploadedImage}
                      ></img>
                      {/* <img
                        src={
                          userDetails.user.avatar !== "undefined"
                            ? userDetails.user.avatar
                            : "assets/img/profile-avatar.png"
                        }
                        alt="Avatar"
                        className="image"
                        ref={uploadedImage}
                      /> */}
                    </span>
                  )}
                  <div
                    className="overlay"
                    onClick={() => imageUploader.current.click()}
                  >
                    <a className="pro-img-icon" title="User Profile">
                      <i className="bi bi-camera"></i>
                    </a>
                  </div>
                </div>
                {/* End of User Profile Image */}

                <div className="col-sm-6 pro-edit">
                  <form className="pro-details">
                    <h6>Profile</h6>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control input-bx"
                        id="fullname"
                        name="name"
                        placeholder={userDetails.user.name}
                        onChange={(e) =>
                          handleUserDetailsChange(e.target.value, e.target.name)
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control input-bx"
                        id="phone-number"
                        name="phone"
                        placeholder={userDetails.user.phone}
                        onChange={(e) =>
                          handleUserDetailsChange(e.target.value, e.target.name)
                        }
                      />
                    </div>
                    <div className="mt-4">
                      <button
                        className="submit-btn"
                        type="button"
                        onClick={() => {
                          changeUserDetails();
                          enqueueSnackbar("Profile Settings Saved", {
                            variant: "success",
                          });
                        }}
                      >
                        Save Settings
                      </button>
                    </div>
                  </form>
                  <form className="pro-details mt-5">
                    <h6>Password</h6>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control input-bx"
                        id="exampleInputPassword1"
                        placeholder="Old Password"
                        name="current_pwd"
                        onChange={(e) =>
                          handleUserPasswordChange(
                            e.target.value,
                            e.target.name
                          )
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control input-bx"
                        id="exampleInputPassword1"
                        placeholder="New Password"
                        name="new_pwd"
                        onChange={(e) =>
                          handleUserPasswordChange(
                            e.target.value,
                            e.target.name
                          )
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control input-bx"
                        id="exampleInputPassword1"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirm_pwd(e.target.value)}
                      />
                    </div>
                    <div className="mt-4">
                      <button
                        className="submit-btn"
                        type="button"
                        onClick={() => {
                          if (confirm_pwd === changeUserPass.new_pwd) {
                            changeUserPassword();
                            enqueueSnackbar("Profile Settings Saved", {
                              variant: "success",
                            });
                          } else {
                            enqueueSnackbar("Password not equal", {
                              variant: "error",
                            });
                          }
                        }}
                      >
                        Save Settings
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
