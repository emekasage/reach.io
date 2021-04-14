import React, { useContext, useRef } from "react";
import { providerFunctions } from "../../provider/FunctionsProvider";

export default function SettingsInner() {
  const { showSideBar } = useContext(providerFunctions);

  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
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
                <div className="pro-img">
                  <input
                    type="file"
                    gn
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={imageUploader}
                    style={{
                      display: "none",
                    }}
                  />
                  <img
                    src="../../assets/img/profile-avatar.png"
                    alt="Avatar"
                    className="image"
                    ref={uploadedImage}
                  />
                  <div
                    className="overlay"
                    onClick={() => imageUploader.current.click()}
                  >
                    <a className="pro-img-icon" title="User Profile">
                      <i className="bi bi-camera"></i>
                    </a>
                  </div>
                </div>

                <div className="col-sm-6 pro-edit">
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control input-bx"
                        id="exampleInputEmail1"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control input-bx"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control input-bx"
                        id="exampleInputPassword1"
                        placeholder="Old Password"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control input-bx"
                        id="exampleInputPassword1"
                        placeholder="New Password"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control input-bx"
                        id="exampleInputPassword1"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="mt-4">
                      <button className="submit-btn" type="button">
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
