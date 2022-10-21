import React from "react";

import "./PageContainer.css";
import SessionBar from "../../atoms/TopBars/SessionBar";
import LocationBar from "../../atoms/TopBars/LocationBar";

const PageContainer = ({ pageTitle, children }) => {

	return (
		<div className="pageContainer">
			<SessionBar location="Municipio > Organismo"/>
			<LocationBar menuLoc="Presupuesto" subMenuLoc="Configuración"/>
			<h2 className="siteTitle">{pageTitle}</h2>
			<div className="siteContent">
				{children}
			</div>
		</div>
	);
}

export default PageContainer;