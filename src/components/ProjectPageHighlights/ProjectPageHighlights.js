import React from "react";
import "./ProjectPageHighlights.css";
import GenericFloatingSection from "../GenericFloatingSection";
import UnorderedBulletlessList from "../UnorderedBulletlessList";

const ProjectPageHighlights = React.forwardRef((props, ref) => (
	
	<div className="margin-auto" style={{ width: props.width }}>
		<div className="padding-left-p5em padding-right-p5em">
			<GenericFloatingSection colorSchemeSuffix={props.colorSchemeSuffix}>
				<div className={ "color-inherit paddng-bottom-1em paddng-left-1em paddng-right-1em paddng-top-1em text-center projectPageHighlights-color-scheme-" + props.colorSchemeSuffix }> 
					<div>
						<h3 tabIndex="0" ref={ ref }>Highlights</h3>
					</div>
					<div className="padding-top-p5em text-left">
						<UnorderedBulletlessList
							listItems={ props.highlights }
						/>
					</div>
				</div>
			</GenericFloatingSection>
		</div>
	</div>

));

export default ProjectPageHighlights;