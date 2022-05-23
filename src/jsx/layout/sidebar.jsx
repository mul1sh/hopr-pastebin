import React from 'react';
import { Link } from 'react-router-dom';



function Sidebar() {

    return (
        <>
            <div className="sidebar">
                <Link class="brand-logo" to={"/"}>
                    <img src={require('../../images/logo.png')} alt="" />
                    <span>Treemium </span>
                </Link>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to={"/"}>
                                <span><i class="mdi mdi-view-dashboard"></i></span>
                                <span class="nav-text">Home</span>
                            </Link>
                        </li>
                        <li><Link to={"./buy-sell"}>
                            <span><i class="mdi mdi-repeat"></i></span>
                            <span class="nav-text">Exchange</span>
                        </Link>
                        </li>
                        <li><Link to={"./accounts"}>
                            <span><i class="mdi mdi-account"></i></span>
                            <span class="nav-text">Account</span>
                        </Link>
                        </li>
                        <li><Link to={"./settings"}>
                            <span><i class="mdi mdi-settings"></i></span>
                            <span class="nav-text">Setting</span>
                        </Link>
                        </li>
                    </ul>
                </div>
                <div class="sidebar-footer">
                    <div class="social">
                        <Link to={"#"}><i class="fa fa-youtube-play"></i></Link>
                        <Link to={"#"}><i class="fa fa-instagram"></i></Link>
                        <Link to={"#"}><i class="fa fa-twitter"></i></Link>
                        <Link to={"#"}><i class="fa fa-facebook"></i></Link>
                    </div>
                    <div class="copy_right">
                        © {new Date().getFullYear()} Quixlab
                </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;