import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className="sidebar-hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      {/* Top */}
      <div className="sidebar-top">
        <img src="https://wallpapercave.com/wp/wp2856609.jpg" alt="" />
        <Avatar
          className="sidebar-avatar"
          src="https://st.depositphotos.com/1052233/2815/v/600/depositphotos_28158459-stock-illustration-male-default-profile-picture.jpg"
        />
        <h2>A S M Taseen</h2>
        <h4>taseenasm@gmail.com</h4>
      </div>

      {/* Stats */}
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <ThumbUpIcon className="thumbs" />
          <p className="sidebar-statNumber">15</p>
        </div>
        <div className="sidebar-stat">
          <ThumbDownIcon className="thumbs" />
          <p className="sidebar-statNumber">7</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("python")}
        {recentItem("leadership")}
        {recentItem("javascript")}
      </div>
    </div>
  );
}

export default Sidebar;
