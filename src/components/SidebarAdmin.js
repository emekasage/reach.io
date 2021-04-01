import React,{useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {providerFunctions} from "../provider/FunctionsProvider"


export default function Sidebar() {
    const {
        logout,
        showSideBar
    } = useContext(providerFunctions)
    return (
        <div id="sidebar-nav" className={`sidebar ${showSideBar ? "":"reduce"}`}>
            <div className="nav-options">

                <nav>
					<ul className="navigate">
						<li>
                            <NavLink to="/admin/dashboard" className="nav" activeClassName="nav--active">
                                <i class="bi bi-house-door menu-img"></i>
                                <span className="menu-text">Overview</span>
                            </NavLink>
                        </li>
						<li>
                            <NavLink to="/admin/clients" className="nav" activeClassName="nav--active">
                                <i class="bi bi-people menu-img"></i>
                                <span className="menu-text">Users</span>
                            </NavLink>
                        </li>
						
						<li>
                            <NavLink to="/admin/settings" className="nav" activeClassName="nav--active">
                                <i class="bi bi-gear menu-img"></i>
                                <span className="menu-text">Settings</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/campaign" className="nav" activeClassName="nav--active">
                                <i class="bi bi-megaphone"></i>
                                <span className="menu-text">Campaign</span>
                            </NavLink>
                        </li>
					</ul>
                    <ul className="navigate-log">
                        <li>
                           <div className="nav2" onClick={()=>logout()}>
                                <i class="bi bi-box-arrow-right menu-img-2"></i>
                                <span className="menu-text-2">Log Out</span>
                            </div>
                        </li>
                    </ul>
				</nav>
            </div>
        </div>
    )
}
