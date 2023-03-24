/** @format */

import React from 'react';
import { toast } from 'react-toastify';

export default function SubmitBtn({ list, setShowPopup, createHirarchy }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(list);

		if(list.length === 0) {
			toast.error('Please add a page to your menu first');
			return;
		}

		setShowPopup((prev) => !prev);
		createHirarchy(list);
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-dark important"
				onClick={handleSubmit}

			>
				Submit
			</button>
		</>
	);
}
