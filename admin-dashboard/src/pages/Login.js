import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <div className="login-page">
            <div className="row">
                <div className="col-md-12 mt-3">
                    <span className="reachio-logo">
                        <img src="assets/img/Group-73.png" alt="" />
                    </span>
                    <div className="page-text mt-5">
                        <p>Login to access dashboard</p>
                    </div>
                    <div className="rectangle-5 mt-3">
                        <form>
                        <div className="mb-3">
                            <input type="email" className="form-control input-bx" id="exampleInputEmail1" placeholder="Email"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" class="form-control input-bx" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div class="d-flex justify-content-between">
                            <Link to="/resetpassword" className="reset-pass">
                                <span>Forgot Password?</span>
                            </Link>
                            <span> 
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1" style={{paddingLeft: "5px"}}>Remember me</label>
                            </span>
                        </div>
                        <div className="mt-4">
                            <button class="submit-btn" type="button">Login to dashboard</button>
                        </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}
