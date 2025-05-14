import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";
import { initScrollReveal, addElementAnimations } from "../utils/animations";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "research");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Research | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="homepage-container">
						<div className="title articles-title">{INFO.articles.title}</div>
						<div className="subtitle articles-subtitle">{INFO.articles.description}</div>
						<div className="all-articles-container">
							<div className="articles-list">
								{myArticles.map((article, index) => (
									<div className="articles-article" key={index}>
										<Article
											date={article().date}
											title={article().title}
											description={article().description}
											link={article().link}
											codelink={article().codelink}
											institute={article().institute}
											guide={article().guide}
											isPublished={article().isPublished}
										/>
									</div>
								))}
							</div>
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

export default Articles;
