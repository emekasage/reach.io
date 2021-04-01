import React,{useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {providerFunctions} from "../provider/FunctionsProvider"


export default function Sidebar() {
    const {
        showSideBar, logout
    } = useContext(providerFunctions)
    return (
        <div id="sidebar-nav" className={`sidebar ${showSideBar ? "":"reduce"}`}>
            <div className="nav-options">

                <nav>
					<ul className="navigate">
						<li>
                            <NavLink to="/dashboard" className="nav" activeClassName="nav--active">
                                <i class="bi bi-house-door menu-img"></i>
                                <span className="menu-text">Overview</span>
                            </NavLink>
                        </li>
						<li>
                            <NavLink to="/users" className="nav" activeClassName="nav--active">
                                <i class="bi bi-people menu-img"></i>
                                <span className="menu-text">Connections</span>
                            </NavLink>
                        </li>
						<li>
                            <NavLink to="/settings" className="nav" activeClassName="nav--active">
                                <i class="bi bi-gear menu-img"></i>
                                <span className="menu-text">Settings</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/campaign" className="nav" activeClassName="nav--active">
                                <i class="bi bi-megaphone"></i>
                                <span className="menu-text">Campaign</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/buycredit" className="nav" activeClassName="nav--active">
                                <i class="bi bi-wallet2"></i>
                                <span className="menu-text">Credit</span>
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
