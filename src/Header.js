import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header-left">
        <h2>
          <span>Even</span>Jobs
        </h2>
        {/* <div className="header-search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div> */}{" "}
        {/* Will add this functionality later */}
      </div>

      <div className="header-right">
        {/* <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" /> */}
        <HeaderOption
          Icon={ExitToAppSharpIcon}
          title="Sign Out"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
