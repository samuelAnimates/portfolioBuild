import React from "react";
import "./MediaItem.css";
import InlineA from "../InlineA";
import LinkContainerWithGenericIcon from "../LinkContainerWithGenericIcon";

const MediaItem = props => (

	<div>
		<span className="font-weight-700">{ props.lede }:</span>&nbsp;
		{ props.year }. { props.authors }.&nbsp;
		<LinkContainerWithGenericIcon
			materialIconFill={ props.materialIconFill }
		>
			<InlineA 
				colorSchemeSuffix={ props.colorSchemeSuffix }
				isInternalLink={ false }
				text={ props.title }
				urlPath={ props.link } 
			/>
		</LinkContainerWithGenericIcon>
		. 
		&nbsp;{ props.publisher }.
	</div>

);

export default MediaItem;