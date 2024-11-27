import React from "react";


function article_cmu_GPA() {
	return {
		date: "September 2024 – Present",
		title: "Granular Preference-Based Feedback of Generated Text",
		link: "",
		guide: "Associate Professor Fernando Diaz, Language Technologies Institute, Carnegie Mellon University",
		institute: "Carnegie Mellon University",
		codelink: "https://github.com/shaily99/gpa",
		isPublished: false,
		description:
		"Working as a Research Assistant under Dr. Fernando Diaz on the “Starlight” team, leveraging granular and implicit human preference feedback through infilling and edits to enhance personalization and reduce cognitive load in comparing LLM-based system outputs.",
		keywords: [
			"Granular Preference",
			"RLHF",
			"Pytorch",
			"Inference",
			"LLM",
			"Ambuj",
			"Ambuj Krishna Agrawal",
			"Ambuj Agrawal",
		]
	};
}


function article_cmu_rag() {
	return {
		date: "October 2024 – October 2024",
		title: "RAG-Chatbot",
		link: "",
		guide: "",
		institute: "Carnegie Mellon University",
		codelink: "",
		isPublished: false,
		description:
		"In a team of three, developed a RAG pipeline using concepts like multi-query, cross encoders, lost in the middle, BM25, and vector embedding with Langchain and scraped over 5000 documents using selenium to answer the latest questions about Pittsburgh.",
		keywords: [
			"RAG",
			"Retrieval Augmented Generation",
			"Langchain",
			"Dense Retrieval",
			"BM25",
			"Ambuj",
			"Ambuj Krishna Agrawal",
			"Ambuj Agrawal",
		]
	};
}

function article_1() {
	return {
		date: "Jan 2020 – July 2020",
		title: "SLAM and Map Learning using Hybrid Semantic Graph Optimization",
		link: "https://ieeexplore.ieee.org/abstract/document/9837164",
		guide: "Asst. Prof. Rahul Kala, Department of Information Technology",
		institute: "Indian Institute of Information Technology, Allahabad",
		codelink: "https://github.com/drv-agwl/Hybrid-SPTAM",
		isPublished: true,
		description:
			"Improved localization accuracy of V-SLAM by injecting semantic information of detected corner points (using L-CNN). Detected object in a scene were used for place recognition and correspondence matching which further enhanced the semantic information provided to V-SLAM module.",
		keywords: [
			"V-SLAM",
			"Hybrid-SPTAM",
			"Visual simultaneous localization and mapping",
			"Ambuj",
			"Ambuj Krishna Agrawal",
			"Ambuj Agrawal",
		]
	};
}

function article_2() {
	return {
		date: "May 2019 – July 2019",
		title: "Research Internship | Predictive Process Management",
		link: "https://drive.google.com/file/d/1xNPQbf-kt0Tz7Wtdro4BT8KNBSoHfh0w/view?usp=sharing",
		guide: "Professor K.K Shukla, Department of Computer Science and Engineering",
		institute: "Indian Institute of Technology, Varanasi (IIT BHU)",
		codelink: "https://github.com/ambuj-krishna-agrawal/predictive_process_management",
		description:
		"Developed a robust high accuracy model on bpi-12 and helpdesk data to improve upon the results from original research paper on Predictive Business Monitoring with LSTM and attention layer based models.",
		isPublished: false,
		keywords: [
			"Predictive Process Management",
			"Time Series Prediction",
			"LSTM",
			"bpi",
			"Ambuj",
			"Ambuj Krishna Agrawal",
			"Ambuj Agrawal",
		]
	};
}

function article_3() {
	return {
		date: "July 2020 – Jan 2021",
		title: "Monitoring Social Distancing with AI",
		link: "",
		guide: "Professor Pavan Chakraborty, Department of Information Technology",
		institute: "Indian Institute of Information Technology, Allahabad",
		codelink: "https://github.com/zerefwayne/SocialDistancingMonitor",
		description:
		"Developed a technique that transforms the footage into a 3D panoptic scene, combining SSDs for pedestrian detection and then applying perspective transformation. This final 3D projection enabled us to accurately count instances where people breached safe distances, even under low-resolution feed and challenging camera angles.",
		isPublished: false,
		keywords: [
			"Social distancing AI",
			"COCO",
			"Ambuj",
			"Ambuj Krishna Agrawal",
			"Ambuj Agrawal",
		]
	};
}

function article_4() {
	return {
		date: "July 2019 – Jan 2020",
		title: "Object detection in low light conditions",
		link: "",
		guide: "Associate Professor Satish Kumar Singh, Department of Information Technology",
		institute: "Indian Institute of Information Technology, Allahabad",
		codelink: "",
		description:
		"Developed a model combining inputs from both visible RGB and thermal images and making them go through SSD to predict boundary boxes, which are better than individually trained images. The objective was to improve object detection for vehicles during night and prevent accidents.",
		isPublished: false,
		keywords: [
			"Social distancing AI",
			"COCO",
			"Ambuj",
			"Ambuj Krishna Agrawal",
			"Ambuj Agrawal",
		]
	};
}

const myArticles = [article_cmu_GPA, article_cmu_rag, article_1, article_2, article_3, article_4];

export default myArticles;
