import React from "react";
import "./custom-button.styles.scss";

export const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherprops
}) => (
  <div>
    <button
      className={`${inverted ? "inverted" : ""}${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherprops}
    >
      {children}
    </button>
  </div>
);
