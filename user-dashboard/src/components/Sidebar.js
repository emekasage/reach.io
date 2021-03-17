import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {providerFunctions} from "../provider/FunctionsProvider"


export default function Sidebar() {
    const {
        showSideBar
    } = useContext(providerFunctions)
    return (
        <div id="sidebar-nav" className={`sidebar ${showSideBar ? "":"reduce"}`}>
            <div className="nav-options">

                <nav>
					<ul className="navigate">
						<li>
                            <Link to="/dashboard" className="nav">
                                <i class="bi bi-house-door menu-img"></i>
                                <span className="menu-text">Overview</span>
                            </Link>
                        </li>
						<li>
                            <Link to="/users" className="nav">
                                <i class="bi bi-people menu-img"></i>
                                <span className="menu-text">Connections</span>
                            </Link>
                        </li>
						{/* <li>
                            <Link to="/admin" className="nav">
                                <i className="bi bi-clipboard menu-img"></i>
                                <span className="menu-text">Admin</span>
                            </Link>
                        </li> */}
						<li>
                            <Link to="/settings" className="nav">
                                <i class="bi bi-gear menu-img"></i>
                                <span className="menu-text">Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/campaign" className="nav">
                                <i class="bi bi-megaphone"></i>
                                <span className="menu-text">Campaign</span>
                            </Link>
                        </li>
					</ul>
                    <ul className="navigate-log">
                        <li>
                            <Link to="/login" className="nav2">
                                <i class="bi bi-box-arrow-right menu-img-2"></i>
                                <span className="menu-text-2">Log Out</span>
                            </Link>
                        </li>
                    </ul>
				</nav>
            </div>
        </div>
    )
}
