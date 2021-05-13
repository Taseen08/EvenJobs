import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <a name="top"></a>
      <h1>
        <span>Even</span>Jobs
      </h1>

      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if sign up)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <textarea
          className="description-box"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Description yourself, your past experiences and acquired skills(required if sign up)"
          cols="30"
          rows="8"
        ></textarea>
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
        <button type="submit" onClick={register}>
          Sign Up
        </button>
      </form>

      <div className="about-us">
        <h1>
          Are doing odd jobs <span>even</span> worth it?
          <br /> <span>Definitely!</span>
        </h1>
        <p>
          Odd jobs are jobs at the end of the day. One should not be discouraged
          to avoid jobs like delivery-driver, tutoring, call-center jobs just
          because a particular group in the <span className="red"> Bangla</span>
          <span className="green">deshi</span> society thinks that those jobs
          are inferior. People should be encouraged to do whatever job they want
          in order to make a living. <br /> <br />
          Most job websites do not have significant postings of such jobs. This
          is a problem. But, dont worry!
          <span className="red"> Even</span>
          <span className="green">Jobs</span> is the platform by a{" "}
          <span className="red"> Bangla</span>
          <span className="green">deshi </span>
          for various other <span className="red"> Bangla</span>
          <span className="green">deshis</span> where they can post about:{" "}
          <br /> <br />
          1. The job positions that they are looking for. <br />
          2. The employees they are looking for hiring. <br /> <br />
          The job/employee search is made easier for convenience so that a
          larger community can benefit from it. Just look through the posts and
          email the individual/company to get in touch for further procedures.
          Lets get <a href="#top">started</a>! <br /> <br />
          <span className="ending-points">
            ** Please make sure the posts are clean and are related solely to
            the purpose of the website.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
