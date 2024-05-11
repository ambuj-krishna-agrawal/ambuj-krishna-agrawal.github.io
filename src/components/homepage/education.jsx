import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/education.css";


const Education = (props) => {
	const { title, description, date, courses, gpa, institute, onlineCoursesList } = props;

	return (
		<React.Fragment>
			<div className="homepage-education">
				<div className="homepage-education-content">
					{date && <div className="homepage-education-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>}
					<div className="homepage-education-title">{title}</div>
                    {institute && <div className="homepage-education-institute"><b>{institute}</b></div>}
                    {description && <div className="homepage-education-description" dangerouslySetInnerHTML={{ __html: description }}></div>}
                    {gpa && <div className="homepage-education-gpa">Grade: <b>{gpa}</b></div>}
                    {courses.length > 0 && (
                <div className="homepage-education-all-courses">
                    Courses:
                    {courses.map((course, index) => (
                    <div key={index} className="homepage-education-uni-course">
                        &#8226; {course} {/* Bullet mark and feature */}
                    </div>
                    ))}
                </div>
                )}
				</div>

            {onlineCoursesList.length > 0 && onlineCoursesList.map((course, index) => (
                <div key={index} className="homepage-education-course">
                    {course.date && (
                    <div className="homepage-education-date_1">
                    |&nbsp;&nbsp;&nbsp;{course.date}
                    </div>
                )}
                <div className="homepage-education-course-name">Course: <b>{course.name}</b></div>
                <div className="homepage-education-course-institute">Source: <b>{course.institute}</b></div>
                
                {course.certificate && (
                    
                    <a href={course.certificate} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <div className="homepage-education-link">
                        <FontAwesomeIcon className="homepage-education-link-icon" icon={faLink} /> 
                        <div className="certificate-text">Certificate</div>
                        </div>
                    </a>
                )}
                </div>
            ))}

		    </div>
		</React.Fragment>
	);
};

export default Education;
