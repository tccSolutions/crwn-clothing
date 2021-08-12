import React, { useState } from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { auth, createProfileDocument } from "../../firebase/firebase.util";
import "./sign-up.styles.scss";

export const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  //--------------Handle Email & Password login-----------//
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Make sure the passwords match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createProfileDocument(user, { displayName: displayName });
      setDisplayName("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      setMessage("Registration Successful");
    } catch (err) {
      setMessage(err.message);
    }
  };
//--------------Handle Input Change-----------//
  const handleChange = (event) => {
    const { value, name } = event.target;
    switch (name) {
      case "name":
        setDisplayName(value);
        return;
      case "email":
        setEmail(value);
        return;
      case "password":
        setPassword(value);
        return;
      case "confPassword":
        setConfirmPassword(value);
        return;
      default:
        return;
    }
  };

  return (
    <div className="sign-up">
      <div className="title">
        <h3>Don't Have an account?</h3>
        <h2>Register Below</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="name"
          type="name"
          value={displayName}
          handleChange={handleChange}
          label="Enter your Name"
          required
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Create a Password"
          required
        />
        <FormInput
          name="confPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm your Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
        <p>{`${message}`}</p>
      </form>
    </div>
  );
};
