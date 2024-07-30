import React, {Component} from "react";
import "./PlaysContainerImpostorSyndrome.css";
import PhotoEmbedContainer from "../PhotoEmbedContainer";
import PlaysContainerIndividual from "../PlaysContainerIndividual";

class PlaysContainerImpostorSyndrome extends Component{
	
	state = {
		expanded: "false",
		buttonTextLead: "Click to show ",
		cssDisplay: "display-none",
	}

	playInfo = {
		shortTitle: `"Impostor Syndrome"`,
		buttonId: "playsButtonNotes",
		containerId: "playsCollapsibleContainerNotes",
		fullTitle: "Impostor Syndrome",
		imageEmbed: {
			src: "../assets/plays/impostor/impostor.svg",
			alt: "An illustration of a briefcase."
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
								Sam is standing slight off-stage, at stage right. A briefcase rests on the ledge of a stair by the audience seats in front of him.
							</p>
						</div>
						<div className="padding-bottom-p5em padding-top-p5em">
							<h5  className="padding-bottom-p5em padding-top-p5em text-center">
								Sam's Performance
							</h5>
							<p className="padding-bottom-p5em padding-top-p5em">
								Sam opens the briefcase and takes out a  button-up shirt. He puts it on over his t-shirt and buttons it up. He flips up the collar. He takes a tie out of the briefcase and puts it on. It’s  a little short.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								He closes the briefcase and carries it over to the main part of the stage. He places it on the ground and calmly lies down so his chest is on top of it. He uses his arms to drag himself on the briefcase toward stage left.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								There’s a loud THWACK as his hands hit the ground each time. The suitcase makes a vibrating, farting sound as the handle drags on the floor each time.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								It sounds like this: Thwack. Brrrrrrrrft. Thwack. Brrrrrrrrft. Thwack. Brrrrrrrrft.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Sam picks a couple people in the audience to smile and make eye contact with. You might think he’d stop once he reaches the end of the stage, but, oh no. Thwack. Brrrrrrrrft. Thwack. Brrrrrrrrft.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								He keeps going off-stage. He only stops once he reaches the exit door. He drags himself out. He closes the door behind him. 
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								After a moment, the play ends. 
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Next!
							</p>
						</div>
					</div>
					<div className="padding-bottom-p5em padding-top-p5em">
						<h4>Notes:</h4>
						<p>At first, the farting sound of the suitcase was an accident. Performed at the Neo-Futurarium in Chicago on May 26, 2018.</p>
					</div>
				</div>
			</PlaysContainerIndividual>
		);
	}
}
export default PlaysContainerImpostorSyndrome;