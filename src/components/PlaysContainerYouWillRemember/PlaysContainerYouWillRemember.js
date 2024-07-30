import React, {Component} from "react";
import "./PlaysContainerYouWillRemember.css";
import PlaysContainerIndividual from "../PlaysContainerIndividual";
import VideoEmbedContainer from "../VideoEmbedContainer";

class PlaysContainerYouWillRemember extends Component{
	
	state = {
		expanded: "false",
		buttonTextLead: "Click to show ",
		cssDisplay: "display-none",
	}

	playInfo = {
		shortTitle: `"You will remember me..."`,
		buttonId: "playsButtonNotes",
		containerId: "playsCollapsibleContainerNotes",
		fullTitle: "You will remember me not by my name or by my words, but by my actions. The steps I take on this earth today will ripple through time and space. They will occupy every nook and cranny within your very soul, and you will take them home with you. From this day on, many will enter the stage and see my echos. Some will love it. Some will hate it. Some will not even notice it among the excitement and mess of live theater. But by God will I have made a change in this world, no matter how small.",
		notes: "ayyylmao",
		videoEmbed: {
			url: "https://www.youtube.com/embed/N_lCmBvYMRs?start=73",
			title: "Whitney Houston - Star Spangled Banner on YouTube"
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
							<h4 className="padding-bottom-p5em padding-top-p5em text-center">
								"{ this.playInfo.fullTitle }"
							</h4>
						</div>
						<div className="padding-bottom-p5em margin-auto text-center" style={{"width": this.props.width }}>
							<VideoEmbedContainer
								colorSchemeSuffix={ this.props.colorSchemeSuffix }
								embed={ this.playInfo.videoEmbed }
								doNotTrack={ this.props.doNotTrack }
							/>
						</div>
					</div>
					<div className="border-bottom-2px-double-rgba-107-0-111-0p8">
						<div className="padding-bottom-p5em padding-top-p5em">
							<h4 className="padding-top-p5em">Script:</h4>
						</div>
						<div className="padding-bottom-p5em padding-top-p5em">
							<h5  className="padding-bottom-p5em padding-top-p5em text-center">
								Sam's Performance
							</h5>
							<p className="padding-bottom-p5em padding-top-p5em">
								A song plays over the speakers: Whitney Houston singing the national anthem at the 1991 Super Bowl in Tampa, Florida. It fills the room. All the ensemble members rise for the national anthem. They direct the audience to rise too.
							</p>
							<p>
								Sam walks to center stage. He shows the audience what’s in his hand: a large spice container filled with assorted silver and gold glitter. He walks around the theater and through the audience. He’s sprinkling glitter as many surfaces as possible.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								He throws it into his hand. He throws it into the air. He blows it out of his hand. He makes little designs. He hams it up a bit, honestly. But everyone’s into it. Toward the end of the song, he takes the lid off the container and dumps the rest of the glitter on stage. He hurls the container across the stage with an artful twist.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								He goes back to his seat. A pile of silver glitter drops from the ceiling in time with the final fanfare, halfway through the word “BRAAAAAAAAAAAVE”.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								The audience in the Whitney Houston recording goes wild.
							</p>
						</div>
					</div>
					<div className="padding-bottom-p5em padding-top-p5em">
						<h4>Notes:</h4>
						<p>The audience in the room went wild too. Performed at the Neo-Futurarium in Chicago on May 26, 2018.</p>
					</div>
				</div>
			</PlaysContainerIndividual>
		);
	}
}
export default PlaysContainerYouWillRemember;