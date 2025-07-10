import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchGoogleSheet } from "../../features/Table/TableSlice";
import TableRow from "../../components/Table/TableRow/TableRow";

export default function TablePreview() {
	const dispatch = useDispatch<AppDispatch>();
	const { rows, loading, error } = useSelector(
		(state: RootState) => state.table
	);
	useEffect(() => {
		dispatch(fetchGoogleSheet());
	}, [dispatch]);
	return (
		<div className="TablePreview__Container">
			<h1>Table Preview</h1>
			{!loading ? (
				<div className="TablePreview__Table">
					{rows.map((row, index) => (
						<TableRow
							key={index}
							name={row.name}
							mail={row.email}
							status={row.status}
							amount={row.amount}
						/>
					))}
				</div>
			) : (
				<p>Loading table...</p>
			)}
			{error && (
				<p
					className="classes.TablePreview__Error"
					style={{ color: "red" }}
				>
					{error}
				</p>
			)}
		</div>
	);
}
