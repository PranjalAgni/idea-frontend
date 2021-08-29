import { Reducer } from "redux";
import { ThemeActionTypes, ThemeState } from "./types";
import { themeNames } from "./../../constants/styleConstants";

export const initialState: ThemeState = {
	mode: themeNames.LIGHT
};

const reducer: Reducer<ThemeState> = (state = initialState, action) => {
	switch (action.type) {
		case ThemeActionTypes.CHANGE_THEME: {
			return {
				...state,
				mode: action.payload
			};
		}
        default: {
			return state;
		}
	}
};

export { reducer as themeReducer };
