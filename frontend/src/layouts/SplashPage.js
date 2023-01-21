import React, { useState } from "react";
import { Button, Card, Row, Col, Stack, Modal, Form } from "react-bootstrap";
import { Login, Signup } from "../layouts";

export const SplashPage = () => {
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
				<Login />
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
			<Modal.Body>
				<Signup />
			</Modal.Body>
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
			<Row className="py-4 d-flex text-center flex-column gap-4">
				<Stack>
					<h1>Welcome to JobSeekrz</h1>

					<h4>Uniting People on the Job Hunt</h4>
				</Stack>
				<Stack gap={0}>
					<div>
						A collaborative space created for job searcher, by job searchers.
					</div>
					<div>
						Learn about others' job hunting experience at similar industries and
						companies.
					</div>
					<div>
						Filter your search by industry, company, location, remote vs hybrid,
						and more.
					</div>
				</Stack>
				<Stack>
					<p>
						Connect with like minded people who have knowledge to share about
						their job hunting experience and what worked best for them and what
						didn't
					</p>
				</Stack>
			</Row>
			<Row className="py-4 d-flex justify-content-evenly gap-3">
				<Card bg="secondary" text="light" style={{ width: "18rem" }}>
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
						className="btn-lg px-5"
						variant="light"
						onClick={handleSignUpShow}
					>
						Sign Up
					</Button>

					<Button
						className="btn-lg px-5"
						variant="secondary"
						onClick={handleLoginShow}
					>
						Login
					</Button>
				</Col>
			</Row>
			<Row className="py-2">
				<div
					size={2}
					className="d-flex flex-column align-items-center text-center gap-2"
				>
					<Button variant="light" as="a" className="w-25" size="lg" href="">
						Continue as Guest
					</Button>
					<Form.Text className="w-50">
						* You will not be able to comment or save searches until you create
						an account
					</Form.Text>
				</div>
			</Row>
		</div>
	);
};
