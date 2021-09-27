import React from "react";
import { Input } from "./TextInput.styled";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Placeholder text
     */
    placeholder?: string
}

export const TextInput: React.FC<TextInputProps> = (props) => {
    console.log(props);
    return <Input type={props.type} placeholder={props.placeholder} />
}