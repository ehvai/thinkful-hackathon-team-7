import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { XIcon, PlusCircleIcon } from "@primer/octicons-react";

export const AddLocations = ({ locations, setLocations }) => {
	const locationsSelectHandler = (event) => {
		if (event.key === "Enter") {
			setLocations((prev) => [...prev, event.target.value]);
		}
	};

	const locationsRemoveHandler = (e) => {
		let newLocations = locations.filter(
			(location) => location !== e.target.innerText
		);

		setLocations([...newLocations]);
	};

	const locationTags = locations?.map((element, i) => (
		<Button key={i} className="mt-1 me-2" variant="light" size="sm">
			<Button
				as="div"
				variant="clear"
				size="sm"
				onClick={locationsRemoveHandler}
			>
				{element}
			</Button>
			<Button as="div" variant="clear" size="sm">
				<XIcon size={16} />
			</Button>
		</Button>
	));

	return (
		<React.Fragment>
			<div className="d-flex w-25">
				<Form.Control
					as="input"
					type="text"
					placeholder="City, State"
					name="location"
					onKeyDown={locationsSelectHandler}
				/>
				<Button
					className="d-flex align-items-center"
					as="div"
					variant="clear"
					size="sm"
				>
					<PlusCircleIcon size={16} />
				</Button>
			</div>
			<div className="py-1" alt="companies tags">
				{locationTags}
			</div>
		</React.Fragment>
	);
};
