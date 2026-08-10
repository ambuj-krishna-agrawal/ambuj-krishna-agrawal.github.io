// Tiny pub-sub so any component can ask the LampIntro overlay to re-appear.
const listeners = new Set();

export function subscribeToLamp(cb) {
	listeners.add(cb);
	return () => listeners.delete(cb);
}

export function requestLampOff() {
	listeners.forEach((cb) => cb());
}
