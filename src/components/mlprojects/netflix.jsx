import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faGlobe, faChartLine, faRobot, faMicrophone, faLanguage } from "@fortawesome/free-solid-svg-icons";

import "./styles/netflix.css";

const NetflixProject = () => {
    return (
        <div className="netflix-container">
            <div className="netflix-header">
                <div className="netflix-logo-container">
                    <div className="netflix-logo">
                        <FontAwesomeIcon icon={faMusic} />
                    </div>
                    <h1 className="netflix-title">Multilingual Audio Retrieval for Synthetic Dubbing</h1>
                </div>
                <div className="netflix-company">
                    <span className="netflix-company-text">Netflix • Localization Team</span>
                    <span className="netflix-date">May 2025 – Aug 2025</span>
                </div>
            </div>

            <div className="netflix-tagline">
                Full-catalog audio retrieval system for style/emotion transfer in multilingual synthetic dubbing
            </div>

            <div className="netflix-overview">
                <div className="netflix-overview-content">
                    <h3>Project Overview</h3>
                    <div className="netflix-bullet-points">
                        <p>• Built a full-catalog audio retrieval system at Netflix to choose reference clips for style/emotion transfer from English to target languages in synthetic dubbing; fine-tuned wav2vec2-2B with contrastive loss for multilingual dubbing embeddings.</p>
                        <p>• Made an auto evaluation suite to automate the process of finding models/setups/hyperparameters that give better dub in the context of emotion/speaker style matching. Followed it up with a human evaluation study on Labelbox as well.</p>
                        <p>• Evaluations show an improvement of ~7.5% with auto evals and ~13% win rate with human preference (CMOS: +0.2) in the synthetic voice. The finetuned embedding model outperformed all the off-the-shelf models.</p>
                    </div>
                </div>
            </div>

            <div className="netflix-features">
                <div className="netflix-feature">
                    <div className="netflix-feature-icon">
                        <FontAwesomeIcon icon={faRobot} />
                    </div>
                    <div className="netflix-feature-content">
                        <h3 className="netflix-feature-title">Advanced Audio Embedding Model</h3>
                        <p className="netflix-feature-description">
                            • Fine-tuned wav2vec2-2B with contrastive loss for multilingual dubbing embeddings<br/>
                            • Designed and implemented a full-catalog audio retrieval system for reference clip selection<br/>
                            • Optimized embeddings specifically for style and emotion transfer across different languages
                        </p>
                    </div>
                </div>

                <div className="netflix-feature">
                    <div className="netflix-feature-icon">
                        <FontAwesomeIcon icon={faChartLine} />
                    </div>
                    <div className="netflix-feature-content">
                        <h3 className="netflix-feature-title">Automated Evaluation Suite</h3>
                        <p className="netflix-feature-description">
                            • Built comprehensive auto evaluation pipeline to optimize models, setups, and hyperparameters<br/>
                            • Automated the process of finding better dubbing quality in emotion/speaker style matching context<br/>
                            • Integrated evaluation metrics for objective assessment of dubbing quality improvements
                        </p>
                    </div>
                </div>

                <div className="netflix-feature">
                    <div className="netflix-feature-icon">
                        <FontAwesomeIcon icon={faMicrophone} />
                    </div>
                    <div className="netflix-feature-content">
                        <h3 className="netflix-feature-title">Human Evaluation Study</h3>
                        <p className="netflix-feature-description">
                            • Conducted comprehensive human evaluation study using Labelbox platform<br/>
                            • Designed comparative evaluation framework for assessing synthetic voice quality<br/>
                            • Implemented CMOS (Comparative Mean Opinion Score) methodology for preference testing
                        </p>
                    </div>
                </div>

                <div className="netflix-feature">
                    <div className="netflix-feature-icon">
                        <FontAwesomeIcon icon={faLanguage} />
                    </div>
                    <div className="netflix-feature-content">
                        <h3 className="netflix-feature-title">Performance Results</h3>
                        <p className="netflix-feature-description">
                            • Achieved ~7.5% improvement with automated evaluations<br/>
                            • Demonstrated ~13% win rate with human preference studies<br/>
                            • CMOS score improvement of +0.2 in synthetic voice quality<br/>
                            • Fine-tuned embedding model outperformed all off-the-shelf alternatives
                        </p>
                    </div>
                </div>
            </div>

            <div className="netflix-technical-stack">
                <h3>Technical Stack & Methods</h3>
                <div className="netflix-tech-grid">
                    <div className="netflix-tech-item">
                        <strong>Deep Learning:</strong> wav2vec2-2B, Contrastive Learning, Audio Embeddings
                    </div>
                    <div className="netflix-tech-item">
                        <strong>Evaluation:</strong> Automated Metrics, Human Preference Studies, CMOS
                    </div>
                    <div className="netflix-tech-item">
                        <strong>Audio Processing:</strong> Speech Recognition, Style Transfer, Emotion Analysis
                    </div>
                    <div className="netflix-tech-item">
                        <strong>Platform:</strong> Labelbox for Human Evaluation, Netflix Production Pipeline
                    </div>
                </div>
            </div>

            <div className="netflix-impact">
                <blockquote>
                    "This audio retrieval system significantly advances Netflix's synthetic dubbing capabilities, enabling more natural and emotionally authentic content localization across global markets."
                </blockquote>
            </div>
        </div>
    );
};

export default NetflixProject; 