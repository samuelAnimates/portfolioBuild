import React, {Component} from "react";
import "./PlaysContainerNecessaryToThe.css";
import PhotoEmbedContainer from "../PhotoEmbedContainer";
import PlaysContainerIndividual from "../PlaysContainerIndividual";

class PlaysContainerNecessaryToThe extends Component{
	
	state = {
		expanded: "false",
		buttonTextLead: "Click to show ",
		cssDisplay: "display-none",
	}

	playInfo = {
		shortTitle: `"Necessary to the security..."`,
		buttonId: "playsButtonNotes",
		containerId: "playsCollapsibleContainerNotes",
		fullTitle: "Necessary to the security of a Free State.",
		notes: "ayyylmao",
		audioEmbed: {
			src: "../assets/plays/notes/fromTheNotesAudio.mp3",
			alt: "A close-up of typed notes on index cards. The top card reads, 'These cards are just for you. Feel free to tell the rest of the audience whatever you think they should know, but don't let anyone else see these. NEXT CARD.'"
		},
		imageEmbed: {
			src: "../assets/plays/security/security.jpg",
			alt: "A close-up of a hand holding a paper crane."
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
								Sam places a brightly colored arts-and-crafts sort of bag open on one end of the stage. He holds ten paper cranes in his right hand and a claw grabber in his left hand as he stands at the other end of stage. A drop box above stage is filled with paper cranes.
							</p>
						</div>
						<div className="padding-bottom-p5em padding-top-p5em">
							<h5  className="padding-bottom-p5em padding-top-p5em text-center">
								Sam
							</h5>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam leans over and spins around with his forehead on the handle of a claw grabber while repeating “We have to keep our kids safe” ten times. Sam should be dizzy by the end.)
							</p>
							<p>We have to keep our kids safe.
								We have to keep our kids safe.
								We have to keep our kids safe.
								We have to keep our kids safe.
								We have to keep our kids safe.
								We have to keep our kids safe.
								We have to keep our kids safe.
								We have to keep our kids safe.
								We have to keep our kids safe.
								We have to keep our kids safe.
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam stands up and tosses the paper cranes in the air like confetti. He keeps the claw grabber in his left hand and uses it to grab one paper crane at a time. Once Sam grabs a crane, he races with it to the other end of the stage and drops it in the open bag. When he gets the crane in the bag he says, “This is the only way to accomplish this goal.”)
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								This is the only way to accomplish this goal.
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam repeats this process, trying to get all 10 cranes in the bag before the play’s 2-minute length is over. Tech lead will wait until it Sam collects 5 cranes in the bag before they release a mass of paper cranes from the dropbox overhead. Sam will start to rush in a futile attempt to collect them all in the bag before an ensemble member calls “Next!”)
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								Next!
							</p>
						</div>
					</div>
					<div className="padding-bottom-p5em padding-top-p5em">
						<h4>Notes:</h4>
						<p>Performed at the Neo-Futurarium in Chicago on March 25, 2018.</p>
					</div>
				</div>
			</PlaysContainerIndividual>
		);
	}
}
export default PlaysContainerNecessaryToThe;