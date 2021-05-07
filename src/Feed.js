import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
/* import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"; */
import SendIcon from "@material-ui/icons/Send";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    {
      input &&
        db.collection("posts").add({
          name: user.displayName,
          description: user.email,
          message: input,
          photoUrl: user.photoUrl || "",
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            {/* <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            /> */}
            <textarea
              className="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              cols="1"
              rows="1"
            ></textarea>
          </form>
        </div>
        <div className="feed-inputOption">
          {/* <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="#7E7A33E"
          />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          /> */}
          <button onClick={sendPost} type="submit">
            <SendIcon />
          </button>
        </div>
      </div>

      {/* Posts */}

      <FlipMove>
        {posts.map(
          ({
            id,
            data: { name, description, message, photoUrl, timestamp },
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              timestamp={timestamp}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
