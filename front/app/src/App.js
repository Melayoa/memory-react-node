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
	//Initialisation de mon middleware
	const sagaMiddleware = createSagaMiddleware();
	//Initialisation de mon store avec mes reducers et mes sagas
	const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
	// Je lance mon middleware avec ma fonction génératrice qui contient mes sagas
	sagaMiddleware.run(sagas);

	return (
		//On passe le store au Provider
		<Provider store={store}>
			{/*On met un router en place qui permet de gérer les routes de mon app*/}
			<Router  >
				<AppWrapper >
					{/* Un header qui seras fixe a chaque page 
						Le Switch c'est celui qui permet d'afficher le composant assigné a la route que l'on veut afficher
					*/}
					<Header />
					<Switch>
						{/* Je parcours mon tableau de routes et pour chaque route je lui donne les props comme le composant, le path etc  */}
						{routes.map(route => {
							const { path, name, component, id, exact } = route;
							return (
								<Route path={path} component={component} title={name} key={id} exact={exact} />
							)
						})}</Switch>
					{/* Footer fixe a chaque page */}
					<Footer />
				</AppWrapper>
			</Router>
		</Provider>

	);
}
