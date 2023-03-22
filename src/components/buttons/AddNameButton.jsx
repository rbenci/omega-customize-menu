/** @format */

import React from 'react';
import { toast } from 'react-toastify';

export default function AddNameButton({ setList, list }) {
	const [itemName, setItemName] = React.useState('');
	const [addingItem, setAddingItem] = React.useState(false);

	const inputRef = React.useRef();

	React.useEffect(() => {
		if (addingItem) {
			inputRef.current.focus();
		}
	}, [addingItem]);

	const handleClick = (e) => {
		e.preventDefault();
		setAddingItem((prev) => !prev);
	};

	const handleCancel = (e) => {
		e.preventDefault();
		setAddingItem((prev) => !prev);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (itemName.trim()) {
			setAddingItem((prev) => !prev);
			setList([...list, { id: Date.now(), name: itemName }]);
			setItemName('');
		} else {
			toast.error('Please enter a name');
		}
	};

	return (
		<div>
			{addingItem ? (
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						placeholder="Add something..."
						ref={inputRef}
						value={itemName}
						onChange={(e) => setItemName(e.target.value)}
						required
					/>
					<button
						type="button"
						className="btn btn-outline-dark btn-md"
						onClick={handleSubmit}
					>
						Add
					</button>
					<button
						type="button"
						className="btn btn-outline-dark btn-md"
						onClick={handleCancel}
					>
						Cancel
					</button>
				</div>
			) : (
				<button onClick={handleClick}>New Page</button>
			)}
		</div>
	);
}
