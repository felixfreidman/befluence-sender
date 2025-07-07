import React from "react";

interface ButtonComponent {
	title: string;
	type?: string;
	clickHandler: () => void;
}

export default function Button({ title, type, clickHandler }: ButtonComponent) {
	const classesArray: string[] = ["classes"];

	switch (type) {
		case "save":
			classesArray.push("classes.Button__save");
			break;
		default:
			classesArray.push("Button__default");
			break;
	}

	return (
		<div className={classesArray.join(" ")} onClick={clickHandler}>
			{title}
		</div>
	);
}
