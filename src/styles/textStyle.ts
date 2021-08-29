import { TextStyle } from "react-native";
import { fontFamily, colors, fontSize } from "../constants/styleConstants";

const textBase: TextStyle = {
	fontFamily: fontFamily.regular,
	color: colors.white
};

export const h1: TextStyle = {
	...textBase,
	lineHeight: 90,
	fontSize: fontSize.h1,
	fontWeight: "700"
};

export const h2: TextStyle = {
	...textBase,
	lineHeight: 64,
	fontSize: fontSize.h2,
	fontWeight: "700"
};

export const h3: TextStyle = {
	...textBase,
	lineHeight: 45,
	fontSize: fontSize.h3,
	fontWeight: "700"
};

export const h4: TextStyle = {
	...textBase,
	lineHeight: 32,
	fontSize: fontSize.h4,
	fontWeight: "700"
};

export const paragraph: TextStyle = {
	...textBase,
	fontWeight: "500",
	fontSize: fontSize.paragraph,
	lineHeight: 22
};

export const paragraphBold: TextStyle = {
	...paragraph,
	fontWeight: "700"
};

export const small: TextStyle = {
	...textBase,
	fontWeight: "500",
	fontSize: fontSize.small,
	lineHeight: 22
};

export const smallBold: TextStyle = {
	...small,
	fontWeight: "700"
};

export const xsmall: TextStyle = {
	...textBase,
	fontWeight: "500",
	fontSize: fontSize.xs,
	lineHeight: 16
};

export const xsmallBold: TextStyle = {
	...xsmall,
	fontWeight: "700"
};
