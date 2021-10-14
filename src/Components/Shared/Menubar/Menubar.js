import React from "react";
import "./Menubar.css";
import logo from "../../../images/Banner&Background/logo.png";

const Menubar = () => {
  return (
    <div className="menubar-container container-fluid">
    <div className="menubar">
    <div className="row">
        <div className=" col-md-2">
          {/* logo */}
          <div className="logo-image">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="col-md-10">
          {/* nav items */}
          <div className="menu-item ">
            <ul className="d-flex justify-content-end  nav-items">
                <li className="items"><a href="#">Home</a></li>
                <li className="items"><a href="#">Product</a></li>
                <li className="items"><a href="#">Contact</a></li>
                <li className="items"><a href="#">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
     
    
  );
};

export default Menubar;
