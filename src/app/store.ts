import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "../features/Email/EmailSlice";
import tableReducer from "../features/Table/TableSlice";

export const store = configureStore({
	reducer: {
		email: emailReducer,
		table: tableReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
