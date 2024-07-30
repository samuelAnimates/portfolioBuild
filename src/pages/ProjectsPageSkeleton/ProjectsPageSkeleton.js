import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./ProjectsPageSkeleton.css";
import GenericFloatingSection from '../../components/GenericFloatingSection';
import Footer from '../../components/Footer';
import MenuBar from '../../components/MenuBar';
import MenuBarMobile from '../../components/MenuBarMobile';
import NewPageNavBar from '../../components/NewPageNavBar';
import NewPageNavBarMobile from '../../components/NewPageNavBarMobile';
import AbstractProject from "../../pages/AbstractProject";
import BodegaProject from "../../pages/BodegaProject";
import BreakfastProject from "../../pages/BreakfastProject";
import BusanProject from "../../pages/BusanProject";
import DotsProject from "../../pages/DotsProject";
import HealthforallProject from "../../pages/HealthforallProject";
import HerProject from "../../pages/HerProject";
import HopeProject from "../../pages/HopeProject";
import MediaProject from "../../pages/MediaProject";
import NewsletterProject from "../../pages/NewsletterProject";
import PlaysProject from "../../pages/PlaysProject";
import SaigonProject from "../../pages/SaigonProject";
import UnfundableProject from "../../pages/UnfundableProject";

class ProjectsPageSkeleton extends Component {

	synopsisSectionRef = React.createRef();
	highlightsSectionRef = React.createRef();
	overviewSectionRef = React.createRef();
	
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}

	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkSynopsis"){
			this.synopsisSectionRef.current.scrollIntoView();
			this.synopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkHighlights"){
			this.highlightsSectionRef.current.scrollIntoView();
			this.highlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkOverview"){
			this.overviewSectionRef.current.scrollIntoView();
			this.overviewSectionRef.current.focus();
		};
	}

	render() {
		return (
			<div className={ "font-Assistant projectPage-color-scheme-" + this.props.colorSchemeSuffix }>
				{ this.props.isMobileView === false &&
					<MenuBar
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						isMobileView={ this.props.isMobileView }
					>
						<NewPageNavBar
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
						/>
					</MenuBar>
				}
				{ this.props.isMobileView === true &&
					<div className="margin-auto max-width-60em width-90pc">
						<MenuBarMobile>
							<NewPageNavBarMobile
								colorSchemeSuffix={ this.props.colorSchemeSuffix }
							/>
						</MenuBarMobile>
					</div>
				}
				<div className={"margin-auto max-width-60em width-90pc " + this.props.mainPaddingLeftClassName}>
					<main>
						<Router>
							<GenericFloatingSection
								colorSchemeSuffix={ this.props.colorSchemeSuffix }
							>
								<Route exact path='/projects/abstract' render={props => (
									<AbstractProject
										colorSchemeNameRoot="artProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFlexEnding={ this.props.responsiveFlexEnding }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/bodega' render={props => (
									<BodegaProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFlexEnding={ this.props.responsiveFlexEnding }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/breakfast' render={props => (
									<BreakfastProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFlexEnding={ this.props.responsiveFlexEnding }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/busan' render={props => (
									<BusanProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFlexEnding={ this.props.responsiveFlexEnding }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/dots' render={props => (
									<DotsProject
										colorSchemeNameRoot="artProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFlexEnding={ this.props.responsiveFlexEnding }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/healthforall' render={props => (
									<HealthforallProject
										colorSchemeNameRoot="eduProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFlexEnding={ this.props.responsiveFlexEnding }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/her' render={props => (
									<HerProject
										colorSchemeNameRoot="artProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFlexEnding={ this.props.responsiveFlexEnding }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/hope' render={props => (
									<HopeProject
										colorSchemeNameRoot="artProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFlexEnding={ this.props.responsiveFlexEnding }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/media' render={props => (
									<MediaProject
										colorSchemeNameRoot="eduProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFlexEnding={ this.props.responsiveFlexEnding }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/newsletter' render={props => (
									<NewsletterProject
										colorSchemeNameRoot="eduProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFlexEnding={ this.props.responsiveFlexEnding }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/plays' render={props => (
									<PlaysProject
										colorSchemeNameRoot="artProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFlexEnding={ this.props.responsiveFlexEnding }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/saigon' render={props => (
									<SaigonProject
										colorSchemeNameRoot="videoProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFlexEnding={ this.props.responsiveFlexEnding }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/unfundable' render={props => (
									<UnfundableProject
										colorSchemeNameRoot="eduProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFlexEnding={ this.props.responsiveFlexEnding }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
							</GenericFloatingSection>
						</Router>
					</main>
					<Footer
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
					/>
				</div>
			</div>
		);
  	}
}

export default ProjectsPageSkeleton;