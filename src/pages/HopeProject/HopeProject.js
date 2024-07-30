import React, { Component } from 'react';
import "./HopeProject.css";
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'


class HopeProject extends Component {
	state = {
		colorSchemeSuffix: "default",
		fontSizeLevel: 1,
		isMobileView: true,
		mainPaddingLeftClassName: "padding-left-0em",
		responsiveFloat:"none",
		responsiveWidth:"50%",
		navbarLinks: [{title:"Synopsis", id:"navBarLinkSynopsis"},{title:"Highlights", id:"navBarLinkHighlights"},{title:"Overview", id:"navBarLinkOverview"}]
	}

	projectInfo = {
		title: "Forging Radical Hope",
		synopsis:{
			mediaType: "video",
			blurb: "A special podcast miniseries with the American Journal of Public Health. Episode 1 (part 2) below.",
			embed: {
				url: "https://www.youtube.com/embed/GIWOJ6-yhcQ?si=qzzbfMQWTAZoIFxD",
				title: "'Forging Radical Hope' Episode 1, Part 2, on YoouTube"
			},
			year: "2016",
			specs: [
				{
					id: "hopeSpecs01",
					lead: "Role",
					body: "creator, editor, interviewer"
				},
				{
					id: "hopeSpecs02",
					lead: "Episodes",
					body: "2 ( so far)"
				}
			]
		},
		highlights: [
			{
				id: "hopeHighlights01",
				lead: "Lessons learned",
				body: "Many people in public health have personal, emotional reasons for the work they do. Talking about these personal motivations can help put a more human face to public health institutions."
			},
			{
				id: "hopeHighlights01",
				lead: "Recognition",
				body: "This special series received the same amount of views as the standard AJPH podcast episodes."
			}
		],
		overview: [
			{
				id: "hopeOverview01",
				lead: "Background",
				body: "My main goal when I joined the AJPH 2024 Student Think Tank was to highlight voices of students and people outside of academic research on AJPH channels. There is a lot of health equity work in communities outside of formal public health agencies, hospitals, and universities. I wanted to play a small part in helping others learn from them"
			},
			{
				id: "hopeOverview02",
				lead: "Process",
				body: "This project required lots of cold-call emails to flesh out interview slots. It also involved a lot of web searches to find students and non-academic voices related to AJPH journal topics. It was fun to bring my background in video production to then translate that work into watchable videos."
			},
			{
				id: "hopeOverview03",
				lead: "Support",
				body: "Thank you to Alfredo Moraiba (AJPH Editor-in-Chief) and the AJPH Think Tank for support in making this idea a reality."
			}
		],
		"links": [
			{
				"isInternalLink": false,
				"id": "animation0202",
				"text": "'Radical Hope' Playlist on YouTube",
				"path": "https://www.youtube.com/playlist?list=PLStduNqtQKzH4vFgf3oQ_3ocetjRrexj2",
				"icon": "video"
			}
		]
		
	}

	hopeNavbarLinks = [{title:"Synopsis", id:"hopeNavBarLinkSynopsis"},{title:"Highlights", id:"hopeNavBarLinkHighlights"},{title:"Overview", id:"hopeNavBarLinkOverview"}];
	hopeSynopsisSectionRef = React.createRef();
	hopeHighlightsSectionRef = React.createRef();
	hopeNavbarRef = React.createRef();
	hopeOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'Forging Radical Hope' AJPH Student Think Tank Podcast";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "hopeNavBarLinkSynopsis"){
			this.hopeSynopsisSectionRef.current.scrollIntoView();
			this.hopeSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "hopeNavBarLinkHighlights"){
			this.hopeHighlightsSectionRef.current.scrollIntoView();
			this.hopeHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "hopeNavBarLinkOverview"){
			this.hopeOverviewSectionRef.current.scrollIntoView();
			this.hopeOverviewSectionRef.current.focus();
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
							navbarLinks={ this.hopeNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.hopeNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.hopeHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.hopeOverviewSectionRef }
					synopsisSectionRef={ this.hopeSynopsisSectionRef }
				/>
				<HomepageProjectLinksContainer
					links={ this.projectInfo.links }
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					materialIconFill={ this.props.materialIconFill }
				/>
			</div>
		);
  	}
}

export default HopeProject;