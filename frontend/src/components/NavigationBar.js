import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const arr = ["Home", "Login", "Sign up"];

export const NavigationBar = () => {
	const list = arr.map((element, i) => (
		<div
			className={
				i === 0 ? "position-absolute top-50 start-0 translate-middle-y" : null
			}
		>
			<Nav.Link key={i} href={i === 0 ? "/" : element.toLowerCase()}>
				{element}
			</Nav.Link>
		</div>
	));

	return (
		<Navbar className="mb-1" sticky="top" bg="light">
			<Container fluid>
				<Nav className="w-100 d-flex position-relative justify-content-end">
					{list}
				</Nav>
			</Container>
		</Navbar>
	);
};
