import React, { Component } from 'react';
import "./MediaProject.css";
import GenericFloatingSection from '../../components/GenericFloatingSection';
import MediaItem from '../../components/MediaItem';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader';
import WritingItem from '../../components/WritingItem';

class MediaProject extends Component {
	state = {
		colorSchemeSuffix: "default",
		fontSizeLevel: 1,
		isMobileView: true,
		mainPaddingLeftClassName: "padding-left-0em",
		responsiveFloat:"none",
		responsiveWidth:"50%",
		navbarLinks: [{title:"Synopsis", id:"navBarLinkSynopsis"},{title:"Highlights", id:"navBarLinkHighlights"},{title:"Overview", id:"navBarLinkOverview"},{title:"Articles", id:"writingNavBarLinkWritingsContainer"}]
	}

	projectInfo = {
		title: "Thought Leadership",
		synopsis:{
			mediaType: "photo",
			blurb: "A mix of research articles, interviews, and reviews.",
			embed: {
				src: "../assets/images/projectPhotos/thoughts.png",
				alt: "Collage of article headlines"
			},
			year: "2013 to present",
			specs: []
		},
		highlights: [
			{
				id: "writingHighlights01",
				lead: "Goal",
				body: "I write to share my work with different audiences. I aim to highlight important issues and lift up work advancing health equity"
			},
			{
				id: "writingHighlights02",
				lead: "Lessons Learned",
				body: "I have learned to not let 'perfect' be the enemy of 'done.' Timeliness and relevance is important for non-academic writing. Pitching something is better than pitching nothing."
			}
		],
		overview: [
			{
				id: "writingOverview01",
				lead: "Approach",
				body: "I use health literacy practices into my non-academic writing. This includes incorporating calls-to-action so people know what to do with the info I share. It also includes shorter sentences and shorter paragraphs. Getting even 10 seconds of someone's attention is hard. So I try to make it count."
			},
			{
				id: "writingOverview02",
				lead: "Outcomes",
				body: "My work has appeared in different kinds of publications, reaching audience with different interests, including arts, technology, public health, and news. Sharing my work helped open the door to being on the Council for Quality Health Communication. It also helped position me to contribute my expert perspective on news reporting of online harassment of medical professionals."
			}
		]		
	}

	opedsList = [
		{
			authors: "Mendez SR",
			id: "opedsList01",
			lede: "Antiscience harassment",
			link: "https://harvardpublichealth.org/policy-practice/peter-hotez-wont-be-the-last-health-worker-harassed-online/",
			publisher: "Harvard Public Health",
			title: "Harassment in public health is real. Here's how to respond.",
			year: "2024"
		},
		{
			authors: "Mendez SR",
			id: "opedsList02",
			lede: "Social media regulation",
			link: "https://thefulcrum.us/media-technology/health-misinformation",
			publisher: "The Fulcrum",
			title: "Medical disinformation is bad for our health and for democracy ",
			year: "2024"
		}

	]

	mediaList = [
		{
			authors: "Cuno-Booth P",
			id: "mediaList01",
			lede: "Expert interview on antiscience harassment",
			link: "https://www.nhpr.org/health/2024-02-27/nh-doctor-threatened-harassed-after-being-falsely-linked-to-video-of-racist-slurz",
			publisher: "Board Gaming with Education",
			title: "After he was falsely linked to a racist confrontation on TikTok, a NH doctor is now trying to rebuild his online reputation",
			year: "2024"
		},
		{
			authors: "Staats D",
			id: "mediaList02",
			lede: "Interview about my UNFUNDABLE board game",
			link: "https://boardgamingwithenglish.libsyn.com/episode-97-designing-a-game-for-academic-application-and-appealing-to-a-game-hobbyists-feat-sam-mendez",
			publisher: "Board Gaming with Education",
			title: "Designing a Game for Academic Application and Appealing to Game Hobbyists",
			year: "2020"
		}

	]

	writingsListArtsTech = [
		{
			authors: "Mendez SR",
			id: "writingsList01",
			lede: "Assistve Technology Course at MIT",
			link: "https://medium.com/immerse-now/centering-people-with-disabilities-in-engineering-373f827840dc",
			publisher: "Immerse",
			title: "Centering People with Disabilities in Engineering",
			year: "2020"
		},
		{
			authors: "Kim A and Mendez SR",
			id: "writingsList02",
			lede: "Artist Interview",
			link: "https://immerse.news/the-artist-engineer-in-vr-in-conversation-with-xin-liu-and-qinya-guo-d5096264b193",
			publisher: "Immerse",
			title: "The Artist-Engineer in VR",
			year: "2020"
		},
		{
			authors: "Mendez SR",
			id: "writingsList03",
			lede: "Climate Change VR",
			link: "https://www.indiewire.com/2020/02/sundance-2020-vr-climate-change-1202208386/",
			publisher: "IndieWire",
			title: "Sundance VR Tackled Climate Change With Groundbreaking New Projects",
			year: "2020"
		},
		{
			authors: "Mendez SR",
			id: "writingsList04",
			lede: "Intersectional Hackathon",
			link: "https://immerse.news/building-irreverent-and-intersectional-futures-7b8401185683",
			publisher: "Immerse",
			title: "Building Irreverent and Intersectional Futures: Design justice and co-creation in the ‘Make the Breast Pump Not Suck’ Hackathon",
			year: "2019"
		}

	]

	writingNavbarLinks = [{title:"Synopsis", id:"writingNavBarLinkSynopsis"},{title:"Highlights", id:"writingNavBarLinkHighlights"},{title:"Overview", id:"writingNavBarLinkOverview"},{title:"Articles", id:"writingNavBarLinkWritingsContainer"}];
	writingSynopsisSectionRef = React.createRef();
	writingHighlightsSectionRef = React.createRef();
	writingNavbarRef = React.createRef();
	writingOverviewSectionRef = React.createRef();
	writingMediaContainerRef = React.createRef();

	componentDidMount() {
		document.title = "Writing Projects Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "writingNavBarLinkSynopsis"){
			this.writingSynopsisSectionRef.current.scrollIntoView();
			this.writingSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "writingNavBarLinkHighlights"){
			this.writingHighlightsSectionRef.current.scrollIntoView();
			this.writingHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "writingNavBarLinkOverview"){
			this.writingOverviewSectionRef.current.scrollIntoView();
			this.writingOverviewSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "writingNavBarLinkWritingsContainer"){
			this.writingMediaContainerRef.current.scrollIntoView();
			this.writingMediaContainerRef.current.focus();
		};
	}

	render() {
		return (
			<div className={ this.props.colorSchemeNameRoot + this.props.colorSchemeSuffix }>
				{ this.props.isMobileView === false &&
					<div className="font-Overpass position-fixed left-0">
						<SamePageNavBar
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.writingNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.writingNavbarLinks }
						/>
					</div>
				}
				<div className="display-flex flex-direction-column">
					<ProjectPageMainSections
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						doNotTrack={ this.props.doNotTrack }
						float={ this.props.responsiveFloat }
						isMobile={ this.props.isMobileView }
						width={ this.props.responsiveWidth }
						highlightsSectionRef={ this.writingHighlightsSectionRef }
						projectInfo={ this.projectInfo }
						overviewSectionRef={ this.writingOverviewSectionRef }
						synopsisSectionRef={ this.writingSynopsisSectionRef }
					/>
					<div className="margin-auto width-100pc">
						<div className="padding-left-p5em padding-right-p5em">
							<GenericFloatingSection colorSchemeSuffix={ this.props.colorSchemeSuffix }>
								<div className={ "color-inherit paddng-bottom-1em paddng-left-1em paddng-right-1em paddng-top-1em text-center mediaProjectPageOverview-color-scheme-" + this.props.colorSchemeSuffix }> 
									<div>
										<h2 tabIndex="0" ref={ this.writingMediaContainerRef }>Articles & More</h2>
										<p>Here are some highlights from my public writing and media appearances:</p>
									</div>
									<div className="padding-bottom-p5em padding-top-p5em text-left">
										<div className="display-flex flex-direction-column padding-bottom-p25em padding-left-p5em padding-right-p5em padding-top-p25em">
										<h3 className=" padding-top-p5em text-center">Op-Eds</h3>
											<ul className="list-style-type-none list-style-position-outside padding-left-1em padding-bottom-1em">
											{ this.opedsList.map(media =>
												<li className="padding-bottom-p25em padding-top-p25em text-indent-neg1p7em">
													<MediaItem
														authors={ media.authors }
														colorSchemeSuffix={ this.props.colorSchemeSuffix }
														key={ media.id }
														lede={ media.lede }
														link={ media.link }
														materialIconFill={this.props.materialIconFill}
														publisher={ media.publisher }
														title={ media.title }
														year={ media.year }
													/>
												</li>
											)}
											</ul>
											<h3 className=" padding-top-p5em text-center">Media Appearances</h3>
											<ul className="list-style-type-none list-style-position-outside padding-left-1em padding-bottom-1em">
											{ this.mediaList.map(writing =>
												<li className="padding-bottom-p25em padding-top-p25em text-indent-neg1p7em">
													<WritingItem
														authors={ writing.authors }
														colorSchemeSuffix={ this.props.colorSchemeSuffix }
														key={ writing.id }
														lede={ writing.lede }
														link={ writing.link }
														materialIconFill={this.props.materialIconFill}
														publisher={ writing.publisher }
														title={ writing.title }
														year={ writing.year }
													/>
												</li>
											)}
											</ul>
											<h3 className="padding-top-p5em text-center">Reviews & Perspectives</h3>
											<ul className="list-style-type-none padding-left-1em">
											{ this.writingsListArtsTech.map(writing =>
												<li className="padding-bottom-p25em padding-top-p25em text-indent-neg1p7em">
													<WritingItem
														authors={ writing.authors }
														colorSchemeSuffix={ this.props.colorSchemeSuffix }
														key={ writing.id }
														lede={ writing.lede }
														link={ writing.link }
														materialIconFill={this.props.materialIconFill}
														publisher={ writing.publisher }
														title={ writing.title }
														year={ writing.year }
													/>
												</li>
											)}
											</ul>
										</div>
									</div>
								</div>
							</GenericFloatingSection>
						</div>
					</div>
						
				</div>				
			</div>
		);
  	}
}

export default MediaProject;