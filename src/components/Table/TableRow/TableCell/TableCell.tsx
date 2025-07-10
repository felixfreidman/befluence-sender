import React from "react";

interface CellComponent {
	value: string;
}

export default function TableCell({ value }: CellComponent) {
	return <div className="TablePreview__Cell">{value}</div>;
}
