import React from "react";
import { Button, Container, Row, Form } from "react-bootstrap";
import {
	AddCompanies,
	AddIndustry,
	AddJobSites,
	AddLocations,
} from "./components";

export const MySearchesPage = () => {
	const initSearch = {
		industry: "",
		company: [],
		location: [],
		job_site: [],
	};

	const [search, setSearch] = React.useState({ ...initSearch });
	const [companies, setCompanies] = React.useState([]);
	const [locations, setLocations] = React.useState([]);
	const [jobSites, setJobSites] = React.useState([]);

	const changeHandler = ({ target: { id: name, value } }) => {
		setSearch((prev) => ({
			...prev,
			[name]: value,
		}));
		console.log(search);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		console.log("submitted!");
	};

	return (
		<React.Fragment>
			<div>
				<div>My Searches</div>
				<Container>
					<Row className="col-4">
						<div className="h5">Edit a Saved Search</div>
						<div className="d-flex gap-3 py-2">
							<Button variant="secondary">Save Searches</Button>
							<Button variant="outline-secondary">Edit</Button>
						</div>
					</Row>
					<Row>
						<div className="h5">Create a New Search</div>
						<div className="px-4">
							<div className="mt-2 mb-5" alt="industry">
								<div className="h5">Choose your industry</div>
								<AddIndustry change={changeHandler} />
							</div>
							<div className="mb-5" alt="company">
								<div className="h5">Add companies you're interested in</div>
								<AddCompanies
									companies={companies}
									setCompanies={setCompanies}
								/>
							</div>
							<div className="mb-5" alt="location">
								<div className="h5">Location preference</div>
								<AddLocations
									locations={locations}
									setLocations={setLocations}
								/>
							</div>
							<div className="mb-5" alt="job site">
								<div className="h5">What job sites are you using?</div>
								<AddJobSites jobSites={jobSites} setJobSites={setJobSites} />
							</div>
						</div>
					</Row>
					<Button onClick={submitHandler} variant="secondary">
						Save Search
					</Button>
				</Container>
			</div>
		</React.Fragment>
	);
};
