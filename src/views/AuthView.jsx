import { indent, centered } from "../styles/AuthView.module.css";
import React, { useState } from "react";
import { Input, Button } from "@mui/material";

export default function AuthView({ handleSubmit }) {
  const [phone, setPhone] = useState("");
  const handlePhoneInput = ({ target: { value } }) => setPhone(value);

  const [password, setPassword] = useState("");
  const handlePasswordInput = ({ target: { value } }) => setPassword(value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (phone.length < 10 || password.length < 4) {
      alert("Enter valid phone number or password");
      return;
    }

    handleSubmit({ phone, password });

    setPhone("");
    setPassword("");
  };

  return (
    <>
      <h1 className={centered}>Please sign up or log in to continue</h1>
      <form className={centered} onSubmit={onSubmit}>
        <label className={indent} htmlFor="phone">
          Phone
        </label>
        <Input
          className={indent}
          inputProps={{
            pattern: "[0-9]+",
            title: "Numbers only, minimum length - 10 digits",
          }}
          id="phone"
          type="phone"
          name="phone"
          placeholder="Enter your phone number"
          required
          onChange={handlePhoneInput}
        />

        <label className={indent} htmlFor="password">
          Password
        </label>
        <Input
          className={indent}
          inputProps={{
            pattern: "[A-Za-z0-9]+",
            title:
              "English letters and numbers only, no punctuation or special characters. Minimum 4 characters",
          }}
          type="password"
          name="password"
          placeholder="Enter your password"
          id="password"
          required
          onChange={handlePasswordInput}
        />

        <Button variant="contained" type="submit">
          Send
        </Button>
      </form>
    </>
  );
}
