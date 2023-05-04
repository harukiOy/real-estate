"use client";

import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          <form className="" onSubmit={submitHandler}>
            <h1 className="mb-4">Register</h1>

            <div className="">
              <label className="" htmlFor="name_field">
                Name
              </label>
              <input
                type="text"
                id="name_field"
                className=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="">
              <label className="" htmlFor="email_field">
                Email address
              </label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="password_field">
                Password
              </label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-block w-100 btn-primary btn-block mb-4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;