import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from "./components/business/routes";
import { AppWrapper } from "./styles";

export default function App() {
	return (
		<Router  >
			<AppWrapper >
				<Header />
				<Switch>
					{routes.map(route => {
						const { path, name, component, id, exact } = route;
						return (
							<Route path={path} component={component} title={name} key={id} exact={exact} />
						)
					})}</Switch>
				<Footer styles={{ bottom: 0 }} />
			</AppWrapper>
		</Router>
	);
}