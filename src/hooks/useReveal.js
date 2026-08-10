import { useEffect, useRef, useState } from "react";

export function useReveal({ threshold = 0.12, rootMargin = "0px 0px -40px 0px" } = {}) {
	const ref = useRef(null);
	const [seen, setSeen] = useState(false);

	useEffect(() => {
		if (!ref.current || seen) return;
		if (typeof IntersectionObserver === "undefined") {
			setSeen(true);
			return;
		}
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setSeen(true);
					io.disconnect();
				}
			},
			{ threshold, rootMargin }
		);
		io.observe(ref.current);
		return () => io.disconnect();
	}, [threshold, rootMargin, seen]);

	return { ref, visible: seen };
}
