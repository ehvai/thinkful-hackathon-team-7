import React, { useState } from "react";
import { Button, Card, Row, Col, Modal } from "react-bootstrap";
import LoginForm from "../components/login/LoginForm";

export const Home = () => {
	const [showLogin, setShowLogin] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false);

	//Login Modal
	const handleLoginClose = () => setShowLogin(false);
	const handleLoginShow = () => setShowLogin(true);

	//Sign Up Modal
	const handleSignUpClose = () => setShowSignUp(false);
	const handleSignUpShow = () => setShowSignUp(true);

	const loginModal = (
		<Modal show={showLogin} onHide={handleLoginClose}>
			<Modal.Header closeButton>
				<Modal.Title>Log In</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<LoginForm />
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleLoginClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);

	const signUpModal = (
		<Modal show={showSignUp} onHide={handleSignUpClose}>
			<Modal.Header closeButton>
				<Modal.Title>Sign Up</Modal.Title>
			</Modal.Header>
			<Modal.Body>Sign uppppp</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleSignUpClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);

	return (
		<div>
			<div>{loginModal}</div>
			<div>{signUpModal}</div>
			<Row className="py-4">
				<div className="d-flex text-center flex-column">
					<h1>Welcome to JobSeekrz</h1>
					<h4>Uniting People on the Job Hunt</h4>
				</div>
			</Row>
			<Row className="d-flex justify-content-evenly">
				<Card style={{ width: "18rem" }}>
					<Card.Body>
						<Card.Title>Quote of the Day:</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>

				<Card style={{ width: "18rem" }}>
					<Card.Body>
						<Card.Title>About Card:</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
			</Row>
			<Row className="py-4">
				<Col className="d-flex justify-content-evenly">
					<Button
						className="btn-lg px-4"
						variant="primary"
						onClick={handleSignUpShow}
					>
						Sign Up
					</Button>

					<Button
						className="btn-lg px-4"
						variant="primary"
						onClick={handleLoginShow}
					>
						Login
					</Button>
				</Col>
			</Row>
		</div>
	);
};
