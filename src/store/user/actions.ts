import { action } from "typesafe-actions";
import {
	StartUserSignup,
	UserActionTypes,
	UserSignupFailed,
	UserSignupSuccess
} from "./types";

export const startSignup = (payload: StartUserSignup) =>
	action(UserActionTypes.START_SIGNUP, payload);

export const signupSuccess = (payload: UserSignupSuccess) =>
	action(UserActionTypes.SIGNUP_SUCCESS, payload);

export const signupFailed = (payload: UserSignupFailed) =>
	action(UserActionTypes.SIGNUP_FAILED, payload);
