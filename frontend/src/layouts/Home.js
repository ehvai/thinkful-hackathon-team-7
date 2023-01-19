import React from "react";
import { Button } from "react-bootstrap";

export const Home = () => {
	const [toggle, setToggle] = React.useState(false);
	return (
		<div>
			<h1>Hello {toggle ? "World!" : "Team 7!"}</h1>

			<Button onClick={() => setToggle((prev) => !prev)}>Click</Button>
		</div>
	);
};
