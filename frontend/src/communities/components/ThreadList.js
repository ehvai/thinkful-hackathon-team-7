import React from "react";
import { ThreadView } from "./ThreadView";

const arr = Array(10)
	.fill()
	.map((_, i) => i + 1);

export const ThreadList = () => {
	const listThread = arr.map((element, i) => (
		<div className="mb-5" key={i}>
			<ThreadView />
		</div>
	));
	return <div>{listThread}</div>;
};
