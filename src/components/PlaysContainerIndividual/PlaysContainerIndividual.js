import React from "react";
import "./PlaysContainerIndividual.css";
import ButtonContainer from "../ButtonContainer";
import PlaysButton from "../PlaysButton";

const PlaysContainerIndividual = props => (
	
	<div>
		<article className="padding-bottom-p5em padding-left-p5em padding-right-p5em padding-top-p5em">
			<ButtonContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
				<h3 className="font-size-1p25em">
					<PlaysButton
						aria_expanded={ props.aria_expanded }
						aria_controls={ props.aria_controls }
						buttonType="playsButton"
						tabIndex="0"
						buttonId={ props.buttonId }
						onClickFunction={ props.onClickFunction }
						colorSchemeSuffix={ props.colorSchemeSuffix }
						text={ props.text }
					/>
				</h3>
				<div className={ "padding-bottom-p5em padding-left-p5em padding-right-p5em padding-top-p5em " + props.cssDisplay } id={ props.aria_controls }>
					{ props.children }
				</div>
			</ButtonContainer>
		</article>	
	</div>

);

export default PlaysContainerIndividual;