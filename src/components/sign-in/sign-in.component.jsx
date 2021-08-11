import React, { useState } from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { SignInWithGoogle } from "../../firebase/firebase.util";
import "./sign-in.styles.scss";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("changed");
    setPassword("changed");
    console.log(`email:${email} password:${password}`);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        return;
      case "password":
        setPassword(value);
        return;
      default:
        return;
    }
  };
  return (
    <div className="sign-in">
      <h2>I already have an account.</h2>
      <span>Sign in with your eamil and password.</span>

      <form onSubmit={handleSubmit}>
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
          onChange={handleChange}
          label="password"
          required
        />
        <div className='button-container'>
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
          {``}
          Google Sign In{``}
        </CustomButton>
        </div>
        
      </form>
    </div>
  );
};
