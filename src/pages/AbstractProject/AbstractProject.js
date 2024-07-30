import React, { Component } from 'react';
import "./AbstractProject.css";
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'


class AbstractProject extends Component {
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
		title: "Abstract",
		synopsis:{
			mediaType: "video",
			blurb: "A representation of my thesis in comparative media studies.",
			embed: {
				url: "https://player.vimeo.com/video/410859161",
				title: "Abstract"
			},
			year: "2020",
			specs: [
				{
					id: "abstractSpecs01",
					lead: "Techniques",
					body: "livestream, web design, live performance"
				},
				{
					id: "abstractSpecs02",
					lead: "Length",
					body: "45 min. 19 sec."
				}
			]
		},
		highlights: [
			{
				id: "abstractHighlights01",
				lead: "Lessons learned",
				body: "This project was a lot of fun! That in itself was a lesson for me. It encouraged me to keep tryng to use arts and livestreaming for community engagement with public health researchers."
			}
		],
		overview: [
			{
				id: "abstractOverview01",
				lead: "Background",
				body: "I originally planned for a version of this performance as an in-person performance. However, this ended up taking place during the coronavirus pandemic. I still wanted to see how I could bring this performance online. I still wanted my thesis presentation to be surprising, fun, and interactive."
			},
			{
				id: "abstractOverview02",
				lead: "Process",
				body: `Honestly, this process was a bit of a mess. I had the idea for short "plays" illustrating short lessons from my thesis. Most of those did not transfer well to an online setting. But, the livestream setting opened up new possibilities for using photos, videos, and other websites. I looked to Twitch streamers for inspiration and came up with this format pretty last-minute.`
			}
		],
		"links": [
			{
				"isInternalLink": false,
				"id": "abstractLink01",
				"text": "'Abstract' Video on Vimeo",
				"path": "https://vimeo.com/410859161",
				"icon": "video"
			},
			{
				"isInternalLink": false,
				"id": "abstractLink02",
				"text": "'Abstact' interactive script (note: a11y issues)",
				"path": "https://abstract-prod.herokuapp.com/",
				"icon": "website"
			},
			{
				"isInternalLink": false,
				"id": "abstractLink03",
				"text": "'Abstract' script as a published Google Doc",
				"path": "https://docs.google.com/document/d/e/2PACX-1vR1ranb_nwblA8zJu8qqIkMSsS3PeQpSzXukuC5iEf6QTEI_ValdQZvYyTiMu_3nPS5ezJmMiT1mW9n/pub",
				"icon": "document"
			}
		]
		
	}

	herNavbarLinks = [{title:"Synopsis", id:"herNavBarLinkSynopsis"},{title:"Highlights", id:"herNavBarLinkHighlights"},{title:"Overview", id:"herNavBarLinkOverview"}];
	herSynopsisSectionRef = React.createRef();
	herHighlightsSectionRef = React.createRef();
	herNavbarRef = React.createRef();
	herOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "Abstract Project Page";
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

export default AbstractProject;