import React, {useContext, useState} from 'react'
import {providerFunctions} from "../provider/FunctionsProvider"

export default function SettingsInner() {
    const {
        showSideBar
    } = useContext(providerFunctions)
    return (
        <div className={`pagebody ${showSideBar ? "":"expand"}`}>
            <div className="container-fluid p-0">
                <div className="d-flex justify-content-between user-val">
                    <div className="heading-col">
                        <h5><strong>Settings</strong></h5>
                    </div>
                </div>

                <div className="row pro-tab">
                <div className="col-sm-12">
                    <div className="card sett-pg">
                        <div class="card-header pro-head">
                            <h5>Profile</h5>
                        </div>
                        <div class="card-body lg-10">
                        <div class="pro-img">
                            <img src="assets/img/profile-avatar.png" alt="Avatar" class="image"/>
                            <div class="overlay">
                                <a href="#" class="pro-img-icon" title="User Profile">
                                    <i class="bi bi-camera"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-6 pro-edit">

                            <form>
                            <div className="mb-3">
                                <input type="email" className="form-control input-bx" id="exampleInputEmail1" placeholder="Email"/>
                            </div>
                            <div className="mb-3">
                                <input type="password" class="form-control input-bx" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div className="mb-3">
                                <input type="password" class="form-control input-bx" id="exampleInputPassword1" placeholder="Old Password"/>
                            </div>
                            <div className="mb-3">
                                <input type="password" class="form-control input-bx" id="exampleInputPassword1" placeholder="New Password"/>
                            </div>
                            <div className="mb-3">
                                <input type="password" class="form-control input-bx" id="exampleInputPassword1" placeholder="Confirm Password"/>
                            </div>
                            <div className="mt-4">
                                <button class="submit-btn" type="button">Save Settings</button>
                            </div>
                            </form>
                        
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

  
