// Tiny pub-sub so the nav hint (or anything else) can open the command palette.
const listeners = new Set();

export function subscribeToPalette(cb) {
	listeners.add(cb);
	return () => listeners.delete(cb);
}

export function requestPaletteOpen() {
	listeners.forEach((cb) => cb());
}
