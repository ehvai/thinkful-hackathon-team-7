import React from "react";

function LoginForm({ submitHandler, changeHandler, credentials }) {
  return (
    <form onSubmit={submitHandler}>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
          name="inputEmail"
          required={true}
          onChange={changeHandler}
          value={credentials}
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
