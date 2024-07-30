import React, {Component} from "react";
import "./PlaysContainerTrustIssues.css";
import PhotoEmbedContainer from "../PhotoEmbedContainer";
import PlaysContainerIndividual from "../PlaysContainerIndividual";

class PlaysContainerTrustIssues extends Component{
	
	state = {
		expanded: "false",
		buttonTextLead: "Click to show ",
		cssDisplay: "display-none",
	}

	playInfo = {
		shortTitle: `"Trust Issues"`,
		buttonId: "playsButtonNotes",
		containerId: "playsCollapsibleContainerNotes",
		fullTitle: "Trust Issues",
		notes: "ayyylmao",
		audioEmbed: {
			src: "../assets/plays/notes/fromTheNotesAudio.mp3",
			alt: "A close-up of typed notes on index cards. The top card reads, 'These cards are just for you. Feel free to tell the rest of the audience whatever you think they should know, but don't let anyone else see these. NEXT CARD.'"
		},
		imageEmbed: {
			src: "../assets/images/projectPhotos/plays.jpg",
			alt: "A close-up of typed notes on index cards. The top card reads, 'These cards are just for you. Feel free to tell the rest of the audience whatever you think they should know, but don't let anyone else see these. NEXT CARD.'"
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
							<p className="padding-bottom-p5em padding-top-p5em">
								Ensemble members Brady and Ona find 2 Audience Volunteers to join them onstage, going up to people individually and making sure they would be comfortable with the task outlined below. They all stand side by side in a line facing the audience, with a volunteer in position 3 and 4, as marked below.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								STAGE LEFT [4] [3] [2] [1] STAGE RIGHT
							</p>
						</div>
						<div className="padding-bottom-p5em padding-top-p5em">
							<h5  className="padding-bottom-p5em padding-top-p5em text-center">
								Sam
							</h5>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam, holding a spiral-bound stack of notecards, stands in front of Brady. He clears his throat, goes through the notecards in his hand, takes a deep breath, closes his eyes, and falls backwards onto Brady.)
							</p>
							<h5  className="padding-bottom-p5em padding-top-p5em text-center">
								Ensemble members and Sam
							</h5>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(While catching Sam and helping him back up, Brady tells a two-sentence story about a time they trusted someone, and whether or not it worked out for them.)
							</p>
							<h5  className="padding-bottom-p5em padding-top-p5em text-center">
								Sam and volunteers
							</h5>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam repeats this process 1 more time, lining up with the Audience Volunteer at position [3], falling backwards and waiting for them to tell a two-sentence story too. If it seems like they aren't going to, he moves on.)
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam turns sharply to the left, and walks in front of the Audience Volunteer at position [4]. He turns sharply to face the the Volunteer, rips out his notes from the spiral binding, and hands them to the Volunteer. He sits in the audience. The play ends when the Volunteer says “Next!”)
							</p>
							<h5  className="padding-bottom-p5em padding-top-p5em text-center">
								Volunteer (at some point)
							</h5>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								Next!
							</p>
						</div>
					</div>
					<div className="padding-bottom-p5em padding-top-p5em">
						<h4>Notes:</h4>
						<p>The volunteer I gave the notecards to ignored the instructions and showed the cards to the other volunteer before reading them out loud. I still won't post the notecard text here, though. Performed at the Neo-Futurarium in Chicago on May 26, 2018.</p>
					</div>
				</div>
			</PlaysContainerIndividual>
		);
	}
}
export default PlaysContainerTrustIssues;