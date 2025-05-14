import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;
	if (link === undefined) link = true;

	const imageElement = (
		<svg
			className="animated-logo"
			width={width || 48}
			height={width || 48}
			viewBox="0 0 256 256"
			xmlns="http://www.w3.org/2000/svg"
			style={{ display: "block" }}
		>
			<defs>
				<linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#f4f1eb" />
					<stop offset="100%" stopColor="#e9e3db" />
				</linearGradient>
				<linearGradient id="accent-grad" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stopColor="#9a8c78">
						<animate 
							attributeName="stop-color" 
							values="#9a8c78; #b2a08b; #9a8c78" 
							dur="8s" 
							repeatCount="indefinite" 
						/>
					</stop>
					<stop offset="100%" stopColor="#7d7164">
						<animate 
							attributeName="stop-color" 
							values="#7d7164; #968b7d; #7d7164" 
							dur="8s" 
							repeatCount="indefinite" 
						/>
					</stop>
				</linearGradient>
				<filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
					<feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.10" />
				</filter>
			</defs>
			<circle
				cx="128"
				cy="128"
				r="118"
				fill="url(#bg-grad)"
				stroke="#d5cec4"
				strokeWidth="4"
				className="ring-draw"
			/>
			<polygon
				points="128,60 80,196 96,196 112,152 144,152 160,196 176,196"
				fill="url(#accent-grad)"
				filter="url(#shadow)"
			/>
			<circle cx="128" cy="96" r="6" fill="url(#accent-grad)" className="node-pop" />
			<circle cx="112" cy="152" r="4" fill="url(#accent-grad)" className="node-pop" />
			<circle cx="144" cy="152" r="4" fill="url(#accent-grad)" className="node-pop" />
			<line x1="128" y1="96" x2="112" y2="152" stroke="#ae9d8c" strokeWidth="1" strokeOpacity="0.4" className="line-fade" />
			<line x1="128" y1="96" x2="144" y2="152" stroke="#ae9d8c" strokeWidth="1" strokeOpacity="0.4" className="line-fade" />
			<line x1="112" y1="152" x2="144" y2="152" stroke="#ae9d8c" strokeWidth="1" strokeOpacity="0.4" className="line-fade" />
		</svg>
	);

	return (
		<React.Fragment>
			{link ? (
				<div className="logo-home-wrapper">
					<Link to="/" className="logo-link" title="Go to Homepage">
						{imageElement}
						<div className="home-indicator">
							<FontAwesomeIcon icon={faHome} className="home-icon" />
							<span className="home-text">Home</span>
						</div>
					</Link>
				</div>
			) : (
				imageElement
			)}
		</React.Fragment>
	);
};

export default Logo;