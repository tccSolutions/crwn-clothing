import React, { useState } from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { auth, SignInWithGoogle } from "../../firebase/firebase.util";
import "./sign-in.styles.scss";


export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async(event) => {   
    event.preventDefault();    
    try{
     await auth.signInWithEmailAndPassword(email,password)
     setMessage("Successfully Signed In");
    }catch(err){setMessage(err.message)}
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
        <CustomButton type='button' onClick={SignInWithGoogle} isGoogleSignIn>
          {``}
          Google Sign In{``}
        </CustomButton>
        </div>
        <p>{message}</p>
        
      </form>
    </div>
  );
};
