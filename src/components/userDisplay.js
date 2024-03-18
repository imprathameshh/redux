import React from "react";
import { useSelector } from "react-redux";

const UserDisplay = () => {
  // useSelector hook to access data from Redux store
  const userData = useSelector((state) => state.form);

  return (
    <div>
      <div className="show-output">
        {/* Accessing data from Redux state */}
        <h2>Name: {userData.user && userData.user.name}</h2>
        <h2>Email: {userData.user && userData.user.email}</h2>
        <h2>Age: {userData.user && userData.user.age}</h2>
        <h2>Gender: {userData.user && userData.user.gender}</h2>
      </div>
    </div>
  );
};

export default UserDisplay;
