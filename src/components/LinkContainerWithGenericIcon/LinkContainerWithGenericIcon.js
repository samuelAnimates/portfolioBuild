import React from "react";
import "./LinkContainerWithGenericIcon.css";

const LinkContainerWithGenericIcon = props => (
    <div className="display-inline">
        <svg aria-hidden="true" fill={ props.materialIconFill } transform="rotate(45 0 0)" xmlns="http://www.w3.org/2000/svg" width=".75em" height=".9em" viewBox="4 -4 14 26"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
        {props.children}
    </div>
)

export default LinkContainerWithGenericIcon;