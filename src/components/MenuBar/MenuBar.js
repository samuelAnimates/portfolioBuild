import React from "react";
import "./MenuBar.css";

const MenuBar = props => (	
	<div className="display-flex font-Overpass left-0 position-fixed top-0">
		{ props.children }		
	</div>
);
export default MenuBar;