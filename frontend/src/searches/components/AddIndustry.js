import React from "react";
import Form from "react-bootstrap/Form";

export const AddIndustry = ({ change }) => {
	return (
		<React.Fragment>
			<div className="w-25">
				<Form.Select
					aria-label="Industry search"
					onChange={change}
					name="industry"
					id="industry"
				>
					<option>Select Industry</option>
					<option value="ux-ui">UX/UI Design</option>
					<option value="software">Software Engineering</option>
					<option value="frontend">Frontend</option>
					<option value="backend">Backend</option>
					<option value="fullstack">Full Stack</option>
				</Form.Select>
			</div>
		</React.Fragment>
	);
};
