import React from "react";

function SignupForm({ submitHandler, changeHandler, newAccount }) {
	return (
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<label htmlFor="user_email">Email address</label>
				<input
					type="email"
					className="form-control"
					id="user_email"
					aria-describedby="emailHelp"
					name="user_email"
					required={true}
					onChange={changeHandler}
					// change to user_email
					value={newAccount.user_email}
				/>
				<small id="emailHelp" className="form-text text-muted">
					We'll never share your email with anyone else.
				</small>
			</div>
			<div className="form-group">
				<label htmlFor="user_name">Alias</label>
				<input
					type="text"
					className="form-control"
					id="user_name"
					name="user_name"
					required={true}
					onChange={changeHandler}
					value={newAccount.user_name}
				/>
				<small id="emailHelp" className="form-text text-muted">
					Name that will be shown on your profile.
				</small>
			</div>
			<div className="form-group">
				<label htmlFor="user_password">Password</label>
				<input
					type="password"
					className="form-control"
					id="user_password"
					name="user_password"
					required={true}
					onChange={changeHandler}
					value={newAccount.user_password}
				/>
			</div>

			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
}

export default SignupForm;
