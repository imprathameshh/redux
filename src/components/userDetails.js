import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFormDetails } from "../store/action/actions";

const UserDetails = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setFormDetails(user));
  };

  return (
    <>
      <div className="wrapper">
        <h2 id="hid">Registration Form</h2>
        <form id="myform" name="form" onSubmit={handleSubmit}>
          <div className="input_field">
            <input
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              autoComplete="off"
              value={user.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input_field">
            <input
              type="text"
              name="email"
              placeholder="Email"
              id="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input_field">
            <input
              type="text"
              name="age"
              placeholder="Age"
              id="age"
              value={user.age}
              onChange={handleInputChange}
            />
          </div>
          <div className="input_field">
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              id="gender"
              value={user.gender}
              onChange={handleInputChange}
            />
          </div>
          <input type="submit" value="register" />
        </form>
      </div>
    </>
  );
};

export default UserDetails;
