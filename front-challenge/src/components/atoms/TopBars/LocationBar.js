import React from "react";

import "./LocationBar.css";
import ButtonExecute from "../Buttons/ButtonExecute";

const LocationBar = ({ menuLoc, subMenuLoc }) => {

	return (
		<div className="locationBarContainer">
			<div className="locationTextContainer">
				{menuLoc} <span className="subMenuText">&gt; {subMenuLoc}</span>
			</div>
			<div className="locationOptionsContainer">
				<span>Ejercicio:</span>
				<select className="yearSelect">
					<option>2020</option>
				</select>
				<ButtonExecute text="En ejecución" />
			</div>
			<div style={{clear: 'both'}}></div>
		</div>
	);
}

export default LocationBar;