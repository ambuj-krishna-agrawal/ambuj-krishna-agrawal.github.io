import React from "react";
import { useReveal } from "../../hooks/useReveal";
import SETTINGS from "../../content/settings.json";

import "./styles/reveal.css";

const Reveal = ({
	children,
	delay = 0,
	as: Tag = "div",
	className = "",
	style,
	...rest
}) => {
	const enabled = SETTINGS.scrollReveals?.enabled !== false;
	const { ref, visible } = useReveal();

	if (!enabled) {
		return (
			<Tag className={className} style={style} {...rest}>
				{children}
			</Tag>
		);
	}

	return (
		<Tag
			ref={ref}
			className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
			style={{ ...style, transitionDelay: `${delay}ms` }}
			{...rest}
		>
			{children}
		</Tag>
	);
};

export default Reveal;
