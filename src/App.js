import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // use is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div>
      {!user ? (
        <div className="app">
          <Login />
        </div>
      ) : (
        <div className="app">
          <Header />
          <div className="app-body">
            <Sidebar />
            <Feed />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
