import React, { Component } from 'react';
import "./PlaysProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import PlaysAndWritingsContainer from '../../components/PlaysAndWritingsContainer';
import PlaysContainerImposterSyndrome from '../../components/PlaysContainerImpostorSyndrome'
import PlaysContainerNotesOf from '../../components/PlaysContainerNotesOf';
import PlaysContainerNecessaryToThe from '../../components/PlaysContainerNecessaryToThe/PlaysContainerNecessaryToThe';
import PlaysContainerNecessaryDetails from '../../components/PlaysContainerNecessaryDetails/PlaysContainerNecessaryDetails';
import PlaysContainerTheFuture from '../../components/PlaysContainerTheFuture';
import PlaysContainerTrustIssues from '../../components/PlaysContainerTrustIssues';
import PlaysContainerYouWillRemember from '../../components/PlaysContainerYouWillRemember';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class PlaysProject extends Component {

	projectInfo = {
		title: "Weird Little Plays",
		synopsis:{
			mediaType: "photo",
			blurb: "An ongoing collection of short plays in which I play myself.",
			embed: {
				src: "../assets/images/projectPhotos/plays.jpg",
				alt: "A close-up of typed notes on index cards. The top card reads, 'These cards are just for you. Feel free to tell the rest of the audience whatever you think they should know, but don't let anyone else see these. NEXT CARD.'"
			},
			year: "2018 - ongoing",
			specs: [
				{
					id: "playsSpecs01",
					lead: "Constraints",
					body: "I don't pretend to be someone I'm not. I don't pretend to be somewhere I'm not. And I try to keep things as short as possible."
				}
			]
		},
		highlights: [
			{
				id: "playsHighlights01",
				lead: "Performances",
				body: "I've performed all the plays on this page in front of an audience. These performances include "
			},
			{
				id: "playsHighlights02",
				lead: "Inspiration",
				body: "The Neo-futurists in Chicago inspired my approach to live performance and writing. I wrote my first plays in a workshop of theirs in 2018 and I couldn't get enough of it."
			}
		],
		overview: [
			{
				id: "playsOverview01",
				lead: "Process",
				body: "I usually have a clear idea of a task or action that matches up with a feeling I have. I don't usually have a clear idea of the words to say right away. So, I'll usually come up with a few sentences or phrases, and try them out with the movement. I'll kind of go back and forth between refining the words and refining the movement. These plays usually sit in a half-finished state until I find an opportunity for a performance. With a performance in mind, I can finally finish the play with a space and audience in mind."
			},
			{
				id: "playsOverview02",
				lead: "Personal Approach",
				body: "I use these plays to think through my feelings and my responses to things that happen in my life. They are very useful conversation starters. So, I don't really play characters when I write them. I also tend not to get too abstract with what happens on stage. However, the movement I plan might not have a direct relationship to the words I say. I like to play myself and tell a real story from my past or create a weird, memorable moment with people in the room."
			}
		]		
	}

	playsNavbarLinks = [{title:"Synopsis", id:"playsNavBarLinkSynopsis"},{title:"Highlights", id:"playsNavBarLinkHighlights"},{title:"Overview", id:"playsNavBarLinkOverview"},{title:"The Plays", id:"playsNavBarLinkPlaysContainer"}];
	playsSynopsisSectionRef = React.createRef();
	playsHighlightsSectionRef = React.createRef();
	playsNavbarRef = React.createRef();
	playsOverviewSectionRef = React.createRef();
	playsPlaysContainerRef = React.createRef();

	componentDidMount() {
		document.title = "'Weird Little Plays' Project Page";
	};

	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "playsNavBarLinkSynopsis"){
			this.playsSynopsisSectionRef.current.scrollIntoView();
			this.playsSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "playsNavBarLinkHighlights"){
			this.playsHighlightsSectionRef.current.scrollIntoView();
			this.playsHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "playsNavBarLinkOverview"){
			this.playsOverviewSectionRef.current.scrollIntoView();
			this.playsOverviewSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "playsNavBarLinkPlaysContainer"){
			this.playsPlaysContainerRef.current.scrollIntoView();
			this.playsPlaysContainerRef.current.focus();
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
							navbarLinks={ this.playsNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.playsNavbarLinks }
						/>
					</div>
				}
				<div className="display-flex flex-direction-column">
					<ProjectPageMainSections
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						doNotTrack={ this.props.doNotTrack }
						isMobile={ this.props.isMobileView }
						width={ this.props.responsiveWidth }
						highlightsSectionRef={ this.playsHighlightsSectionRef }
						projectInfo={ this.projectInfo }
						overviewSectionRef={ this.playsOverviewSectionRef }
						synopsisSectionRef={ this.playsSynopsisSectionRef }
					/>
					<PlaysAndWritingsContainer
						ref = { this.playsPlaysContainerRef }
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						title={ "Plays" }
						lede={ "play" }
					>
						<ul>
							<li>
								<PlaysContainerNotesOf
									isMobile={ this.props.isMobileView }
									colorSchemeSuffix={ this.props.colorSchemeSuffix }
									responsiveFlexEnding={ this.props.responsiveFlexEnding }
									width={ this.props.responsiveWidth }
								/>								
							</li>
								<PlaysContainerYouWillRemember
									isMobile={ this.props.isMobileView }
									colorSchemeSuffix={ this.props.colorSchemeSuffix }
									doNotTrack={ this.props.doNotTrack }
									responsiveFlexEnding={ this.props.responsiveFlexEnding }
									width={ this.props.responsiveWidth }
								/>
							<li>
								<PlaysContainerNecessaryDetails
									isMobile={ this.props.isMobileView }
									colorSchemeSuffix={ this.props.colorSchemeSuffix }
									responsiveFlexEnding={ this.props.responsiveFlexEnding }
									width={ this.props.responsiveWidth }	
								/>								
							</li>
							<li>
								<PlaysContainerNecessaryToThe
									isMobile={ this.props.isMobileView }
									colorSchemeSuffix={ this.props.colorSchemeSuffix }
									responsiveFlexEnding={ this.props.responsiveFlexEnding }
									width={ this.props.responsiveWidth }
								/>								
							</li>
							<li>
								<PlaysContainerTrustIssues
									isMobile={ this.props.isMobileView }
									colorSchemeSuffix={ this.props.colorSchemeSuffix }
									responsiveFlexEnding={ this.props.responsiveFlexEnding }
									width={ this.props.responsiveWidth }	
								/>								
							</li>
							<li>
								<PlaysContainerImposterSyndrome
									isMobile={ this.props.isMobileView }
									colorSchemeSuffix={ this.props.colorSchemeSuffix }
									responsiveFlexEnding={ this.props.responsiveFlexEnding }
									width={ this.props.responsiveWidth }
								/>
							</li>
							<li>
								<PlaysContainerTheFuture
									isMobile={ this.props.isMobileView }
									colorSchemeSuffix={ this.props.colorSchemeSuffix }
									responsiveFlexEnding={ this.props.responsiveFlexEnding }
									width={ this.props.responsiveWidth }	
								/>
							</li>
						</ul>	
					</PlaysAndWritingsContainer>
				</div>
			</div>
		);
  	}
}

export default PlaysProject;