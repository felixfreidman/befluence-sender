import React from "react";
import TableCell from "./TableCell/TableCell";

interface TableRowComponent {
	name: string;
	mail: string;
	status: string;
	amount: string;
}

export default function TableRow({
	name,
	mail,
	status,
	amount,
}: TableRowComponent) {
	return (
		<div className="TablePreview__Row">
			<TableCell value={name} />
			<TableCell value={mail} />
			<TableCell value={status} />
			<TableCell value={amount} />
		</div>
	);
}
