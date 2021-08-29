import { combineReducers, Reducer } from "redux";
import { all, fork } from "redux-saga/effects";
import { themeReducer, ThemeState } from "./theme";
import { userReducer, UserState } from "./user";
import userSagas from "./user/sagas";

// The top-level state object
export interface ApplicationState {
	user: UserState;
	theme: ThemeState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = (): Reducer<ApplicationState> =>
	combineReducers({
		user: userReducer,
		theme: themeReducer
	});

export function* rootSaga() {
	yield all([userSagas].sort().map(fork));
}
