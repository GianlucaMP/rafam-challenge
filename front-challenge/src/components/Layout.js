import React from "react";
import Sidebar from "./molecules/Sidebar/Sidebar";
import PageContainer from "./molecules/PageContainer/PageContainer";

import "./layout.css";

const Layout = ({children, pageTitle}) => {
	return (
		<>
			<Sidebar/>
			<PageContainer pageTitle={pageTitle}>
				{children}
			</PageContainer>
		</>
	);
}

export default Layout;