import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic, link) => (
    <div
      className="sidebar-recentItem"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `${link}`;
      }}
    >
      <div className="bullet">
        <FiberManualRecordRoundedIcon />
      </div>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      {/* Top */}
      <div className="sidebar-top">
        <img
          src="https://images.unsplash.com/photo-1550301003-8cda174f59de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <Avatar
          className="sidebar_avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8whvraQ8GE5WRpAHd-7-v2m-rccRLF8BMPNG92HhmHB1T0yxxa4fPEPDvfXtYfew7FBE&usqp=CAU"
        ></Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.photoUrl}</h4>
      </div>

      {/* Bottom */}
      <div className="sidebar-bottom">
        <p>"Odd jobs are jobs!"</p>
        {recentItem(
          "Benefits of doing odd jobs",
          "https://www.phoenixvillenews.com/announcements/advantages-to-picking-up-odd-jobs-and-an-easy-way-to-find-extra-cash/article_845436af-4ad3-5c41-a3a3-419917b25767.html#:~:text=Odd%20jobs%20serve%20many%20purposes,unexpected%20cash%20in%20the%20pocket."
        )}
        {recentItem(
          "Odd jobs should be encouraged",
          "https://aeon.co/ideas/part-time-work-is-humane-and-should-be-respected-and-encouraged"
        )}
        {recentItem(
          "Pros and Cons of working part-time as a teenager",
          "https://www.verywellfamily.com/the-pros-and-cons-of-afterschool-jobs-for-teens-2610471"
        )}
      </div>
    </div>
  );
}

export default Sidebar;
