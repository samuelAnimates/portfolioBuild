import React, { Component } from 'react';
import "./UnfundableProject.css";
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'


class UnfundableProject extends Component {
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
		title: "UNFUNDABLE",
		synopsis:{
			mediaType: "photo",
			blurb: "A table-top card game letting players experience the social dynamics of academic health research.",
			embed: {
				src: "../assets/images/projectPhotos/unfundable.png",
				alt: "UNFUNDABLE"
			},
			year: "2019, ongoing",
			specs: [
				{
					id: "unfundableSpecs01",
					lead: "Specs",
					body: "3 to 5 players, ages 13 and up, 30-minute play time."
				}
			]
		},
		highlights: [
			{
				id: "unfundableHighlights01",
				lead: "Public Demos",
				body: "Cambridge Science Festival. April 14, 2019."
			},
			{
				id: "unfundableHighlights02",
				lead: "Play sessions",
				body: "ChicagoCHEC trainees, MIT career office, Viswanath Lab"
			}
		],
		overview: [
			{
				id: "unfundableOverview01",
				lead: "Background",
				body: "UNFUNDABLE started as a project for the class 'Cultivating Public Engagement with Science' at the Harvard Graduate School of Education. The motivation for this project came from my own experience starting to work in academic research. After a few research mentorship programs in high school and college, I still found the social dynamics and competitive yet collaborative nature of the work long-term."
			},
			{
				id: "unfundableOverview02",
				lead: "Process",
				body: "I am continually iterating over prototype versions of this game. I run play tests and feedback sessions with a variety of audiences and tweak the game mechanics based off of what I learn over time. I am focusing on this game as an engagement tool between scientists and undergraduate students. So, that's where I'm focusing a lot of energy on play tests. A full development timeline is on the the game's website."
			}
		],
		"links": [
			{
				"isInternalLink": false,
				"id": "unfundable01",
				"text": "'UNFUNDABLE' game website",
				"path": "https://unfundable.fun/",
				"icon": "website"
			}
		]
		
	}

	unfundableNavbarLinks = [{title:"Synopsis", id:"unfundableNavBarLinkSynopsis"},{title:"Highlights", id:"unfundableNavBarLinkHighlights"},{title:"Overview", id:"unfundableNavBarLinkOverview"}];
	unfundableSynopsisSectionRef = React.createRef();
	unfundableHighlightsSectionRef = React.createRef();
	unfundableNavbarRef = React.createRef();
	unfundableOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "UNFUNDABLE Projet Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "unfundableNavBarLinkSynopsis"){
			this.unfundableSynopsisSectionRef.current.scrollIntoView();
			this.unfundableSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "unfundableNavBarLinkHighlights"){
			this.unfundableHighlightsSectionRef.current.scrollIntoView();
			this.unfundableHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "unfundableNavBarLinkOverview"){
			this.unfundableOverviewSectionRef.current.scrollIntoView();
			this.unfundableOverviewSectionRef.current.focus();
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
							navbarLinks={ this.unfundableNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.unfundableNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.unfundableHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.unfundableOverviewSectionRef }
					synopsisSectionRef={ this.unfundableSynopsisSectionRef }
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

export default UnfundableProject;