import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { XIcon, PlusCircleIcon } from "@primer/octicons-react";

export const AddCompanies = ({ companies, setCompanies }) => {
	const companiesSelectHandler = (event) => {
		if (event.key === "Enter") {
			setCompanies((prev) => [...prev, event.target.value]);
		}
	};

	const companiesRemoveHandler = (e) => {
		let newCompanies = companies.filter(
			(company) => company !== e.target.innerText
		);

		setCompanies([...newCompanies]);
	};

	const companiesTags = companies?.map((element, i) => (
		<Button key={i} className="mt-1 me-2" variant="light" size="sm">
			<Button
				as="div"
				variant="clear"
				size="sm"
				onClick={companiesRemoveHandler}
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
					placeholder="company"
					name="company"
					onKeyDown={companiesSelectHandler}
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
			<div alt="companies tags">{companiesTags}</div>
		</React.Fragment>
	);
};
