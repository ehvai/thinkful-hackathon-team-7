import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../components";
import { SplashPage } from "./SplashPage";
import Login from "./Login";
import Results from "./Results";
import Signup from "./Signup";

export const Path = () => {
	return (
		<Routes>
			<Route path="/" element={<SplashPage />} />
			<Route path="/results" element={<Results />} />
			<Route path="/login" element={<Login />} />
			<Route path="/sign up" element={<Signup />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
