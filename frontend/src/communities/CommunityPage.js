import React, { useState } from "react";
import { SearchTags, TechArticleView, ThreadList } from "./components";

export const CommunityPage = () => {
	return (
		<React.Fragment>
			<div className="py-4 d-flex text-center flex-column gap-4">
				<h2>JobSeekrz Community Page</h2>
				<p>
					Homebase for all things networking with other job seekers.
					<br></br>
					Create new Searches and read posts related to your searches.
					<br></br>
					Connect with other users via their LinkedIn for more details.
				</p>
			</div>
			<hr></hr>

			<div className="d-flex row">
				<div className="d-flex flex-column align-items-center col-3" alt="left">
					<h5>Industry News</h5>
					<div className="px-2 mt-3 w-75">
						{Array(10)
							.fill()
							.map((_, i) => (
								<div className="mb-4" key={i}>
									<TechArticleView />
								</div>
							))}
					</div>
				</div>
				<div className="col-6 " alt="middle">
					<div alt="search tags">
						<SearchTags />
					</div>
					<div>
						<ThreadList />
					</div>
				</div>
				<div
					className="d-flex flex-column align-items-center col-3"
					alt="right"
				>
					<h5>Ads</h5>
					<div className="px-2 mt-3 w-75">
						{Array(10)
							.fill()
							.map((_, i) => (
								<div className="mb-4" key={i}>
									<TechArticleView />
								</div>
							))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
