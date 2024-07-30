import React from "react";
import "./HomepageMediaSection.css";
import GenericFloatingSection from "../GenericFloatingSection";
import LinkContainerWithGenericIcon from "../LinkContainerWithGenericIcon"
import InlineA from "../InlineA";
import SheerWhiteContainer from '../SheerWhiteContainer';

const HomepageMediaSection = React.forwardRef((props, ref) => (
	<GenericFloatingSection colorSchemeSuffix={ props.colorSchemeSuffix }>
		<div className={ "homepageMediaSection-color-scheme-" + props.colorSchemeSuffix + " color-inherit padding-left-p5em padding-right-p5em"}>
			<SheerWhiteContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
				<h2 tabIndex="0" className="text-center" ref={ ref }>Thought Leadership</h2>
			</SheerWhiteContainer>
			<div className="display-flex flex-direction-column padding-bottom-1em padding-left-p5em padding-right-p5em padding-top-1em">
				<p>It's important to share my voice to help bring important issues to light. So, I do more than just write research articles. Here are a couple exmaples of how I try to share with others through my own writing. And through engaging with media.</p>
				<ul className="list-style-square padding-left-1em">
				{props.paragraphs.map(paragraph =>
					<li key={ paragraph.id } className="font-Assistant padding-left-20px padding-right-20px">
						{ paragraph.includesLink === false &&
							<p className="padding-top-p5em padding-bottom-p5em">
								<span className="font-weight-600">{ paragraph.lead }:&nbsp;</span>{ paragraph.body }
							</p>
						}
						{ paragraph.includesLink === true &&
							<div className="padding-top-p5em padding-bottom-p5em">
								<span className="font-weight-600">{ paragraph.lead }:&nbsp;</span>
								{ paragraph.body[0].preLinkText }
								<LinkContainerWithGenericIcon
									materialIconFill={ props.materialIconFill }
								>
									<InlineA
										isInternalLink={ paragraph.body[0].linkIsInternalLink }	
										text={ paragraph.body[0].linkText }
										urlPath={ paragraph.body[0].linkUrl }
										colorSchemeSuffix ={ props.colorSchemeSuffix }
									/>
								</LinkContainerWithGenericIcon>
								{ paragraph.body[0].postLinkText }
							</div>
						}
					</li>
					)}
				</ul>
			</div>
			<div className="padding-left-p5em padding-right-p5em">
				<div className={ "border-style-solid border-width-2-0-0-0 clear-both color-inherit margin-auto padding-bottom-p5em padding-top-p5em text-center homepageProjectLinksContainer-color-scheme-" + props.colorSchemeSuffix}>
					<LinkContainerWithGenericIcon>
						<InlineA
							isInternalLink={ true }	
							text={ "See more of my writing and media coverage." }
							urlPath={ "/projects/media" }
							colorSchemeSuffix ={ props.colorSchemeSuffix }
						/>
					</LinkContainerWithGenericIcon>
				</div>
			</div>	
		</div>
		
	</GenericFloatingSection>
));

export default HomepageMediaSection;