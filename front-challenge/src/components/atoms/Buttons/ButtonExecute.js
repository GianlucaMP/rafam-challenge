import React from "react";

import "./buttons.css";

const ButtonExecute = ({ text }) => {

	return (
		<button className="executeButton">{text}</button>
	);
}

export default ButtonExecute;