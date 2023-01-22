import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Path, Footer } from "./layouts";
import { NavigationBar } from "./components";

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
