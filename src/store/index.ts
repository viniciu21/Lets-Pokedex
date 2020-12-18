import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { PokedexState } from "./ducks/pokedex/types";

import rootSaga from "./ducks/rootSaga";
import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
	pokedexReducer: PokedexState;
}

const sagaMiddleware = createSagaMiddleware();
const store: Store<ApplicationState> = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
