import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../components";
import { Home } from "./Home";

export const Path = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
