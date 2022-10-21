import React from "react";

import "./SessionBar.css";

import SessionButton from "../Buttons/SessionButton";

const SessionBar = ({ location }) => {

	return (
		<div className="sessionBarContainer">
			<div className="locationContainer">
				{location}
			</div>
			<div className="sessionToolsContainer">
				<div className="sessionButtons">
					<SessionButton type="search" />
					<SessionButton type="notification" />
					<SessionButton type="help" />
				</div>
				<img className="avatar" alt="avatar" src="avatar.png" />
			</div>
			<div style={{clear: 'both'}}></div>
		</div>
	);
}

export default SessionBar;