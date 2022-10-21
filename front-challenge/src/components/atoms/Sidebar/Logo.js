import React from "react";

import "./logo.css";

const Logo = () => {

	return (
		<div className="logoContainer">
			<div className="logoImageContainer">
				<img src="./logo.png" alt="logo rafam" width={'40'} />
			</div>
			<div className="logoTextContainer">
				<img src="./logoTexto.png" alt="texto logo rafam" width={'120'} />
			</div>
			<div style={{clear: 'both'}}></div>
		</div>
	);
}

export default Logo;

