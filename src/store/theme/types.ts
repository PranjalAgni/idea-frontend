export enum ThemeActionTypes {
	CHANGE_THEME = "@@theme/CHANGE_THEME"
}

export interface ThemeState {
	readonly mode: string | null;
}
