import React from "react";

import "./buttons.css";

function SessionButton ({ type }) {

	let iconurl = "./icons/" + type + ".svg";

	return (
		<button className="sessionButton"><img alt={type} className="sesionButtonImg" src={iconurl} /></button>
	);
}

export default SessionButton;