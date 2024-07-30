import React from "react";
import "./AudioEmbedContainer.css";

const AudioEmbedContainer = props => (
	<audio controls className="display-block margin-auto text-center width-90pc">
		<source src={ props.embed.src } type="audio/mpeg"/>
		Your browser does not support the audio element.
	</audio>
);

export default AudioEmbedContainer;