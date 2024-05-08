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
	const { title, description, date } = props;

	return (
		<React.Fragment>
			<div className="homepage-works">
				<div className="homepage-works-content">
					<div className="homepage-works-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-works-title">{title}</div>
					<div className="homepage-works-description">
						{description}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};


export default Works;
