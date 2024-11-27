const INFO = {
	main: {
		title: "Portfolio",
		name: "Ambuj Krishna Agrawal",
		email: "ambujagrawal741@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/aka_saturn",
		github: "https://github.com/ambuj-krishna-agrawal",
		linkedin: "https://www.linkedin.com/in/ambuj-krishna-agrawal",
		topmate: "https://topmate.io/ambuj_agrawal11",
		instagram: "https://www.instagram.com/ambujagrawal007",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Machine Learning Researcher and Backend Developer",
		description:
		"I am a Machine Learning Researcher specializing in the field of Natural Language Processing, currently working on Evaluation of LLMs on Human Preference Feedback, RAG, Routers in LLM and Multimodal Web Agents. I have 3 years of industry experience with microservices and building scalable consumer products. I am actively looking for Machine Learning Internships for Summer 2025.",
	},

	about: {
		title: "Hello, I'm Ambuj",
		description:
		"This website showcases my portfolio, tracks my research endeavors, and facilitates collaboration.  Feel free to reach out via email or any of the social media links below for professional opportunities, collaborative projects, or simply to seek advice. Don't hesitate to connect, no matter the topic."
	},

	articles: {
		title: "Research projects in Machine Learning",
		description:
			"",
	},

	projects: [
		{
			title: "Vouchers & Gift Cards",
			description: "Created a new line of product that allows users to buy vouchers and gift cards from various brands and get cashback on them.",
			features: [
				"Increased our revenue by 100k USD per month",
				"Onboarded 11 merchants in our first launch",
				"Collaborated across verticals to deliver the product on time",
				"Added real-time monitoring/tracking of bought products"
			],
			logo: "cred_1.svg",
			company: "CRED",
			linkText: "",
			link: "",
		}, 
		{
			title: "Next Best Action for Credit Card Management",
			description:
				"Developed a system that predicts the next best action for a user to take in order to maximize their engagement with CRED ecosystem",
			features: [
				"5% increase in user consenting to our cred-product service",
				"Created heuristics to reduce the time before which a new statement can be found for a user",
				"Developed heuristics to reduce the user anxiety on our home page by answering the question, \"Where is my statement?\""
			],
			logo: "cred_1.svg",
			company: "CRED",
			linkText: "",
			link: "",
		},
		{
			title: "Hackathon: Maker-Checker platform for teams to deploy product configs",
			description:
				"Developed a platform that allows teams to deploy product configurations in a safe and secure manner",
			features: [
				"Team stood 3rd in 75+ submissions, scoring ESOPs along with cash",
				"Estimated savings of approx 500k USD per year for CRED",
				"Reduced the number of incidents because of human errors while copying stage configs to production"
			],
			logo: "cred_1.svg",
			company: "CRED",
			linkText: "",
			link: "",
		},
		{
			title: "Solving Native Memory Leak in JAVA",
			description:
				"Debugged a memory leak in JAVA services running with glibc memory allocator causing fragmentation leading to 100% memory consumption of containers",
			features: [
				"Many services across CRED saw decrease upto 25% in memory consumption",
			],
			logo: "cred_1.svg",
			company: "CRED",
			linkText: "",
			link: "",
		},
		{
			title: "Enhancing Authentication Cookie Security",
			description:
				"Changed the encryption signature used to store authentication cookies in the browser used to maintain user sessions",
			features: [
				"Team onboarded more than 1000 services across LinkedIn to new type of tokens",
				"Addressed a major security vulnerability in the system",
				"Learnt the importance of benchmarking encryption algorithms and their performance impact on the system"
			],
			logo: "linkedin.png",
			company: "LinkedIn",
			linkText: "",
			link: "",
		},
		{
			title: "Launching Sign In With Facebook",
			description:
				"Developed the system to securely allow users to sign in with Facebook on LinkedIn",
			features: [
				"Took care of replay attacks using stolen access tokens",
				"Resulted in +ve WAU for some coutries and certain demographics",
			],
			logo: "linkedin.png",
			company: "LinkedIn",
			linkText: "",
			link: "",
		},
		{
			title: "Stopping Replay Attacks on Sign In with Google",
			description:
			"Worked with web, iOS and Android teams to solutionise the way to stop replay attacks on Sign In with Google",
			features: [
				"Aligned different platform teams on the way to stop replay attacks",
			],
			logo: "linkedin.png",
			company: "LinkedIn",
			linkText: "",
			link: "",
		},
		{
			title: "Adding WhatsApp for job notifications",
			description:
			"Securely stored Whatsapp numbers and used them to run campaigns after getting the permission from the users.",
			features: [
				"Major effort to move away from SMS to WhatsApp for all types of notifications (even secure ones)",
			],
			logo: "linkedin.png",
			company: "LinkedIn",
			linkText: "",
			link: "",
		},
		{
			title: "OxyTracker",
			description:
				"Project made for Haryana Govt. (India) to track oxygen cylinders during the peak of covid second wave in India. Facilitated the flow and tracking of cylinders to civilians and doctors from distributors identified by QR code and cylinder number",
			features: [
				"Product featured in news articles and appreciated",
				"Resulted in faster delivery of oxygen cylinders to the needy and enhanced tracking of the same",
			],
			logo: "oxyTracker.png",
			company: "",
			linkText: "View Project",
			link: "https://github.com/ambuj-krishna-agrawal/OxyTracker",
		},
		{
			title: "learn.ai",
			description:
				"As a part of hackathon, worked with team to make a platform to help the learning of machine learning in a playful and engaging way where the users can interact with object to make customized model and get corresponding PyTorch code in realtime",
			features: [
				"Stood top 10 in 300+ submissions for Hack 36 organized by MNNIT Allahabad, India",
				"Used p5.js to create playground for the student to play around with models",
			],
			logo: "learn_ai.jpg",
			company: "",
			linkText: "View Project",
			link: "https://github.com/zerefwayne/learn.ai",
		},
		{
			title: "Sync-It",
			description:
			"Made a platform that converts a YouTube playlist to a Spotify playlist and vice versa. Optimized the searching and mapping algorithm that powered this conversion to give better results than anything in the market.",
			features: [
				"Stood 7th in 250+ submissions for hack the mountain 2.0",
				"Best in class conversion based on a lot of heuristics applied on spotify data",
			],
			logo: "sync.svg",
			company: "",
			linkViewDemoText: "View Demo Video",
			linkViewDemo: "https://www.youtube.com/watch?v=xoaOH6OjWFM&list=LL",
			linkText: "View Project",
			link: "https://github.com/ambuj-krishna-agrawal/yt-sp-convertor",
		},
	],
};

export default INFO;
