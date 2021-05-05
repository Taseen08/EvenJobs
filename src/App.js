import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function App() {
  const us = useSelector(selectUser);
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Body */}

      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
