import React from "react";
import "./ProjectHeader.css";

const ProjectHeader = props => (
	<h2 className="padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center">{props.title}</h2>
);

export default ProjectHeader;