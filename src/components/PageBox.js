import React, { useState } from 'react';
import { AddPageButton } from './AddPageButton';
import { levelColors } from '../styles/levelColors';
import '../styles/PageBox.css'

export const PageBox = ({ name, id, level, handleDelete }) => {
	const [subPages, setSubPages] = useState([]);
	const [showDeleteIcon, setShowDeleteIcon] = useState(false);

	const handleDeleteSubpage = (name) => {
		const updatedPages = subPages.filter((page) => page !== name);
		setSubPages(updatedPages);
	};

	const pageBoxStyle = {
		margin: level === 0 ? '10px' : 0,
		width: 'auto',
		minWidth: level > 0 ? '90%' : '100px',
		alignSelf: level > 0 ? 'flex-end' : 'flex-start',
		backgroundColor: levelColors[level] ?? 'white',
		boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
		borderRadius: '8px',
		marginBottom: '10px',
		marginLeft: level > 0 ? '20px' : '10px',
		color: level >= 4 ? 'black' : 'white',
		position: 'relative',
	};

	const pageNameStyle = {
		padding: '10px',
		fontSize: `${3 - level / 3}rem`,
		fontWeight: 'bold',
		marginBottom: '10px',
		alignSelf: level === 0 ? 'center' : 'flex-start',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	};

	return (
		<div
			id={id}
			style={pageBoxStyle}
			onMouseEnter={() => setShowDeleteIcon(true)}
			onMouseLeave={() => setShowDeleteIcon(false)}
		>
			<div style={pageNameStyle}>
				<span>{name}</span>
				{showDeleteIcon && (
					<div className={'deleteIcon'} onClick={() => handleDelete(name)}>
						X
					</div>
				)}
				<AddPageButton
					onAddPage={(newSubPage) => setSubPages([...subPages, newSubPage])}
				/>
			</div>
			{subPages.map((page, index) => (
				<PageBox
					level={level + 1}
					name={page}
					id={`${id}-${index}`}
					key={`${id}-${index}`}
					handleDelete={handleDeleteSubpage}
				/>
			))}
		</div>
	);
};
