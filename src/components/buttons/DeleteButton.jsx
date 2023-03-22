/** @format */

import React from 'react';
import { handleDelete } from '../../utils/DeleteFunc';

export default function DeleteButton({ list, item, setList }) {
	const handleClick = (e) => {
		e.preventDefault();
		handleDelete(list, item, setList);
	};

	return (
		<div
			onClick={handleClick}
			className="delete-btn"
			size={20}
			style={{ cursor: 'pointer' }}
		>
			X
		</div>
	);
}
