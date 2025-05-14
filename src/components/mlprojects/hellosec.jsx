import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode, faShieldAlt, faLock, faRobot, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./styles/hellosec.css";

const HelloSecProject = () => {
    return (
        <div className="hellosec-container">
            <div className="hellosec-header">
                <div className="hellosec-logo-container">
                    <div className="hellosec-logo">
                        <FontAwesomeIcon icon={faShieldAlt} />
                    </div>
                    <h1 className="hellosec-title">HelloSec.AI</h1>
                </div>
                <div className="hellosec-links">
                    <a 
                        href="https://www.hellosec.ai/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hellosec-link"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open("https://www.hellosec.ai/", "_blank", "noopener,noreferrer");
                        }}
                    >
                        <FontAwesomeIcon icon={faGlobe} />
                        <span>Website</span>
                    </a>
                    <a 
                        href="https://beta.hellosec.ai/sign-in" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hellosec-link"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open("https://beta.hellosec.ai/sign-in", "_blank", "noopener,noreferrer");
                        }}
                    >
                        <FontAwesomeIcon icon={faLock} />
                        <span>Beta Platform</span>
                    </a>
                    <a 
                        href="https://www.linkedin.com/posts/aseemshrey_aivs-cmu-aivs-activity-7320618647645802496-Vfgu" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hellosec-link"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open("https://www.linkedin.com/posts/aseemshrey_aivs-cmu-aivs-activity-7320618647645802496-Vfgu", "_blank", "noopener,noreferrer");
                        }}
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span>CMU AI/VS Post</span>
                    </a>
                </div>
            </div>

            <div className="hellosec-tagline">
                End-to-end product security platform with plug-and-protect AI security agents
            </div>

            <div className="hellosec-video-container">
                <iframe 
                    src="https://drive.google.com/file/d/181k2WB03QGlxKKLodpG0iuDn-RcOuBSY/preview" 
                    allow="autoplay" 
                    className="hellosec-video"
                ></iframe>
            </div>

            <div className="hellosec-features">
                <div className="hellosec-feature">
                    <div className="hellosec-feature-icon">
                        <FontAwesomeIcon icon={faShieldAlt} />
                    </div>
                    <div className="hellosec-feature-content">
                        <h3 className="hellosec-feature-title">Plug-and-Protect Security Agents</h3>
                        <p className="hellosec-feature-description">
                            AI-powered agents deploy instantly into development and production environments—no lengthy configuration or onboarding required. Security is active from day one.
                        </p>
                    </div>
                </div>

                <div className="hellosec-feature">
                    <div className="hellosec-feature-icon">
                        <FontAwesomeIcon icon={faRobot} />
                    </div>
                    <div className="hellosec-feature-content">
                        <h3 className="hellosec-feature-title">Comprehensive Security Coverage</h3>
                        <p className="hellosec-feature-description">
                            <strong>Threat Agent:</strong> Design-time security and compliance checks<br/>
                            <strong>Browser Agent:</strong> Continuous vulnerability scanning in live user flows<br/>
                            <strong>Hack Agent:</strong> Smart attack simulation with risk-based vulnerability ranking
                        </p>
                    </div>
                </div>

                <div className="hellosec-feature">
                    <div className="hellosec-feature-icon">
                        <FontAwesomeIcon icon={faCode} />
                    </div>
                    <div className="hellosec-feature-content">
                        <h3 className="hellosec-feature-title">End-to-End Security Testing</h3>
                        <p className="hellosec-feature-description">
                            Comprehensive, automated end-to-end security testing maps your entire web application architecture and user flows, ensuring every component and interaction point is assessed for risk.
                        </p>
                    </div>
                </div>

                <div className="hellosec-feature">
                    <div className="hellosec-feature-icon">
                        <FontAwesomeIcon icon={faChartLine} />
                    </div>
                    <div className="hellosec-feature-content">
                        <h3 className="hellosec-feature-title">CMU AI/VS Presentation Experience</h3>
                        <p className="hellosec-feature-description">
                            Presented at the AI/VS event at Carnegie Mellon University, gaining invaluable experience conversing with startup investors face-to-face and understanding their expectations for AI security startups.
                        </p>
                    </div>
                </div>
            </div>

            <div className="hellosec-quote">
                <blockquote>
                    "HelloSec AI makes robust security accessible and effortless by delivering plug-and-protect AI security agents that integrate instantly—no complex setups required."
                </blockquote>
            </div>
        </div>
    );
};

export default HelloSecProject;