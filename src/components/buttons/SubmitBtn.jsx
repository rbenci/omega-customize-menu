/** @format */

import React from 'react';

export default function SubmitBtn({ list, setShowPopup, createHirarchy }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(list);
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
