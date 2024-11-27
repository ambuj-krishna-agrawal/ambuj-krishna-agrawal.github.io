import React from "react";

function education_3() {
	return {
		date: "",
		title: "Additional Courses",
		description:"",
        gpa: "",
        institute: "",
        courses: [],
        onlineCoursesList: [
            {
                "name": "Sequence Models",
                "institute": "DeepLearning.AI",
                "date": "14 May 2024",
                "certificate": "https://www.coursera.org/account/accomplishments/verify/D6FEKSAJS8D9",
            },
            {
                "name": "Convolutional Neural Network",
                "institute": "DeepLearning.AI",
                "date": "12 March 2019",
                "certificate": "https://www.coursera.org/account/accomplishments/verify/MHBM4J6JKHUX",
            },
            {
                "name": "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
                "institute": "DeepLearning.AI",
                "date": "15 Feb. 2019",
                "certificate": "https://www.coursera.org/account/accomplishments/verify/TGGFS6W839TM",
            },
            {
                "name": "Neural Networks and Deep Learning",
                "institute": "DeepLearning.AI",
                "date": "4 Feb. 2019",
                "certificate": "https://www.coursera.org/account/accomplishments/verify/VHWF4AY5FEVP",
            },
            {
                "name": "Structuring Machine Learning Projects",
                "institute": "DeepLearning.AI",
                "date": "16 Feb. 2019",
                "certificate": "https://www.coursera.org/account/accomplishments/verify/3SUE37K9QEC5",
            },
            {
                "name": "Machine Learning",
                "institute": "Stanford",
                "date": "14 Jan. 2019",
                "certificate": "https://www.coursera.org/account/accomplishments/verify/2PPS4UYUN6H7",
            },
        ],
		keywords: [
			"Coursera",
			"Ambuj Krishna Agrawal",
			"Ambuj Agrawal",
			"Ambuj",
		]
	};
}

function education_1() {
	return {
		date: "July 2017 - June 2021",
		title: "Undergrad",
		description:
			"Bachelors in Technology (B.Tech) with <b>honors</b> in <b>Information Technology</b>.",
        gpa: "8.82/10",
        institute: "Indian Institute of Information Technology, Allahabad (IIIT-A)",
        courses: [
            "Artificial Intelligence",
            "Machine Learning",
            "Image Processing",
            "Data Structures",
            "Algorithms",
            "Operating Systems",
            "Computer Networks",
            "Software Engineering",
            "Database Management Systems",
        ],
        onlineCoursesList: [],
		keywords: [
			"IIIT Allahabad",
			"Ambuj Krishna Agrawal",
			"Ambuj Agrawal",
			"Ambuj",
		]
	};
}

function education_2() {
	return {
		date: "August 2024 - December 2025",
		title: "Masters",
		description:
			"Masters in Intelligent Information Systems (MIIS)",
        gpa: "",
        institute: "Carnegie Mellon University (CMU), Language Technologies Institute, School of Computer Science",
        courses: [
            "Advance Natural Language Processing",
            "Multimodal Machine Learning",
            "Introduction to Machine Learning"
        ],
        onlineCoursesList: [],
		keywords: [
			"LTI",
            "CMU",
            "SCS",
			"Ambuj Krishna Agrawal",
			"Ambuj Agrawal",
			"Ambuj",
		]
	};
}

const myEducation = [education_2, education_1, education_3];

export default myEducation;
