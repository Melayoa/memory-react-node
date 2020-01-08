import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './redux/reducers';
import sagas from './redux/sagas';
import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from "./business/routes";
import { AppWrapper } from "./styles";

export default function App() {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

	sagaMiddleware.run(sagas);

	return (
		<Provider store={store}>
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
		</Provider>

	);
}
