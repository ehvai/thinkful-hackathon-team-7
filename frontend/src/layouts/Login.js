import React, { useState } from "react";

import LoginForm from "../components/login/LoginForm";
import { loginCredentials } from "../utils/api";

export function Login() {
	const initialState = {
		// edit names to user_email and password
		user_email: "",
		user_password: "",
	};

	// useState variable and function for logging in
	const [credentials, setCredentials] = useState(initialState);

	async function submitHandler(evt) {
		evt.preventDefault();
		try {
			const abortController = new AbortController();
			await loginCredentials({ data: credentials }, abortController.signal);
		} catch (error) {
			console.log(error);
		}
	}

	function changeHandler(evt) {
		setCredentials({
			...credentials,
			[evt.target.name]: evt.target.value,
		});
	}

	return (
		<div>
			<h3>Enter your information</h3>
			<LoginForm
				changeHandler={changeHandler}
				submitHandler={submitHandler}
				credentials={credentials}
			/>
		</div>
	);
}
