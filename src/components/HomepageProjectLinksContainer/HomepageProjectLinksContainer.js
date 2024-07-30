import React from "react";
import "./HomepageProjectLinksContainer.css";
import MaterialIcon from "../MaterialIcon";
import InlineA from "../InlineA";

const HomepageProjectLinksContainer = props => (
	<div className={ "align-items-center border-style-solid border-width-2-0-0-0 clear-both color-inherit display-flex flex-direction-row font-size-p75em margin-auto padding-top-p5em text-left homepageProjectLinksContainer-color-scheme-" + props.colorSchemeSuffix}>
		<h4 className="padding-left-p5em padding-right-p5em">External Links:</h4>
		<div className="display-inline-flex flex-direction-row flex-wrap-wrap">
			{ props.links.map(projectLink =>
				<div key={ projectLink.id } className="padding-left-p3em padding-right-p3em">				
					<MaterialIcon
						iconName={ projectLink.icon }
						materialIconFill={ props.materialIconFill }
					/>
					<InlineA
						isInternalLink={ projectLink.isInternalLink }	
						text={ projectLink.text }
						urlPath={ projectLink.path }
						colorSchemeSuffix ={ props.colorSchemeSuffix }
					/>
				</div>
			)}
		</div>
	</div>
);

export default HomepageProjectLinksContainer;