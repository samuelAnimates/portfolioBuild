import React, {Component} from "react";
import "./PlaysContainerTheFuture.css";
import PhotoEmbedContainer from "../PhotoEmbedContainer";
import PlaysContainerIndividual from "../PlaysContainerIndividual";

class PlaysContainerTheFuture extends Component{
	
	state = {
		expanded: "false",
		buttonTextLead: "Click to show ",
		cssDisplay: "display-none",
	}

	playInfo = {
		shortTitle: `"...the Future..."`,
		buttonId: "playsButtonNotes",
		containerId: "playsCollapsibleContainerNotes",
		fullTitle: "What do you do when the future looks just like the past?",
		imageEmbed: {
			src: "../assets/plays/theFuture/theFuture01.jpeg",
			alt: "4 squares made with blue painters tape on a hardwood floor."
		}
	}

	handlePlaysButtonClick = event => {
		event.preventDefault();
		if(  event.target.getAttribute("aria-expanded") === "false"){
			this.setState({expanded: 'true', buttonTextLead: "Click to hide ", cssDisplay: "display-block"});
			
		}
		else if( event.target.getAttribute("aria-expanded") === "true"){
			this.setState({expanded: 'false', buttonTextLead: "Click to show ", cssDisplay: "display-none"});
		}
	}

	render() {
		return (
			<PlaysContainerIndividual
				aria_expanded={ this.state.expanded }
				aria_controls={ this.playInfo.containerId }
				buttonId={ this.playInfo.buttonId }
				cssDisplay={ this.state.cssDisplay }
				onClickFunction={ this.handlePlaysButtonClick }
				colorSchemeSuffix={ this.props.colorSchemeSuffix }
				text={ this.state.buttonTextLead + this.playInfo.shortTitle }
			>
				<div id={ this.playInfo.containerId } className={ "display-flex flex-direction-column padding-bottom-p5em padding-left-p5em padding-right-p5em padding-top-p5em plays-individual-container-" + this.props.colorSchemeSuffix}>
					<div className={"border-bottom-2px-double-rgba-107-0-111-0p8 padding-bottom-p5em padding-top-p5em display-flex flex-direction-" + this.props.responsiveFlexEnding }>
						<div className="padding-bottom-p5em margin-auto text-center" style={{"width": this.props.width }}>
							<PhotoEmbedContainer
								embed={ this.playInfo.imageEmbed }
							/>
						</div>
						<div className="padding-bottom-p5em margin-auto text-center" style={{"width": this.props.width }}>
							<h4 className="padding-bottom-p5em padding-top-p5em text-center">
								"{ this.playInfo.fullTitle }"
							</h4>
						</div>
					</div>
					<div className="border-bottom-2px-double-rgba-107-0-111-0p8">
						<div className="padding-bottom-p5em padding-top-p5em">
							<h4 className="padding-top-p5em">Script:</h4>
							<h5 className="text-center">Set-up</h5>
							<p>
								Sam starts off standing in a rectangular area of the room marked off with tape on the ground. While talking, he uses a roll of tape in his hands to lean out over the tape boundary and make a smaller rectangle, that he then steps forward into with his right foot. He repeats this process to move out into the crowd through a tape-outlined stepping-stone path while speaking.
							</p>
						</div>
						<div className="padding-bottom-p5em padding-top-p5em">
							<h5  className="padding-bottom-p5em padding-top-p5em text-center">
								Sam
							</h5>
							<p className="padding-bottom-p5em padding-top-p5em">
								WHAT am I doing here? What AM I doing here? What am I doing here? What am I DOING here? What am I doing HERE?
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								I find myself asking the same questions over and over again. I think I have an idea that I’m getting stronger. If you want to build up a muscle you have to tear it a million times first.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								How many times can I ask myself what I’m doing here before the answer doesn’t matter anymore?
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Here, Sam counts off the sides of the next rectangle as he makes them.)
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								1. 2. 3.  4.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								In 2010 I first came to Cambridge and I kind of hated it. I felt like superman, but back when he was a slimy alien baby in a corn field.
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam starts doing single-legged squats in the last rectangle while talking. If he gets tired, he'll do a jumping lunge to switch feet.)
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								In 2011 I signed my first lease. I had a roommate who bought a ton of food just to let it rot in the fridge. In 2012 I left the country because Harvard payed for it. I saw the Mona Lisa and I found out it was really just a painting. 2013, I went to bodegas in Lawrence, Massachusetts, and was in a sea of Spanglish I could only half-understand. 2014, I got a degree that took me around the world and eventually got me back to Cambridge, where I feel like an astronaut bracing myself for 0.
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam stops doing squats and kicks his free leg back into the previous rectangle.) 
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								4, 3, 2, 1.
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam mimics a flying rocket ship with his hand, starting off from the ground by his rear foot and flying forward in an arc around him. When it reaches his eyes, he examines it and it just turns back into a normal hand.)
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Is any of this gonna help my mom pay her gas bill or help my cousins get into college or help my community in any of the ways I thought I originally went to college for?
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam steps out of the rectangles like nothing and walks back next to the rectangle path, pointing out specific rectangles along the way.)
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								I know that theoretically, I exist in every possible version of this world at once. I'm an alien who doesn’t know how to get back to my home world. I’m a goddess who doesn’t have just one home world to go back to. And somehow I still think we’re all about to ask the same question.
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam looks at an audience member to ask them the question. Prompting them directly if they don’t realize that it’s a genuine question.)
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Do you ever feel conflicted about what you're doing here too?
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								Sam might ask a follow-up question or dialogue a little bit depending on the person’s mood/vibe. Then he’ll end the conversation by thanking them and gesturing for the audience to start clapping for the audience member as he finds a place to join the audience.?
							</p>
						</div>
					</div>
					<div className="padding-bottom-p5em padding-top-p5em">
						<h4>Notes:</h4>
						<p>Performed at "The Awakening: An Afrofuturism-Inspired Multimedia Art Show" at MIT on November 5, 2018. (I won a prize!)</p>
					</div>
				</div>
			</PlaysContainerIndividual>
		);
	}
}
export default PlaysContainerTheFuture;