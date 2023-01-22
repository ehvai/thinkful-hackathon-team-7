import React from "react";
import Form from "react-bootstrap/Form";

export const AddJobSites = ({ jobSites, setJobSites }) => {
	const jobsitesArr = [
		"Indeed",
		"Linkedin",
		"Dice",
		"Glassdoor",
		"ZipRecruiter",
	];

	const changeHandler = (event) => {
		const { checked, value } = event.target;

		setJobSites((prevState) => {
			let newSelected = [...prevState];
			if (checked) {
				newSelected.push(value);
			} else {
				newSelected = newSelected.filter((item) => item !== value);
			}
			return [...newSelected];
		});
	};
	console.log(jobSites);

	return (
		<React.Fragment>
			<Form className="d-flex gap-4">
				{jobsitesArr.map((site, i) => (
					<div key={`default-${site}`} className="mb-3">
						<Form.Check
							type="checkbox"
							id={`default-${site}`}
							label={site}
							value={site}
							name="job_site"
							onChange={changeHandler}
						/>
					</div>
				))}
			</Form>
		</React.Fragment>
	);
};
