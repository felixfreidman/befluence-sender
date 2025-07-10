import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GOOGLE_API, SPREADSHEET_ID } from "../../credentials";

const tableFetcher = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1?key=${GOOGLE_API}`;

interface TableRow {
	name: string;
	email: string;
	status: string;
	amount: string;
}

interface TableState {
	rows: TableRow[];
	loading: boolean;
	error: string | null;
}

const initialState: TableState = {
	rows: [],
	loading: false,
	error: null,
};

export const fetchGoogleSheet = createAsyncThunk<TableRow[]>(
	"table/fetchTable",
	async () => {
		// const response = await fetch(tableFetcher);
		// const data = await response.json();
		// const dataRows = data.values;

		const dataRows = [
			["Name", "Mail", "Status", "Amount"],
			["Felix", "felixfreidman@gmail.com", "Not sent", "0"],
			["Phil", "feleefreid@gmail.com", "Not sent", "0"],
		];

		const rows: TableRow[] = dataRows.map((item: any) => ({
			name: item[0],
			email: item[1],
			status: item[2],
			amount: item[3],
		}));

		return rows;
	}
);

const tableSlice = createSlice({
	name: "Table",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGoogleSheet.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				fetchGoogleSheet.fulfilled,
				(state, action: PayloadAction<TableRow[]>) => {
					state.loading = false;
					state.rows = action.payload;
				}
			)
			.addCase(fetchGoogleSheet.rejected, (state, action) => {
				state.loading = false;
				state.error = "Failed to fetch Google Sheet";
			});
	},
});

export default tableSlice.reducer;
