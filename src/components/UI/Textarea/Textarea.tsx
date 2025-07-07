import React, { useState } from "react";
import { TextAreaChangeEvent } from "../../../types/changeEvent";

interface TextareaComponent {
	value?: string;
	placeholder: string;
	name?: string;
	inputID: string;
	inputTitle?: string;
	changeHandler: (event: TextAreaChangeEvent) => void;
}

export default function Textarea({
	value,
	placeholder,
	name,
	inputID,
	inputTitle,
	changeHandler,
}: TextareaComponent) {
	return (
		<label htmlFor={inputID} className="classes.InputContainer">
			<span className="classes.InputContainer__Header">{inputTitle}</span>
			<textarea
				value={value}
				placeholder={placeholder}
				name={name}
				onChange={changeHandler}
				id={inputID}
				className="classes.InputContainer__Input"
			></textarea>
		</label>
	);
}
