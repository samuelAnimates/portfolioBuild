import React, { Component } from 'react';
import './HomePage.css';
import Footer from '../../components/Footer';
import HomepageAboutMeSection from '../../components/HomepageAboutMeSection';
import HomepageProjectsSection from '../../components/HomepageProjectsSection';
import HomepageMediaSection from '../../components/HomepageMediaSection';
import MenuBar from '../../components/MenuBar';
import MenuBarMobile from '../../components/MenuBarMobile';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import SheerWhiteContainer from '../../components/SheerWhiteContainer';

class HomePage extends Component {

	state = { 
		navbarClassName: "margin-auto margin-bottom-2em",
		navbarLinksClassName: "float-left font-size-p85em padding-left-0 text-center",
		navbarLinks: [{title:"About", id:"navBarLinkAbout"},{title:"Highlights", id:"navBarLinkHighlights"},{title:"Thought Leadership", id:"navBarLinkThought"},{title:"Web", id:"navBarLinkWeb"},{title:"Multimedia", id:"navBarLinkVideo"},{title:"Performance", id:"navBarLinkPerformance"}]
	};

	projectData = { 
		aboutMeSection:{
			quote: "I could trace back about 80% of my humor to specific SpongeBob episodes.",
			paragraphs: [
				{
					id: "aboutMeParagraph01",
					lead: "In short",
					includesLink: false,
					body: "I make art and do public health research. "
				},
				{	
					id: "aboutMeParagraph02",
					lead: "Interests",
					includesLink: false,
					body: "media arts, health communication, health equity, culture and technology"
				},
				{	
					id: "aboutMeParagraph03",
					lead: "Music video recommendation",
					includesLink: true,
					body: [
						{
							preLinkText: "I'm loving ",
							linkIsInternalLink: false,
							linkText: `"Image"`,
							linkUrl: "https://youtu.be/DfcWOPpmw14?feature=shared",
							postLinkText: " by Magdalena Bay.",
						}
					]
				}
			],
			links: [
				{
					"isInternalLink": false,
					"id": "aboutLink01",
					"text": "My Open Scholar Site",
					"icon": "website",
					"path": "https://scholar.harvard.edu/smendez"
				},
				{
					"isInternalLink": false,
					"id": "aboutLink02",
					"text": "My LinkedIn Profile",
					"icon": "accountCircle",
					"path": "https://www.linkedin.com/in/samuelanimates/"
				},
				{
					"isInternalLink": false,
					"id": "aboutLink02",
					"text": "My YouTube Channel",
					"icon": "video",
					"path": "https://www.youtube.com/@samuelanimates"
				}
			]
		},
		highlightsSection: {
			id: "HIGHLIGHTS",
			projects:	[
				{
					"id": "highlights02",
					"title": "Health Literacy Right Now",
					"description": "A LinkedIn newsletter sharing health literacy best practices and research. Each article has tips you can use—right now.",
					"icon": "./assets/images/homepageIcons/homepage-icon-newsletter.svg",
					"iconAlt": "'UNFUNDABLE' logo: an overlapping function symbol and intersection symbol.",
					"projectPagePath": "/projects/newsletter",
					"links": [
						{
							"isInternalLink": false,
							"id": "highlights0302",
							"text": "Newsletter on LinkedIn",
							"path": "https://www.linkedin.com/newsletters/7110314537236463616/",
							"icon": "website"
						}
					]
				},
				{
					"id": "highlights03",
					"title": "UNFUNDABLE",
					"description": "A table-top card game that puts players in the role of academic health researchers.",
					"icon": "./assets/images/homepageIcons/homepage-icon-unfundable.svg",
					"iconAlt": "'UNFUNDABLE' logo: an overlapping function symbol and intersection symbol.",
					"projectPagePath": "/projects/unfundable",
					"links": [
						{
							"isInternalLink": false,
							"id": "highlights0302",
							"text": "'UNFUNDABLE' website",
							"path": "https://unfundable.fun",
							"icon": "website"
						}
					]
				}
				
			]
		},
		mediaSection:{
			paragraphs: [
				{	
					id: "mediaParagraph01",
					lead: "Online Harassment Op-Ed",
					includesLink: true,
					body: [
						{
							preLinkText: "2024. Harvard Public Health. ",
							linkIsInternalLink: false,
							linkText: `"Harassment in public health is real. Here’s how to respond."`,
							linkUrl: "https://harvardpublichealth.org/policy-practice/peter-hotez-wont-be-the-last-health-worker-harassed-online/",
							postLinkText: "",
						}
					]
				},
				{	
					id: "mediaParagraph02",
					lead: "Public Health Expert Interview",
					includesLink: true,
					body: [
						{
							preLinkText: "2024.",
							linkIsInternalLink: false,
							linkText: `"After he was falsely linked to a racist confrontation on TikTok, a NH doctor is now trying to rebuild his online reputation."`,
							linkUrl: "https://www.nhpr.org/health/2024-02-27/nh-doctor-threatened-harassed-after-being-falsely-linked-to-video-of-racist-slur",
							postLinkText: " Paul Cuno-Booth.",
						}
					]
				}
			],
		},
		projectSections: [
			{
				"title": "Web",
				"id": "webSection",
				"projects": [
					{
						"id": "web01",
						"title": "Health for All",
						"icon": "./assets/images/homepageIcons/homepage-icon-nlm.svg",
						"iconAlt": "",
						"description": "A clinical trial informational website. I project I did prototying and user testing for.",
						"projectPagePath": "/projects/healthforall",
						"links": [
							{
								"isInternalLink": false,
								"id": "health0101",
								"text": "Health for All website",
								"icon": "website",
								"path": "https://healthforallproject.org/"
							}
						]
					},
					{
						"id": "web02",
						"title": "HER Communication",
						"description": "A do-it-together publication of health equity. An experiment from my master's thesis.",
						"icon": "./assets/images/homepageIcons/homepage-icon-her.svg",
						"iconAlt": "'HER Communication' logo: triangles coming together to form a crystal.",
						"projectPagePath": "/projects/her",
						"links": [
							{
								"isInternalLink": false,
								"id": "web0201",
								"text": "'HER Communication' journal-zine",
								"path": "https://hercommunication.pubpub.org",
								"icon": "website"
							}
						]
					}
				]
			},
			{
				"title": "Animation & Multimedia",
				"id": "videoSection",
				"projects": [
					{
						"id": "video00",
						"title": "Forging Radical Hope",
						"description": "A podcast miniseries: highlighting student voices for the American Journal of Public Health.",
						"icon": "./assets/images/homepageIcons/homepage-icon-radicalhope.svg",
						"iconAlt": "Forging Radical Hope logo: overlapping red and blue blobs, with a yellow rectangle cutting across them",
						"projectPagePath": "/projects/hope",
						"links": [
							{
								"isInternalLink": false,
								"id": "video0000",
								"text": "Podcast playlist on YouTube",
								"icon": "video",
								"path": "https://www.youtube.com/playlist?list=PLStduNqtQKzH4vFgf3oQ_3ocetjRrexj2"
							}
						]
					},
					{
						"id": "video01",
						"title": "10 Days in Saigon",
						"description": "A 10-week web series: wheelchair travel in Ho Chi Minh City, Vietnam.",
						"icon": "./assets/images/homepageIcons/homepage-icon-saigon.svg",
						"iconAlt": "'10 Days' logo: three overlayed Accessible Icons, suggesting fast forward movement.",
						"projectPagePath": "/projects/saigon",
						"links": [
							{
								"isInternalLink": false,
								"id": "highlights0102",
								"text": "'10 Days' Playlist on YouTube",
								"icon": "video",
								"path": "https://www.youtube.com/playlist?list=PLStduNqtQKzHU7tjZfX83hs3dpCGffZux"
							},
							{
								"isInternalLink": false,
								"id": "highlights0103",
								"text": "'10 Days' Google Map",
								"icon": "map",
								"path": "https://www.google.com/maps/d/viewer?mid=1msCQD_ab_Lz6mLz80wyu1qHXCBk&hl=en_US&ll=10.798291852220926%2C106.67387433398437&z=13"
							}
						]
					},
					{
						"id": "animation02",
						"title": "By Foot: Busan and the Sea",
						"description": "An experimental documentary: a solo trip through Busan, South Korea.",
						"icon": "./assets/images/homepageIcons/homepage-icon-busan.svg",
						"iconAlt": "",
						"projectPagePath": "/projects/busan",
						"links": [
							{
								"isInternalLink": false,
								"id": "animation0202",
								"text": "'Busan' on YouTube",
								"path": "https://youtu.be/e6OxuWNPSpo",
								"icon": "video"
							}
						]
					},
					{
						"id": "animation03",
						"title": "Persefone's Breakfast",
						"description": "An experimental animation: Persephone's voice messages to Hades as she leaves the Underworld once and for all.",
						"icon": "./assets/images/homepageIcons/homepage-icon-breakfast.svg",
						"iconAlt": "",
						"projectPagePath": "/projects/breakfast",
						"links": [
							{
								"isInternalLink": false,
								"id": "animation0302",
								"text": "'Persefone's Breakfast' on YouTube",
								"path": "https://youtu.be/zlPJFc4O-G0",
								"icon": "film",
								
							}
						]
					},
					{
						"id": "animation04",
						"title": "A Bodega",
						"description": "An experimental documentary; an asset-based look at health equity, made with ingredients from a bodega in Lawrence, MA.",
						"icon": "./assets/images/homepageIcons/homepage-icon-bodega.svg",
						"iconAlt": "'A Bodega' cartoon logo: a frying pan.",
						"projectPagePath": "/projects/bodega",
						"links": [
							{
								"isInternalLink": false,
								"id": "animation0402",
								"text": "'A Bodega' on YouTube",
								"path": "https://youtu.be/PvTN0ZQWifw",
								"icon": "film"
							}
						]
					}
				]
			},
			{
				"title": "Performance",
				"id": "performance",
				"projects": [
					{
						"id": "art01",
						"title": "Abstract",
						"description": "A livestream performance of my master's thesis, on public health communication.",
						"icon": "./assets/images/homepageIcons/homepage-icon-abstract.svg",
						"iconAlt": "'Abstract' logo: sparkle emoji.",
						"projectPagePath": "/projects/abstract",
						"links": [
							{
								"isInternalLink": false,
								"id": "highlights0101",
								"text": "'Abstract' Recording on Vimeo (No subtitles)",
								"path": "https://vimeo.com/410859161",
								"icon": "video"
							},
							{
								"isInternalLink": false,
								"id": "highlights0102",
								"text": "'Abstact' interactive script (note: a11y issues)",
								"path": "https://abstract-prod.herokuapp.com/",
								"icon": "website"
							},
							{
								"isInternalLink": false,
								"id": "highlights0103",
								"text": "Full Text of my Master's Thesis",
								"path": "https://dspace.mit.edu/handle/1721.1/127452",
								"icon": "document"
							}
						]
					},
					{
						"id": "art02",
						"title": "Weird Little Plays",
						"icon": "./assets/images/homepageIcons/homepage-icon-plays.svg",
						"iconAlt": "",
						"description": "Short plays in which I play myself.",
						"projectPagePath": "/projects/plays",
						"links": []
					}
				]
			}
		]
	};
	
	aboutSectionRef = React.createRef();
	highlightsSectionRef = React.createRef();
	mediaSectionRef = React.createRef();
	navbarRef = React.createRef();
	webSectionRef = React.createRef();
	videoSectionRef = React.createRef();
	performanceSectionRef = React.createRef();
	projectSectionRefs = [this.webSectionRef, this.videoSectionRef, this.performanceSectionRef]

	componentDidMount() {
		document.title = "Samuel Animates";

	};

	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}

	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkAbout"){
			this.aboutSectionRef.current.scrollIntoView();
			this.aboutSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkHighlights"){
			this.highlightsSectionRef.current.scrollIntoView();
			this.highlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkThought"){
			this.mediaSectionRef.current.scrollIntoView();
			this.mediaSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkWeb"){
			this.webSectionRef.current.scrollIntoView();
			this.webSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkVideo"){
			this.videoSectionRef.current.scrollIntoView();
			this.videoSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkPerformance"){
			this.performanceSectionRef.current.scrollIntoView();
			this.performanceSectionRef.current.focus();
		};
	}

  render() {
    return (
		<div className={ "homepage-color-scheme-" + this.props.colorSchemeSuffix }>
			{ this.props.isMobileView === false &&
				<MenuBar
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					isMobileView={ this.props.isMobileView }
				>
					<SamePageNavBar
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						handleNavLinkClick={ this.handleNavLinkClick }
						handleKeyPress={ this.handleKeyPress }
						navbarLinks={ this.state.navbarLinks }
					/>
				</MenuBar>
			}
			<div className={ "margin-auto max-width-50em width-85pc "  + this.props.mainPaddingLeftClassName }>
				<main>
					{ this.props.isMobileView === true &&
						<MenuBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							isMobileView={ this.props.isMobileView }
						>
							<SamePageNavBarMobile
								colorSchemeSuffix={ this.props.colorSchemeSuffix }
								navbarLinks={ this.state.navbarLinks }
								handleButtonClick={ this.handleButtonClick }
								handleNavLinkClick={ this.handleNavLinkClick }
								navbarRef={ this.navbarRef }
							>
								<SheerWhiteContainer colorSchemeSuffix={ this.props.colorSchemeSuffix }>
									<p tabindex="0" className="font-weight-600 text-center" ref={ this.navbarRef }>Jump Down</p>
								</SheerWhiteContainer>
							</SamePageNavBarMobile>
						</MenuBarMobile>
					}
					<HomepageAboutMeSection
						blurbWidth={ this.props.blurbWidth }
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						float={ this.props.responsiveFloat }
						isMobile={ this.props.isMobileView }
						quote={ this.projectData.aboutMeSection.quote }
						links={ this.projectData.aboutMeSection.links }
						materialIconFill={ this.props.materialIconFill }
						portraitWidth={ this.props.portraitWidth }
						paragraphs={ this.projectData.aboutMeSection.paragraphs }
						responsiveFloat={ this.props.responsiveFloat }
						ref={ this.aboutSectionRef }
					/>
					<HomepageProjectsSection
						id={ this.projectData.highlightsSection.id }
						float={ this.props.responsiveFloat }	
						title="Highlights"
						isMobile={ this.props.isMobileView }
						projects={ this.projectData.highlightsSection.projects }
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						materialIconFill={ this.props.materialIconFill }
						ref={ this.highlightsSectionRef }
					/>
					<HomepageMediaSection
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						materialIconFill={ this.props.materialIconFill }
						paragraphs={ this.projectData.mediaSection.paragraphs }
						ref={ this.mediaSectionRef }
					/>
					{ this.projectData.projectSections.map((projectSection, index) =>
						<HomepageProjectsSection
							id={ projectSection.id }
							key={ projectSection.id }
							float={ this.props.responsiveFloat }	
							title={ projectSection.title }
							isMobile={ this.props.isMobileView }
							projects={ projectSection.projects }
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							materialIconFill={ this.props.materialIconFill }
							ref={ this.projectSectionRefs[index] }
						/>
					)}
				</main>
				<Footer
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					materialIconFill={ this.props.materialIconFill }
				/>
			</div>
		</div>
    );
  };
}

export default HomePage;
