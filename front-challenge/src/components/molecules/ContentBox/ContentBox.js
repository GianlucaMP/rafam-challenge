import React from "react";

import "./contentbox.css";

const ContentBox = ({ title, description, links }) => {
	let linksElement = [];
	if (links) {
		links.forEach(element => {
			linksElement.push(<p className="contentBoxLink" key={element}>{element}</p>);
		});
	}

	return (
		<div className="contentBoxContainer">
			<h3 className="contentBoxTitle">{title}</h3>
			<p className="contentBoxDescripcion">{description}</p>
			{linksElement}
		</div>
	);
}

export default ContentBox;