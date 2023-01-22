import React from "react";
import { Routes, Route } from "react-router-dom";
import { CommunityPage } from "../communities/CommunityPage";
import { NotFound } from "../components";
import { SplashPage } from "../layouts";
import Results from "../searches/Results";

export const Path = () => {
	return (
		<Routes>
			<Route path="/" element={<SplashPage />} />
			<Route path="/results" element={<Results />} />
			<Route path="/community" element={<CommunityPage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
