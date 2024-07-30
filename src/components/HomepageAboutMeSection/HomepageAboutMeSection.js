import React from "react";
import "./HomepageAboutMeSection.css";
import GenericFloatingSection from "../GenericFloatingSection";
import HomepageProjectLinksContainer from "../HomepageProjectLinksContainer";
import LinkContainerWithGenericIcon from "../../components/LinkContainerWithGenericIcon"
import InlineA from "../InlineA";
import SheerWhiteContainer from '../SheerWhiteContainer';

const HomepageAboutMeSection = React.forwardRef((props, ref) => (
	<GenericFloatingSection colorSchemeSuffix={ props.colorSchemeSuffix }>
		<div className={ "homepageAboutMeSection-color-scheme-" + props.colorSchemeSuffix + " color-inherit padding-left-p5em padding-right-p5em"}>
			<SheerWhiteContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
				<h2 tabIndex="0" className="text-center" ref={ ref }>About Me</h2>
			</SheerWhiteContainer>
			
			{ props.isMobile === false &&
				<div className="align-items-center display-flex flex-direction-row padding-bottom-1em padding-top-1em">
					<div style={{"width": props.portraitWidth }}>
						<div className="font-Assistant padding-left-20px padding-right-20px">
							<div className="max-height-12em margin-auto text-center width-75pc">
								<img alt="" className="height-auto margin-auto max-height-12em max-width-100pc" src="./assets/images/branding/portrait.svg"></img>
							</div>
							<div className="font-Overpass font-size-p75em padding-T-1p5em">
								<p>"{ props.quote }"</p>
							</div>
						</div>
					</div>
					<div style={{"width": props.blurbWidth }}>
							{props.paragraphs.map(paragraph =>
								<div className="font-Assistant padding-left-20px padding-right-20px">
									{ paragraph.includesLink === false &&
										<p key={ paragraph.id } className="padding-top-p5em padding-bottom-p5em">
											<span className="font-weight-600">{ paragraph.lead }:&nbsp;</span>{ paragraph.body }
										</p>
									}
									{ paragraph.includesLink === true &&
										<p key={ paragraph.id } className="padding-top-p5em padding-bottom-p5em">
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
										</p>
									}
								</div>
							)}
					</div>
				</div>
			}
			{ props.isMobile === true &&
				<div className="display-flex flex-direction-column">
					<div className="margin-auto" style={{"width": props.portraitWidth }}>
						<div className="font-Assistant  padding-left-20px padding-right-20px padding-top-1em">
							<div className="max-height-12em margin-auto text-center width-75pc">
								<img alt="" className="height-auto margin-auto max-height-12em max-width-100pc" src="./assets/images/branding/portrait.svg"></img>
							</div>
							<div className="font-Overpass font-size-p75em padding-T-1p5em">
								<p>"{ props.quote }"</p>
							</div>
						</div>
					</div>
					<div style={{"width": props.blurbWidth }}>
					{props.paragraphs.map(paragraph =>
						<div key={ paragraph.id } className="font-Assistant padding-left-20px padding-right-20px">
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
							</div>
						)}
					</div>
				</div>
			}	
			<div className="margin-auto padding-top-1em padding-bottom-p25em">
				<HomepageProjectLinksContainer
					links = { props.links }
					colorSchemeSuffix={ props.colorSchemeSuffix }
					materialIconFill={ props.materialIconFill }
				/>
			</div>
		</div>
	</GenericFloatingSection>
));

export default HomepageAboutMeSection;