import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../components";
import { Home } from "./Home";
import Login from "./Login";
import Results  from "./Results";
import Signup from "./Signup";

export const Path = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/results" element={<Results />}/>
			<Route path="/login" element={<Login/>}/>
			<Route path="/sign up" element={<Signup/>}/>
		</Routes>
	);
};
