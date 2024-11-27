import React from "react";


function work_cmu() {
	return {
		date: "5 September 2024 - Present",
		title: "Carnegie Mellon University",
        position: "Machine Learning Reseacher",
        logo: "cmu.svg",
		description:
			"Working as a Research Assistant under Dr. Fernando Diaz on the “Starlight” team, leveraging granular and implicit human preference feedback through infilling and edits to enhance personalization and reduce cognitive load in comparing LLM-based system outputs.",
        internship_date: "",
        internship_description:
        "",
		keywords: [
			"Machine Learning",
			"Natural Language Processing",
			"Artificial Intelligence",
			"Ambuj",
			"Ambuj Agrawal",
			"Ambuj Krishna Agrawal",
		]
	};
}

function work_1() {
	return {
		date: "20 Feb 2023 - 17th July 2024",
		title: "CRED",
        position: "Senior Backend Engineer",
        logo: "cred_1.svg",
		description:
			"Working on the bill payments platform powering services like credit card payments, gift cards, vouchers, electricity, education, rent etc., serving 5 million+ montly transacting users",
        internship_date: "8 Feb 2021 - 30 June 2021",
        internship_description:
        "Made a complete backend microservice from scratch for a new line of utility product on CRED for BNPL (Buy Now, Pay Later)",
		keywords: [
			"CRED",
			"Ambuj",
			"Ambuj Agrawal",
			"Ambuj Krishna Agrawal",
		]
	};
}

function work_2() {
	return {
		date: "5 July 2023 - 17 Feb 2023",
		title: "LinkedIn",
        position: "Software Development Engineer",
        logo: "linkedin.png",
		description:
        "Worked on Account Protection Team whose objective is safeguarding members' privacy and data from different attack vectors like scraping, phishing, replay, Man in the Middle attacks, etc. The team also handles user login experience, maintains session and members' sensitive information. ",
        internship_date: "1 May 2020 - 15 July 2020",
        internship_description:
        "Made APIs for a new architecture for storing phone numbers handling various edge cases. Came up with a clustering algorithm to generate required number of regexes for phone number validation to replace google’s libphonenumber.",
		keywords: [
			"LinkedIn",
			"Ambuj",
			"Ambuj Agrawal",
			"Ambuj Krishna Agrawal",
		]
	};
}

function work_3() {
	return {
		date: "October 2020 – Jan 2021",
		title: "Elucidata",
        logo: "elucidata.jpeg",
        position: "Fullstack Internship",
		description:
        "Worked in close collaboration with the Pfizer team as a client to develop different automated workflows needed for vaccine generation by the researchers at Pfizer.",
        internship_date: "",
        internship_description: "",
		keywords: [
			"LinkedIn",
			"Ambuj",
			"Ambuj Agrawal",
			"Ambuj Krishna Agrawal",
		]
	};
}

const myWork = [work_cmu, work_1, work_2, work_3];

export default myWork;
