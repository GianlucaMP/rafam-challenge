import React from "react";

import "./footer.css";

const Footer = () => {

	return (
		<div className="footerContainer">
			<div className="footerImageContainer">
				<img src="./logo.png" alt="logo rafam" width={'30'} />
			</div>
			<div className="footerTextContainer">
				<p className="sidebarText" style={{marginBottom: '100px'}}>
					(0221) 429- 4484/4509
				<br/>&nbsp;<br/>
					pa@es.gov.ar
				</p>
			</div>
			<div style={{clear: 'both'}}></div>
		</div>
	);
}

export default Footer;