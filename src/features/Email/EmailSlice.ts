import { createSlice } from "@reduxjs/toolkit";
import { PayloadString } from "../../types/PayloadActions";

interface Email {
	emailTitle: string;
	emailContent: string;
}

const initialState: Email = {
	emailTitle: "",
	emailContent: "",
};

const emailSlice = createSlice({
	name: "Email",
	initialState,
	reducers: {
		saveEmail: (state, action) => {
			state.emailTitle = action.payload.emailTitle;
			state.emailContent = action.payload.emailContent;
			localStorage.setItem("appState", JSON.stringify(state));
		},
		getSavedEmail: (state) => {
			const appState = localStorage.getItem("appState");
			console.log(appState);

			if (appState !== null) {
				try {
					const parsedAppState = JSON.parse(appState);
					state.emailTitle = parsedAppState.emailTitle;
					state.emailContent = parsedAppState.emailContent;
				} catch (error) {
					console.log("No app state");
				}
			}
		},
	},
});

export const { saveEmail, getSavedEmail } = emailSlice.actions;
export default emailSlice.reducer;
