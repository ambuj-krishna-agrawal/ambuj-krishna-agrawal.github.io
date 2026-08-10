import React from "react";
import { PROFILE } from "../../lib/content";
import "./styles/statusChip.css";

const StatusChip = () => {
	const s = PROFILE.status;
	if (!s) return null;
	return (
		<div className={`status-chip ${s.active ? "is-active" : ""}`}>
			<span className="status-dot" />
			<div className="status-lines">
				<span className="status-label">{s.label}</span>
				{s.detail && <span className="status-detail">{s.detail}</span>}
			</div>
		</div>
	);
};

export default StatusChip;
