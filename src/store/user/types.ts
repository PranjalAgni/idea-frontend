export type StartUserSignup = {
	fullName: string;
	email: string;
	password: string;
};

export type UserSignupSuccess = {
	fullName: string;
	email: string;
};

export type UserSignupFailed = {
	errors: Record<string, unknown>[];
};

export enum UserActionTypes {
	START_SIGNUP = "@@user/START_SIGNUP",
	SIGNUP_SUCCESS = "@@user/SIGNUP_SUCCESS",
	SIGNUP_FAILED = "@@user/SIGNUP_FAILED"
}

// Declare state types with `readonly` modifier to get compile time immutability.
export interface UserState {
	readonly fullName: string | null;
	readonly email: string | null;
	readonly isAuthenticated: boolean;
	readonly isLoading: boolean;
	readonly errors?: Record<string, unknown>[];
}
