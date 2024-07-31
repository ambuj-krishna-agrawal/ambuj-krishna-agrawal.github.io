import { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import { TRACKING_ID } from "./data/tracking";
import "./app.css";
function App() {
    useEffect(() => {
        if (TRACKING_ID !== "") {
            ReactGA.initialize(TRACKING_ID);
        }
        // Add the Topmate script
        const script = document.createElement("script");
        script.src = "https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js";
        script.async = true;
        script.defer = true;
        script.setAttribute("user-profile", "https://topmate.io/embed/profile/ambuj_agrawal11?theme=D5534D");
        script.setAttribute("btn-style", '{"backgroundColor":"#000","color":"#fff","border":"1px solid #000"}');
        script.setAttribute("embed-version", "v1");
        script.setAttribute("button-text", "Let's Connect");
        script.setAttribute("position-right", "30px");
        script.setAttribute("position-bottom", "30px");
        script.setAttribute("custom-padding", "0px");
        script.setAttribute("custom-font-size", "16px");
        script.setAttribute("custom-font-weight", "500");
        script.setAttribute("custom-width", "200px");

        script.onload = () => {
            console.log("Topmate script loaded successfully.");
        };

        script.onerror = () => {
            console.error("Failed to load Topmate script.");
        };

        document.body.appendChild(script);

        // Cleanup script on unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return ( 
        <div className="App">
			{console.log("hello " + process.env.PUBLIC_URL)}
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="articles" element={<Articles />} />
                    <Route path="article/:slug" element={<ReadArticle />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;