import React from "react";
import "./Navbar.css"


const Navbar = () => {
    return(
        <header class="header">
            <a href="/" class="logo">MENU</a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
            <ul class="menu">
                <li><a href="#dont">Don't</a></li>
                <li><a href="#forget">Forget</a></li>
                <li><a href="#subscribe">To Subscribe</a></li>
                <li><a href="#comment">& Comment</a></li>
            </ul>
        </header>
    );
}

export default Navbar;