import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Path } from "./layouts/Paths";
import { NavigationBar } from "./components";
import { Footer } from "./layouts";

function App() {
	return (
		<React.Fragment>
			<NavigationBar />
			<Container fluid>
				<Path />
			</Container>
			<Footer />
		</React.Fragment>
	);
}

export default App;
