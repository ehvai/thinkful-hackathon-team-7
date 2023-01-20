import React from "react";

function LoginForm({ submitHandler, changeHandler, credentials }) {
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlfor="user_email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="user_email"
          aria-describedby="emailHelp"
          name="user_email"
          required={true}
          onChange={changeHandler}
          // change to user_email
          value={credentials.user_email}
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlfor="user_password">Password</label>
        <input
          type="password"
          className="form-control"
          id="user_password"
          name="user_password"
          required={true}
          onChange={changeHandler}
          value={credentials.user_password}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
