import React, {Component} from "react";
import "./PlaysContainerNotesOf.css";
import PlaysContainerIndividual from "../PlaysContainerIndividual";
import AudioEmbedContainer from "../AudioEmbedContainer/AudioEmbedContainer";

class PlaysContainerNotesOf extends Component{
	
	state = {
		expanded: "false",
		buttonTextLead: "Click to show ",
		cssDisplay: "display-none",
	}

	playInfo = {
		shortTitle: `"From the Notes of..."`,
		buttonId: "playsButtonNotes",
		containerId: "playsCollapsibleContainerNotes",
		fullTitle: "From the Notes of Samuel R. Mendez on the Discovery and Occupation of the Neo-World",
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
							<h4 className="padding-bottom-p5em padding-top-p5em text-center">
								"{ this.playInfo.fullTitle }"
							</h4>
						</div>
						<div className="padding-bottom-p5em margin-auto text-center" style={{"width": this.props.width }}>
							<AudioEmbedContainer
								embed={ this.playInfo.audioEmbed }
							/>
						</div>
					</div>
					<div className="border-bottom-2px-double-rgba-107-0-111-0p8">
						<div className="padding-bottom-p5em padding-top-p5em">
							<h4 className="padding-top-p5em">Script:</h4>
							<h5 className="text-center">Set-up</h5>
							<p>
								Sam starts off standing at the back of the stage. He speaks into an audio recorder and listens to it live through headphones. He walks around to interact with and examine audience members.
							</p>
						</div>
						<div className="padding-bottom-p5em padding-top-p5em">
							<h5  className="padding-bottom-p5em padding-top-p5em text-center">
								Sam
							</h5>
							<p className="padding-bottom-p5em padding-top-p5em">
								It is currently <span className="font-weight-700">(time and date)</span>. This is the record of Samuel R. Mendez, documenting a mission which will no doubt soon be successful.
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam hangs a small rainbow American flag on stage.)
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Item. We have taken this land by proclamation with a banner.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Item. As no one offered any contradiction… finders-keepers, no take-backs.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Item. Our new subjects  are a quiet, orderly people. We reason that they may be subdued by a very small army. We did not find, as some might expect, any cannibals among them.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Item. They cover themselves with cloths that are quite beautiful… from afar.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Item. We made signs for 2 natives to come closer. We employed shining objects to placate them. We presented them with gifts made from cloth. entice them ever closer. They no doubt value these gifts more than even their own lives.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Item. Attempts were made to barter with the other natives.
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam offers a used glowstick for bartering with one of the subjects still sitting in the audience. He looks around and repeats his last line if he needs to.)
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Item. These new subjects are a kind, generous people.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Item. Thus they barter like idiots.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Item. The first 2 recruited natives were lazing about like idle buffoons before being told to recruit the rest of their people to join them.
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam speaks while using hand motions to direct the subjects onstage to go recruit their people; he also helps direct audience members to come on stage. He goes to the top of the theater and speaks down to the audience.)
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								So... on many levels I’m pretty confident I’m a way better person than Christopher Columbus. But sometimes...
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Columbus alternated between complimenting the people he encountered and taking advantage of them. He talked about how generous they were and how easy they would be to take over. They’re really nice, so they’ll make great slaves.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								I think he got lost or his equipment malfunctioned. The only explanation he could fathom for these readings he didn’t understand was that Ptolemy and other philosophers were right that world was round. But they didn't know about this giant nipple on it between China and India. He used the word “nipple” a surprising number of times in his letters to Ferdinand and Isabella. You don’t have to take my word for it, you can look it up online.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Item. So... on many levels I’m pretty confident I’m a way better person than Christopher Columbus. But sometimes I think I might also owe my success to whatever delusion or god will tell me I’m on the right path.
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam turns off the recorder and unplugs the headphones. He kicks back and puts his feet up on the back row of chairs in the theater. He begins playing the recording back to himself from the voice recorder. )
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(From the recorder: “It is currently (time and date). This is the record of Samuel R. Mendez, documenting a mission which will no doubt soon be successful...”)
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(The end of the play gets called after a moment or two.)
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								Next!
							</p>
						</div>
					</div>
					<div className="padding-bottom-p5em padding-top-p5em">
						<h4>Notes:</h4>
						<p>This is funnier than it looks on paper, I swear. Performed at the Neo-Futurarium in Chicago on May 26, 2018.</p>
					</div>
				</div>
			</PlaysContainerIndividual>
		);
	}
}
export default PlaysContainerNotesOf;