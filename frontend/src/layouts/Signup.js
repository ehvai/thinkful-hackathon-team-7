import React, { useState } from "react";
import SignupForm from "../components/signup/SignupForm";
import { createUser } from "../utils/api";

function Signup() {
  const initialState = {
    user_email: "",
    user_alias: "",
    user_password: "",
  };

  const [newAccount, setNewAccount] = useState(initialState);

  async function submitHandler(evt) {
    evt.preventDefault();
    try {
      const abortController = new AbortController();
      await createUser({ data: newAccount }, abortController.signal);
    } catch (error) {
      console.log(error);
    }
  }

  function changeHandler(evt) {
    setNewAccount({
      ...newAccount,
      [evt.target.name]: evt.target.value,
    });
  }

  return (
    <div>
      <h3>Sign up for a free Account</h3>
      <SignupForm
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        newAccount={newAccount}
      />
    </div>
  );
}

export default Signup;
