// Sets an HTML class based on local hour. CSS in styles.css applies subtle drifts.
import SETTINGS from "../content/settings.json";

const CLASSES = ["time-morning", "time-midday", "time-evening", "time-night"];

const bucket = (h) => {
	if (h >= 5 && h < 11) return "time-morning";
	if (h >= 11 && h < 17) return "time-midday";
	if (h >= 17 && h < 22) return "time-evening";
	return "time-night";
};

export function initTimeOfDay() {
	if (!SETTINGS.timeOfDay?.enabled) return () => {};
	if (typeof document === "undefined") return () => {};
	const apply = () => {
		const cls = bucket(new Date().getHours());
		const el = document.documentElement;
		CLASSES.forEach((c) => el.classList.remove(c));
		el.classList.add(cls);
	};
	apply();
	const id = setInterval(apply, 60 * 1000);
	return () => clearInterval(id);
}
