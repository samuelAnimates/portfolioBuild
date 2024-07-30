import React, {Component} from "react";
import "./PlaysContainerNecessaryDetails.css";
import PhotoEmbedContainer from "../PhotoEmbedContainer";
import PlaysContainerIndividual from "../PlaysContainerIndividual";

class PlaysContainerNecessaryDetails extends Component{
	
	state = {
		expanded: "false",
		buttonTextLead: "Click to show ",
		cssDisplay: "display-none",
	}

	playInfo = {
		shortTitle: `"Necessary Details"`,
		buttonId: "playsButtonDetails",
		containerId: "playsCollapsibleContainerDetails",
		fullTitle: "Necessary Details",
		imageEmbed: {
			src: "../assets/plays/details/details.svg",
			alt: "A simple illustration of a bottle of blue nail polish."
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
								Sam is sitting on a stool on-stage. He has a bottle of blue nail polish on another stool next to him. He’s wearing black pants and a blue & black plaid shirt. He has a folded blue hoodie and a black sweater on his lap.
							</p>
						</div>
						<div className="padding-bottom-p5em padding-top-p5em">
							<h5  className="padding-bottom-p5em padding-top-p5em text-center">
								Sam
							</h5>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam opens the nail polish. He applies it to fingernails while speaking. Then he puts the sweater on over his shirt. Then he wears the hoodie on top.)
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								A blue blouse, black pants, and a pair of black flats.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								Some details are necessary. For example, the overall 5-year relative survival rate of people diagnosed with stomach cancer in the United States is 31%. And 31 was a solid, specific number that we could hold onto.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								But some details aren’t necessary. For example, while the overall survival rate is 31%, it differs by stage. The American Cancer Society website has a table that breaks it down by stage. So, it goes from stage IA with a survival rate over 90%, down to stage IIIC with a rate under 20. Stage IV isn’t on that table. Because some details aren’t necessary and what you don't know can't hurt you and eventually if you look enough just like three friends helping a mom buy a pair of black flats as a gift for her daughter, that’s all that JCPenney’s gonna ask you to be.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								But some details are necessary. The simplicity of those shoes that took hours to find, because God forbid that someone try to buy a pair of black flats without a bunch of weird stuff on it. The coating of sour gummy powder on a coffee table in temporary housing because Lydia and I know you wouldn't want good candy to go to waste. Especially not the several pound box with the tongs. Yeah it's good. Hot Cheeto dust on fingers. Not just Hot Cheetos but every flamin hot product Ralph's sells. Funyuns, Fritos, there may have been some lime in there too. Salt on car tires just 5 months earlier. And the crisp crease of a paper crane that’s still way better than one I can fold, even after teaching dozens of people how to make them in the park.
							</p>
							<p className="padding-bottom-p5em padding-top-p5em">
								There are a lot of details I'll never know, but these are the details I need to remember now.
							</p>
							<p className="font-weight-700 padding-bottom-p5em padding-top-p5em">
								(Sam walks off-stage and into a seat in the audience.)
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
export default PlaysContainerNecessaryDetails;