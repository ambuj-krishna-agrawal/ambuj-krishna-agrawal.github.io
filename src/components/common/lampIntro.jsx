import React, { useEffect, useState } from "react";
import { subscribeToLamp } from "../../lib/lampControl";
import "./styles/lampIntro.css";

const STORAGE_KEY = "intro-seen-v1";

const LampIntro = () => {
	const [state, setState] = useState("hidden"); // hidden | dim | on | dismissed
	const [swayKey, setSwayKey] = useState(0);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const alreadySeen = sessionStorage.getItem(STORAGE_KEY);
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (alreadySeen || reducedMotion) {
			setState("dismissed");
			return;
		}
		setState("dim");
		document.documentElement.classList.add("intro-locked");
	}, []);

	useEffect(() => {
		return subscribeToLamp(() => {
			sessionStorage.removeItem(STORAGE_KEY);
			document.documentElement.classList.add("intro-locked");
			setState("dim");
			setSwayKey((k) => k + 1);
		});
	}, []);

	if (state === "dismissed" || state === "hidden") return null;

	const turnOn = () => {
		if (state !== "dim") return;
		setState("on");
		setSwayKey((k) => k + 1);
		setTimeout(() => {
			sessionStorage.setItem(STORAGE_KEY, "1");
			document.documentElement.classList.remove("intro-locked");
			setState("dismissed");
		}, 1500);
	};

	return (
		<div
			className={`lamp-intro lamp-intro--${state}`}
			role="dialog"
			aria-label="Welcome"
		>
			<div className="lamp-scene">
				<div className="lamp-glow" aria-hidden="true" />

				<button
					className="lamp"
					onClick={turnOn}
					aria-label="Turn on the light"
				>
					<span className="lamp-cord">
						<span key={swayKey} className="lamp-cord-swing">
							<span className="lamp-cord-line" />
							<span className="lamp-cord-knob" />
						</span>
					</span>

					<span className="lamp-bulb">
						<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<radialGradient id="bulbGlass" cx="50%" cy="45%" r="55%">
									<stop offset="0%" stopColor="#fff6dd" stopOpacity="0.95" />
									<stop offset="60%" stopColor="#f2e3b8" stopOpacity="0.9" />
									<stop offset="100%" stopColor="#c9b485" stopOpacity="0.9" />
								</radialGradient>
								<radialGradient id="bulbOn" cx="50%" cy="45%" r="55%">
									<stop offset="0%" stopColor="#fff2c8" />
									<stop offset="45%" stopColor="#ffd074" />
									<stop offset="100%" stopColor="#e08a2a" />
								</radialGradient>
							</defs>
							<path
								d="M50 8 C25 8 15 30 20 52 C24 68 34 74 36 88 L64 88 C66 74 76 68 80 52 C85 30 75 8 50 8 Z"
								className="bulb-shell"
							/>
							<rect x="34" y="90" width="32" height="8" rx="2" className="bulb-cap" />
							<rect x="36" y="100" width="28" height="6" rx="2" className="bulb-cap" />
							<rect x="38" y="108" width="24" height="6" rx="2" className="bulb-cap" />
							<path
								d="M40 46 L45 60 L50 46 L55 60 L60 46"
								className="bulb-filament"
								fill="none"
							/>
						</svg>
					</span>
				</button>

				<div className="lamp-caption">
					<span className="lamp-caption-hint serif">click the lamp</span>
				</div>
			</div>
		</div>
	);
};

export default LampIntro;
