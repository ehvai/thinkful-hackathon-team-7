import React, { useState } from "react";
import SignupForm from "../components/signup/SignupForm";
import { createUser } from "../utils/api";

export function Signup() {
	const initialState = {
		user_email: "",
		user_name: "",
		user_password: "",
	};

	const [newAccount, setNewAccount] = useState(initialState);
	console.log(newAccount);
	async function submitHandler(evt) {
		evt.preventDefault();
		try {
			const abortController = new AbortController();
			await createUser(newAccount, abortController.signal); // changed { data: newAccount } to newAccount
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
