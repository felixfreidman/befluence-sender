import React, { useState } from "react";
import { InputChangeEvent } from "../../../types/changeEvent";

interface InputComponent {
	value?: string;
	placeholder: string;
	name?: string;
	inputID: string;
	inputTitle?: string;
	changeHandler: (event: InputChangeEvent) => void;
}

export default function Input({
	value,
	placeholder,
	name,
	inputID,
	inputTitle,
	changeHandler,
}: InputComponent) {
	return (
		<label htmlFor={inputID} className="classes.InputContainer">
			<span className="classes.InputContainer__Header">{inputTitle}</span>
			<input
				value={value}
				placeholder={placeholder}
				name={name}
				id={inputID}
				onChange={changeHandler}
				className="classes.InputContainer__Input"
			/>
		</label>
	);
}
