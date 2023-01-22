import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Nav, Navbar, Container, Modal, Button } from "react-bootstrap";
import { Login, Signup } from "../layouts";

const loginArr = ["Sign up!", "Login"];
const loggedInArr = ["Community", "My-Profile"];

export const NavigationBar = () => {
	let location = useLocation();
	console.log(location);
	const [login, setLogin] = useState(false);
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

	const navLogin = loginArr.map((element, i) => (
		<div className="px-2" key={i}>
			<Button
				className="btn-lg text-white"
				variant="clear"
				onClick={i === 0 ? handleSignUpShow : handleLoginShow}
			>
				{element}
			</Button>
		</div>
	));

	const navLoggedin = loggedInArr.map((element, i) => (
		<div className="px-2" key={i}>
			<Nav.Link
				className={
					location.pathname === `/${element.toLocaleLowerCase()}`
						? "text-white fs-4 text-decoration-underline"
						: "text-white fs-4"
				}
				href={element.toLocaleLowerCase()}
			>
				{i === 1 ? element.replace(" ", "-") : element}
			</Nav.Link>
		</div>
	));

	return (
		<React.Fragment>
			{loginModal}
			{signUpModal}
			<Navbar className="mb-1" sticky="top" bg="secondary">
				<Container fluid>
					<Nav className="w-100 d-flex position-relative justify-content-end">
						<div className="position-absolute top-50 start-0 translate-middle-y">
							<Nav.Link className="fst-italic text-white fs-2" href="/">
								JobSeekrz
							</Nav.Link>
						</div>
						{login ? navLogin : navLoggedin}
					</Nav>
				</Container>
			</Navbar>
		</React.Fragment>
	);
};
