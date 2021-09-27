import React, { InputHTMLAttributes } from "react";
import { Input } from "./TextInput.styled";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * Placeholder text
     */
    placeholder?: string
}

export const TextInput: React.FC<TextInputProps> = ({placeholder, ...rest}) => {
    if (!rest.type) {
        rest.type ="text";
    }
    return <Input placeholder={placeholder} {...rest}/>
}