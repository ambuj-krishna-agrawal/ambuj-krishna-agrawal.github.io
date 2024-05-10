import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

// const Works = () => {
// 	return (
// 		<div className="works">
// 			<Card
// 				icon={faBriefcase}
// 				title="Work"
// 				body={
// 					<div className="works-body">
// 						<div className="work">
// 							<img
// 								src="./facebook.png"
// 								alt="facebook"
// 								className="work-image"
// 							/>
// 							<div className="work-title">Facebook</div>
// 							<div className="work-subtitle">
// 								Software Engineer
// 							</div>
// 							<div className="work-duration">2019 - Present</div>
// 						</div>

// 						<div className="work">
// 							<img
// 								src="./twitter.png"
// 								alt="twitter"
// 								className="work-image"
// 							/>
// 							<div className="work-title">Twitter</div>
// 							<div className="work-subtitle">
// 								Software Engineer
// 							</div>
// 							<div className="work-duration">2019 - Present</div>
// 						</div>
// 					</div>
// 				}
// 			/>
// 		</div>
// 	);
// };


const Works = (props) => {
	const { title, description, date, internshipDescription, internshipDate, position, logo } = props;

	return (
		<React.Fragment>
			<div className="homepage-works">
				<div className="homepage-works-content">
					<div className="homepage-works-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-works-title">{title} <div className="homepage-works-logo">
							<img src={logo} alt="logo" />
						</div></div>
					<div className="homepage-works-position">{position}</div>
					<div className="homepage-works-description">
						{description}
					</div> 
					{internshipDescription && 
						<div className="homepage-works-internship">
						<b>Internship:</b>
						<div className="homepage-works-internship-date">
							{internshipDate}
						</div>
						<div className="homepage-works-internship-description">
							{internshipDescription}
						</div>
					</div>}
					
				</div>
			</div>
		</React.Fragment>
	);
};


export default Works;
