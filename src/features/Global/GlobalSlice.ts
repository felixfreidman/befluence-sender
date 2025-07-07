import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalTitle {
	title: string;
}

const initialState: GlobalTitle = {
	title: "",
};

const globalSlice = createSlice({
	name: "Global",
	initialState,
	reducers: {
		setTitle: (state, action: PayloadAction<string>) => {
			state.title = action.payload;
		},
	},
});

export const { setTitle } = globalSlice.actions;
export default globalSlice.reducer;
