import React from "react";
import { TextInput } from "react-native";

export type TextInputProps = {
	madatory?: boolean;
	disabled?: boolean;
	placeholder?: string;
    value?: string;
	onChange?: () => void;
};

export const Button: React.FC<TextInputProps> = ({	
	...props
}) => {
    /**
     * TODO: Add styles and make it a reusable component with the App's theme.
     */
	return (
        <TextInput
            onChangeText={props.onChange}
            value={props.value}
            placeholder={props.placeholder}            
      />
	);
};