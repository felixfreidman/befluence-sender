import React, { useEffect, useState } from "react";
import Input from "../../components/UI/Input/Input";
import Textarea from "../../components/UI/Textarea/Textarea";
import { InputChangeEvent, TextAreaChangeEvent } from "../../types/changeEvent";
import Button from "../../components/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getSavedEmail, saveEmail } from "../../features/Email/EmailSlice";

// TODO:
// Придумать, как вытаскивать данные из глобального стейта, а не через локальное хранилище

export default function EmailCreator() {
	const appState = localStorage.getItem("appState");
	let parsedAppState;
	if (appState !== null) {
		try {
			parsedAppState = JSON.parse(appState);
		} catch (error) {
			console.log("No app state");
		}
	}
	const [emailTitle, setEmailTitle] = useState(parsedAppState.emailTitle);
	const [emailContent, setEmailContent] = useState(
		parsedAppState.emailContent
	);
	const [mounted, setMounted] = useState(false);

	const dispatch = useDispatch<AppDispatch>();

	function inputTitleHandler(event: InputChangeEvent) {
		setEmailTitle(event.target.value);
	}

	function inputContentHandler(event: TextAreaChangeEvent) {
		setEmailContent(event.target.value);
	}

	function buttonClickHandler() {
		dispatch(saveEmail({ emailTitle, emailContent }));
	}

	if (!mounted) {
		dispatch(getSavedEmail());
	}

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div>
			<h1>BeFluence Sender</h1>
			<div className="classes.EmailContainer">
				<Input
					placeholder="Input title of Email"
					inputID="emailTitle"
					inputTitle="Email Title"
					name="emailTitle"
					changeHandler={inputTitleHandler}
					value={emailTitle}
				/>
				<Textarea
					placeholder="Input text for email"
					inputID="emailContent"
					inputTitle="Email Content"
					name="emailContent"
					changeHandler={inputContentHandler}
					value={emailContent}
				/>
				<Button title="Save" clickHandler={buttonClickHandler} />
			</div>
			<div className="classes.PreviewEmail">
				<h2>PreviewEmail</h2>
				<h3>{emailTitle}</h3>
				<h4>{emailContent}</h4>
			</div>
		</div>
	);
}
