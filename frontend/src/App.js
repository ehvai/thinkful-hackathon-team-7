import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { Path } from "./layouts/Paths";
import { NavigationBar } from "./components";

function App() {
	return (
		<React.Fragment>
			<NavigationBar />
			<Container fluid>
				<Path />
			</Container>
		</React.Fragment>
	);
}

export default App;
