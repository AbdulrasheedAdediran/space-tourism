import React from "react";
import "./Navbar.scss";
import confamLogo from "../../Assets/confam-logo.png";
import bell from "../../Assets/bell-icon.png";
import avatar from "../../Assets/avatar.png";
import arrowDown from "../../Assets/arrow-down.png";
const Navbar = () => {
  return (
    <nav>
      <div className="logo-and-brand">
        <div>
          <img src={confamLogo} alt={"Confirm Money Logo"} />
        </div>
        <p>Confirm Money</p>
      </div>
      <div className="user-profile">
        <div>
          <img src={bell} alt={"Notification Bell Icon"} />
        </div>
        <div className="user-avatar">
          <img src={avatar} alt={"User Avatar"} />
        </div>
        <div>
          <img src={arrowDown} alt={"Expand Profile Icon"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
