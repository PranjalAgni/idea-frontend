import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import { createRootReducer, rootSaga } from "./index";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function congifureStore() {
	const sagaMiddleware = createSagaMiddleware();
	const rootReducer = createRootReducer();
	const persistConfig = {
		key: "root",
		storage: AsyncStorage
	};
	const persistedReducer = persistReducer(persistConfig, rootReducer);
	const composeEnhancers = composeWithDevTools({});
	const store = createStore(
		persistedReducer,
		undefined,
		composeEnhancers(applyMiddleware(sagaMiddleware))
	);

	const persistor = persistStore(store);

	sagaMiddleware.run(rootSaga);

	return { store, persistor };
}
