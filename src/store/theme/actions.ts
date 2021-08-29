import { action } from "typesafe-actions";
import { ThemeActionTypes } from "./types";

export const changeTheme = (payload: String) =>
	action(ThemeActionTypes.CHANGE_THEME, payload);