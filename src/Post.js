import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Post = forwardRef(({ name, description, message, timestamp }, ref) => {
  return (
    <div ref={ref} className="post">
      {/* header */}
      <div className="post-header">
        <Avatar>{name[0]}</Avatar>
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{timestamp?.toDate().toUTCString()}</p>
        </div>
      </div>

      {/* body */}
      <div className="post-body">
        <p>{message}</p>
      </div>

      {/* buttons */}
      <div className="post-buttons">
        <button
          className="btn"
          type="button"
          onClick={(e) => {
            e.preventDefault();

            window.location.href = `mailto:${description}`;
          }}
        >
          <MailOutlineIcon />
        </button>
      </div>
    </div>
  );
});

export default Post;
