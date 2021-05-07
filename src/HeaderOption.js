import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption-icon" />}
      {/* {avatar && (
        <Avatar className="headerOption-icon">{user?.email[0]}</Avatar>
      )} */}
      {avatar && <Avatar className="headerOption_icon" src={user?.photoUrl} />}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
