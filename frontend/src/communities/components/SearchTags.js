import React from "react";
import { Button } from "react-bootstrap";
import { XIcon } from "@primer/octicons-react";

const arr = ["Salary", "Remote", "Hybrid", "Company Size", "Work/Life Balance"];

export const SearchTags = () => {
	const saveButtonHandler = () => {
		console.log("saved!");
	};

	const tagButtonHandler = () => {
		console.log("set tag to false!");
	};

	const tagsList = arr.map((element, i) => (
		<div className="m-1" key={i}>
			<Button
				size="sm"
				variant="secondary"
				className="pt-0"
				onClick={tagButtonHandler}
			>
				{element} <XIcon size={16} />
			</Button>
		</div>
	));

	return (
		<React.Fragment>
			<div className="d-flex flex-column py-3">
				<div>
					<Button as="div" variant="light">
						Current Search
					</Button>
				</div>
				<div className="row">
					<div className="col-9 d-flex flex-wrap pt-1">{tagsList}</div>
					<div className="col d-flex flex-column">
						<Button variant="light" size="sm mb-3" onClick={saveButtonHandler}>
							Save Searches
						</Button>
						<Button variant="light" size="sm px-3" href="">
							New Search
						</Button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
