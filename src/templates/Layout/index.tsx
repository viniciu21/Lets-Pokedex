import React from "react";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import Routes from "../../routes";

const Layout = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<BrowserRouter>
				<CssBaseline />
				<Header />
				<Routes />
			</BrowserRouter>
		</div>
	);
};

export default Layout;
