import { Reducer } from "redux";
import { UserActionTypes, UserState } from "./types";

export const initialState: UserState = {
	fullName: null,
	email: null,
	isAuthenticated: false,
	isLoading: false,
	errors: []
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<UserState> = (state = initialState, action) => {
	switch (action.type) {
		case UserActionTypes.START_SIGNUP: {
			return {
				...state,
				isLoading: true,
				errors: []
			};
		}
		case UserActionTypes.SIGNUP_SUCCESS: {
			const { fullName, email } = action.payload;
			return {
				...state,
				isLoading: false,
				isAuthenticated: true,
				fullName,
				email,
				errors: []
			};
		}
		case UserActionTypes.SIGNUP_FAILED: {
			const errors = action.payload;

			return {
				...state,
				isLoading: false,
				isAuthenticated: false,
				errors
			};
		}
		default: {
			return state;
		}
	}
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as userReducer };
