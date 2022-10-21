import React from "react";

import "./buttons.css";

const ButtonSidebar = ({ text, expandible, selected }) => {

	return (
		<button className="buttonSidebar">
			{expandible && <i className="arrow right"></i> }
			{selected && <i className="arrow down"></i> }
			<span>&nbsp; &nbsp;</span>
			{text}
		</button>
	);
}

export default ButtonSidebar;