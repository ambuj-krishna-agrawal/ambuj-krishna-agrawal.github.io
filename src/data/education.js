import React from "react";

function education_1() {
	return {
		date: "7 May 2017 - 7 May 2021",
		title: "Undergraduate B.Tech in Information Technology",
		description:
			"Undergraduate degree with honors (8.82/10 GPA) in Information Technology from Indian Institute of Information Technology, Allahabad.",
		keywords: [
			"IIIT Allahabad",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Topics learnt</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myEducation = [education_1];

export default myEducation;
