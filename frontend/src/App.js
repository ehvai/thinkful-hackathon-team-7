import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "react-bootstrap";

function App() {
	const [toggle, setToggle] = React.useState(false);

	return (
		<div className="App">
			<h1>Hello {toggle ? "World!" : "Team 7!"}</h1>
			<Button onClick={() => setToggle((prev) => !prev)}>Click</Button>
		</div>
	);
}

export default App;
