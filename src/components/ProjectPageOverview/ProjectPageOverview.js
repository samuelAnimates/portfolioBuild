import React from "react";
import "./ProjectPageOverview.css";
import GenericFloatingSection from "../GenericFloatingSection";

const ProjectPageOverview = React.forwardRef((props, ref) => (
	
	<div className="margin-auto" style={{ width: props.width }}>
		<div className="padding-left-p5em padding-right-p5em">
			<GenericFloatingSection colorSchemeSuffix={props.colorSchemeSuffix}>
				<div className={ "color-inherit paddng-bottom-1em paddng-left-1em paddng-right-1em paddng-top-1em text-center projectPageOverview-color-scheme-" + props.colorSchemeSuffix }> 
					<div>
						<h3 tabIndex="0" ref={ ref }>Overview</h3>
					</div>
					<div className="padding-bottom-p5em padding-top-p5em text-left">
						{ props.overview.map( overviewSection =>
							<div key={ overviewSection.id } className="padding-bottom-p5em padding-top-p5em">
								<h4 className="display-inline">
									{ overviewSection.lead }:
								</h4>
								<p className="display-inline padding-bottom-p5em padding-top-p5em">
									&nbsp;{ overviewSection.body }
								</p>
							</div>
						)}
					</div>
				</div>
			</GenericFloatingSection>
		</div>
	</div>

));

export default ProjectPageOverview;