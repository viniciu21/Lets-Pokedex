import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { PokedexState } from "./types/pokedex";

import rootSaga from "./sagas";
import rootReducer from "./reducers";

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
