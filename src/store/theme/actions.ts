import { action } from "typesafe-actions";
import { ThemeActionTypes } from "./types";

export const changeTheme = (payload: string) =>
	action(ThemeActionTypes.CHANGE_THEME, payload);
