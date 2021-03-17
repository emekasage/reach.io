import React, {useEffect, useState, useContext} from 'react'
import {providerFunctions} from "../provider/FunctionsProvider"


export default function Header() {
const {
	showSideBar,
    setShowSideBar
} = useContext(providerFunctions)
    return (
        <div className="header" >
            <nav class="navbar navbar-expand navbar-light navbar-bg">
  				<div class="container-fluid">
    				<a class="navbar-brand" href="#">
      					<img src="assets/img/Group-73.png" alt="" width="80" height="31" class="d-inline-block align-top"/>
    				</a>

					<div className="navbar-btn" onClick={()=>{
						setShowSideBar(!showSideBar);
					}}>
						<a class="sidebar-toggle d-flex collapsed">
							<img src="assets/img/Group-76.svg" alt="" width="36" height="14"class="btn-toggle-fullwidth"/>
						</a>
					</div>

					<div class="navbar-collapse collapse">

						<form class="d-none d-sm-inline-block">
							<div class="input-group input-group-navbar">
								<img src="assets/img/search-1.svg" alt="" width="30" height="30" class="form-icon" />
								<input type="text" class="form-control header-form" placeholder="Search anything" aria-label="Search"/>
							</div>
						</form>

						<div class="dropdown">
							<a class="nav-icon dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
								<img src="assets/img/Group-61.svg" alt="" width="20" height="40" class="notifik" />
							</a>
							<ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
								<li><button class="dropdown-item" type="button">Action</button></li>
								<li><button class="dropdown-item" type="button">Another action</button></li>
								<li><button class="dropdown-item" type="button">Something else here</button></li>
							</ul>
						</div>
						
					
						<div class="nav-item dropdown">

							<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
									<img src="assets/img/Ellipse-16.png" class="avatar img-fluid rounded mr-1" alt="Charles Hall" />
									<span class="text-dark"> Hafis Raji</span>
							</a>
							<ul class="dropdown-menu dropdown-menu-left">
								<li><button class="dropdown-item" type="button">Action</button></li>
								<li><button class="dropdown-item" type="button">Another action</button></li>
								<li><button class="dropdown-item" type="button">Something else here</button></li>
							</ul>
						</div>
				</div>

					</div>

				  
			</nav>
        </div>
    )
}
