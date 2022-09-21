import { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });
  // const { username, email, password } = formState;
  // useEffect(() => {
  //   console.log("hey");
  // }, []);
  // useEffect(() => {
  //   console.log("email changed");
  // }, [email]);
  // useEffect(() => {
  //   console.log("fomrState changed");
  // }, [formState]);

  return (
    <>
      <h1>FormWithCustomHook Simple</h1>
      <hr></hr>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="test@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>
      {username === "strider2" && <Message />}
    </>
  );
};
