import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import HelloSecProject from "../components/mlprojects/hellosec";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/mlprojects.css";

const MLProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "mlprojects");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`AI Full Stack Projects | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="page-content">
                <NavBar active="mlprojects" />
                <div className="content-wrapper">
                    {/* Removed logo container */}

                    <div className="mlprojects-container">
                        <div className="title mlprojects-title">
                            AI Full Stack Projects
                        </div>

                        <div className="subtitle mlprojects-subtitle">
                            Showcasing my journey in building real-world AI solutions and startups that combine cutting-edge machine learning with scalable full-stack development.
                        </div>

                        <div className="mlprojects-showcase">
                            <HelloSecProject />
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MLProjects;