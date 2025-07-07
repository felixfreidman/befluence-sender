import React, { useState } from "react";
import Input from "../../components/UI/Input/Input";
import Textarea from "../../components/UI/Textarea/Textarea";
import { InputChangeEvent, TextAreaChangeEvent } from "../../types/changeEvent";
import Button from "../../components/UI/Button/Button";
import EmailCreator from "../../containers/EmailCreator/EmailCreator";

export default function Main() {
	return (
		<div>
			<EmailCreator />
		</div>
	);
}
