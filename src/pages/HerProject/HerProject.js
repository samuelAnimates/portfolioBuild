import React, { Component } from 'react';
import "./HerProject.css";
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'


class HerProject extends Component {
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
		title: "HER Communication",
		synopsis:{
			mediaType: "photo",
			blurb: "A do-it-together publication of health equity.",
			embed: {
				src: "../assets/images/projectPhotos/her.png",
				alt: "Health Equity Rituals Communication"
			},
			year: "2019, ongoing",
			specs: [
				{
					id: "herSpecs01",
					lead: "Components",
					body: "Workshops and submitted pieces"
				}
			]
		},
		highlights: [
			{
				id: "herHighlights01",
				lead: "Lessons learned",
				body: "It's been great to see how excited people are about this project. I can't wait to see more pieces of this in action."
			}
		],
		overview: [
			{
				id: "herOverview01",
				lead: "Background",
				body: "This project began as part of the preparation for my master's thesis in Comparative Media Studies at MIT. I was interested in how I could help bring under-represented concerns, questions, and ideas of into research universities. Beyond that, I was interested in how I might be able to prompt more researchers to learn from these voices."
			},
			{
				id: "herOverview02",
				lead: "Process",
				body: "Right now, I am the editor of this online publication. I run workshops to imagine futures of health equity and look for submissions from artists and writers of all walks of life."
			}
		],
		"links": [
			{
				"isInternalLink": false,
				"id": "her01",
				"text": "'HER Communication' Zine-Journal",
				"path": "https://hercommunication.pubpub.org",
				"icon": "website"
			}
		]
		
	}

	herNavbarLinks = [{title:"Synopsis", id:"herNavBarLinkSynopsis"},{title:"Highlights", id:"herNavBarLinkHighlights"},{title:"Overview", id:"herNavBarLinkOverview"}];
	herSynopsisSectionRef = React.createRef();
	herHighlightsSectionRef = React.createRef();
	herNavbarRef = React.createRef();
	herOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "HER Communication Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "herNavBarLinkSynopsis"){
			this.herSynopsisSectionRef.current.scrollIntoView();
			this.herSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "herNavBarLinkHighlights"){
			this.herHighlightsSectionRef.current.scrollIntoView();
			this.herHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "herNavBarLinkOverview"){
			this.herOverviewSectionRef.current.scrollIntoView();
			this.herOverviewSectionRef.current.focus();
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
							navbarLinks={ this.herNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.herNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.herHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.herOverviewSectionRef }
					synopsisSectionRef={ this.herSynopsisSectionRef }
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

export default HerProject;