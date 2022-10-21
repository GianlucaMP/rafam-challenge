import React from "react";

import "./buttons.css";

function SubButtonSidebar ({ text, selected }) {
	return (
		<button className={selected ? ("subButton subButtonSelected") : ("subButton")}>{text}</button>
	);
}

export default SubButtonSidebar;