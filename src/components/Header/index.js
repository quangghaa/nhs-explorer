import SearchTool from "../SearchTool";
import React from "react";
import logo from "../../static/img/logo-v2.png";
import Navigation from "../Navigation";
import '../../static/css/header.css';

const Header = () => {
    return (
        <>
            <div className="container">
                <div className="myheader">
                    <div>
                        <img src={logo} alt="LOGO" className="logo-sz"/>
                    </div>
                    <div>
                        <SearchTool />
                    </div>
                </div>

                <div className="subheader">
                    <div className="tab">ETH</div>
                    <div><Navigation /></div>
                </div>
            </div>
        </>
    )
}

export default Header;