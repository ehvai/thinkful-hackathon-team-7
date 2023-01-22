import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const ThreadView = ({ comment }) => {
	return (
		<React.Fragment>
			<Card bg="light" className="text-center">
				<Card.Header className="bg-secondary text-white text-start">
					Thread {comment?.id}
				</Card.Header>
				<Card.Body className="d-flex justify-content-between bg-white py-1">
					<Card.Text className="m-0">Post by: {comment?.user} </Card.Text>
					<Link className="text-decoration-none text-secondary" href="">
						Connect on LinkedIn
					</Link>
				</Card.Body>
				<Card.Body>
					<Card.Subtitle className="text-decoration-none text-start">
						#testing
					</Card.Subtitle>
					<Card.Text className="py-4 px-5">
						With supporting text below as a natural lead-in to additional
						content. With supporting text below as a natural lead-in to
						additional content. With supporting text below as a natural lead-in
						to additional content. With supporting text below as a natural
						lead-in to additional content. With supporting text below as a
						natural lead-in to additional content.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card.Footer className="bg-secondary d-flex flex-column align-items-start mt-1 px-3 py-1 rounded-2">
				<p className="m-0 text-white">Comments</p>
				<Link className="text-decoration-none text-white" to="">
					Click to open thread
				</Link>
			</Card.Footer>
		</React.Fragment>
	);
};
