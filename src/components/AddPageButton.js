/** @format */

import React, { useEffect, useRef, useState } from 'react';
import '../styles/AddPageButton.css';

export const AddPageButton = ({ onAddPage }) => {
	const [addingItem, setAddingItem] = useState(false);
	const [pageName, setPageName] = useState('');
	const [invalidInput, setInvalidInput] = useState(true);
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current?.focus();
	}, [addingItem]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (pageName.trim() !== '') {
			setAddingItem(false);
			setInvalidInput(false);
			setPageName('');
			onAddPage(pageName);
		} else {
			setInvalidInput(true);
		}
	};

	const handleClick = () => {
		setAddingItem(true);
	};

	const handleInputChange = (event) => {
		setPageName(event.target.value);
	};

	const handleCancel = () => {
		setAddingItem(false);
		setPageName('');
	};

	return (
		<div className="addPageContainer">
			{addingItem ? (
				<form onSubmit={handleSubmit}>
					<input
						ref={inputRef}
						type="text"
						value={pageName}
						onChange={handleInputChange}
						required
						className={invalidInput ? 'invalidInput' : ''}
					/>
					<div className='buttons'>
						<button type="submit">Add Page</button>
						<button type="button" onClick={handleCancel}>
							Cancel
						</button>
					</div>
				</form>
			) : (
				<div onClick={handleClick} className="plus-icon" />
			)}
		</div>
	);
};
