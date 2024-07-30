import React, { Component } from 'react';
import "./NewsletterProject.css";
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'


class NewsletterProject extends Component {
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
		title: "Health Literacy Right Now",
		synopsis:{
			mediaType: "photo",
			blurb: "A newsletter to help professionals and students enhance their health communication.",
			embed: {
				src: "../assets/images/projectPhotos/newsletter.png",
				alt: "Health Literacy Right Now"
			},
			year: "2023, ongoing",
			specs: [
				{
					id: "newsletterSpecs01",
					lead: "Schedule",
					body: "1 to 2 times per month."
				}
			]
		},
		highlights: [
			{
				id: "newsletterHighlights01",
				lead: "Lessons Learned",
				body: "There is an audience for health literacy best practices and research. The field has a lot to offer. And people respond well to in when it's accessible to them."
			},
			{
				id: "newsletterHighlights01",
				lead: "Recognition",
				body: "So far, the newsletter has around 200 subscribers. And it's been a helpful connection point to meet other people interested in health communication."
			}
		],
		overview: [
			{
				id: "newsletterOverview01",
				lead: "Background",
				body: "I started this newsletter after noticing a gap between the fields of health literacy and health communication. You might think the two are one in the same, but a lot of usable knowledge from one doesn't make it to the other. The gap is even wider between these fields and computational social science. As a researcher working at the intersection of these fields, I thought I might be able to help build bridges."
			},
			{
				id: "newsletterOverview02",
				lead: "Process",
				body: "I enjoy experimenting with this newsletter. I started off with 'Glow-Ups' to show what health literacy best practices look like when editing a public health message. I now focus more on fleshing out an idea of 'Networked Health Literacy' which bridges health literacy with my background in media studies and my interest in web accessibility. I also write key takeaways from conferences I attend, with a special focus on AI and emerging communicaiton technologies."
			}
		],
		"links": [
			{
				"isInternalLink": false,
				"id": "newsletter01",
				"text": "Newsletter on LinkedIn",
				"path": "https://www.linkedin.com/newsletters/7110314537236463616/",
				"icon": "website"
			}
		]
		
	}

	newsletterNavbarLinks = [{title:"Synopsis", id:"newsletterNavBarLinkSynopsis"},{title:"Highlights", id:"newsletterNavBarLinkHighlights"},{title:"Overview", id:"newsletterNavBarLinkOverview"}];
	newsletterSynopsisSectionRef = React.createRef();
	newsletterHighlightsSectionRef = React.createRef();
	newsletterNavbarRef = React.createRef();
	newsletterOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'Health Literacy Right Now' Newsletter Projet Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "newsletterNavBarLinkSynopsis"){
			this.newsletterSynopsisSectionRef.current.scrollIntoView();
			this.newsletterSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "newsletterNavBarLinkHighlights"){
			this.newsletterHighlightsSectionRef.current.scrollIntoView();
			this.newsletterHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "newsletterNavBarLinkOverview"){
			this.newsletterOverviewSectionRef.current.scrollIntoView();
			this.newsletterOverviewSectionRef.current.focus();
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
							navbarLinks={ this.newsletterNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.newsletterNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.newsletterHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.newsletterOverviewSectionRef }
					synopsisSectionRef={ this.newsletterSynopsisSectionRef }
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

export default NewsletterProject;