import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FeedPersonIcon } from "@primer/octicons-react";

const loginArr = ["Sign up!", "Login"];
const loggedInArr = ["Home", "Profile"];

export const NavigationBar = () => {
	const [login, setLogin] = React.useState(false);

	const navLogin = loginArr.map((element, i) => (
		<div className="px-2" key={i}>
			<Nav.Link className="text-white fs-4" href={element.toLowerCase()}>
				{element}
			</Nav.Link>
		</div>
	));

	const navLoggedin = loggedInArr.map((element, i) => (
		<div className="px-2" key={i}>
			<Nav.Link
				className="text-white fs-4"
				href={i === 0 ? "/" : element.toLocaleLowerCase()}
			>
				{i === 0 ? element : <FeedPersonIcon size={32} />}
			</Nav.Link>
		</div>
	));

	return (
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
	);
};
