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
          placeholder="Full name (required if register)"
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
          placeholder="Description yourself, your past experiences and acquired skills(required if registering)"
          cols="30"
          rows="8"
        ></textarea>
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
      <div className="about-us">
        <h1>
          Are doing odd jobs <span>even</span> worth it?
          <br /> <span>Definity!</span>
        </h1>
        <p>
          Odd jobs are jobs at the end of the day. One should not be discouraged
          to avoid jobs like delivery-driver, tutoring, call-center jobs just
          because a particular group in the Bangladeshi society thinks that
          those jobs are inferior. People should be encouraged to do whatever
          job they want in order to make a living. <br /> <br />
          Most job websites do not have significant postings of such jobs. This
          is a problem. But, dont worry!
          <span className="red"> Even</span>
          <span className="green">Jobs</span> is the platform for you where you
          can post about: <br /> <br />
          1. The job that you are looking for. <br />
          2. Find employees for a job that you have been looking for in various
          other websites. <br /> <br />
          The job/employee search is made easier for convenience so that a
          larger community can benefit from it. Just look through the posts and
          email the individual/company to get in touch for further procedures.
          Lets get <a href="#top">started</a>! <br /> <br />
          <span className="ending-points">
            ** Please make sure the posts are clean and are related solely to
            the purpose of the website. <br />
            ** The website is still under construction so some features are
            dummy but will soon be made live. <br />
            ** Please kindly avoid Safari web browser when posting on the forum.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
