import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const arr = ["Accessibility", "Cookies", "Copyright", "Privacy", "Terms"];

export const Footer = () => {
	const navList = arr.map((element, i) => (
		<div key={i}>
			<Nav.Link className="" href={element.toLocaleLowerCase()}>
				{element}
			</Nav.Link>
		</div>
	));
	return (
		<Navbar fixed="bottom" bg="secondary">
			<Container fluid>
				<Nav className="w-100 d-flex position-relative justify-content-end">
					{navList}
				</Nav>
			</Container>
		</Navbar>
	);
};
