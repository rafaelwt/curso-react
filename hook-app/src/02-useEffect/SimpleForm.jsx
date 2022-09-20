import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "rafael@gmail.com",
  });
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log("hey");
  }, []);
  useEffect(() => {
    console.log("email changed");
  }, [email]);
  useEffect(() => {
    console.log("fomrState changed");
  }, [formState]);



  return (
    <>
      <h1>Formulario Simple</h1>
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
        {
            username === 'strider2' && <Message/>
        }
    </>
  );
};
