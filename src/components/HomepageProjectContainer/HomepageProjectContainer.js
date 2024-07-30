import React from "react";
import "./HomepageProjectContainer.css";
import LinkContainerWithGenericIcon from "../../components/LinkContainerWithGenericIcon"
import HomepageProjectIconContainer from "../HomepageProjectIconContainer";
import HomepageProjectLinksContainer from "../HomepageProjectLinksContainer";
import InlineA from "../InlineA";

const HomepageProjectContainer = props => (
    <div className={ "homepage-project-container-color-scheme-" + props.colorSchemeSuffix + " border-style-solid border-width-2px clear-both color-inherit font-Assistant padding-left-p5em padding-right-p5em padding-top-1p5em width-100pc"}>
		<div className="padding-bottom-1em padding-left-p5em">
			{ props.isMobile === false &&
				<div className="align-items-center display-flex flex-direction-row">
					<div>
						<HomepageProjectIconContainer
							icon = { props.project.icon }
							iconAlt = { props.project.iconAlt }
						/>
					</div>
					<div className="padding-left-p5em">
						<h3>
							<LinkContainerWithGenericIcon
								materialIconFill={ props.materialIconFill }
							>
								<InlineA
									isInternalLink={ true }
									text={ props.project.title }
									urlPath={ props.project.projectPagePath }
									colorSchemeSuffix ={ props.colorSchemeSuffix }
								/>
							</LinkContainerWithGenericIcon>
						</h3>
						<p>{ props.project.description }</p>
					</div>
				</div>
			}
			{ props.isMobile === true &&
				<div className="display-flex flex-direction-column">
					<div className="margin-auto" style={{"width":"90%"}}>
						<HomepageProjectIconContainer
							icon = { props.project.icon }
							iconAlt = { props.project.iconAlt }
						/>
					</div>
					<div style={{"width":"100%"}}>
						<h3>
							<LinkContainerWithGenericIcon
								materialIconFill={ props.materialIconFill }
							>
								<InlineA
									isInternalLink={ true }
									text={ props.project.title }
									urlPath={ props.project.projectPagePath }
									colorSchemeSuffix ={ props.colorSchemeSuffix }
								/>
							</LinkContainerWithGenericIcon>
						</h3>
						<p>{ props.project.description }</p>
					</div>
				</div>
			}
			
		</div>
		{ props.project.links.length>0 &&
			<div className="padding-bottom-p25em">
				<HomepageProjectLinksContainer
					links={ props.project.links }
					colorSchemeSuffix={ props.colorSchemeSuffix }
					materialIconFill={ props.materialIconFill }
				/>
			</div>
		}
    </div>
);

export default HomepageProjectContainer;