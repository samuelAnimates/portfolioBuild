import React from "react";
import "./PlaysAndWritingsContainer.css";
import GenericFloatingSection from "../GenericFloatingSection";

const PlaysAndWritingsContainer = React.forwardRef((props, ref) => (
	
	<div className="margin-auto width-100pc">
		<div className="padding-left-p5em padding-right-p5em">
			<GenericFloatingSection colorSchemeSuffix={props.colorSchemeSuffix}>
				<div className={ "color-inherit paddng-bottom-1em paddng-left-1em paddng-right-1em paddng-top-1em text-center projectPageOverview-color-scheme-" + props.colorSchemeSuffix }> 
					<div>
						<h2 tabIndex="0" ref={ ref }>The {props.title}!</h2>
						<p>Click the buttons below to show/hide the summary of each {props.lede}.</p>
					</div>
					<div className="padding-bottom-p5em padding-top-p5em text-left">
						{ props.children }
					</div>
				</div>
			</GenericFloatingSection>
		</div>
	</div>

));

export default PlaysAndWritingsContainer;