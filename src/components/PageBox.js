import '../styles/PageBox.css';
import React, { useState } from 'react';
import { AddPageButton } from './AddPageButton';
import { levelColors } from '../styles/levelColors';

export const PageBox = ({ name, id, level, handleDelete }) => {
	const [subPages, setSubPages] = useState([]);
	const [showDeleteIcon, setShowDeleteIcon] = useState(false);

	const handleDeleteSubpage = (name) => {
		const updatedPages = subPages.filter((page) => page !== name);
		setSubPages(updatedPages);
	};

	return (
		<div
			id={id}
			style={{
				margin: level === 0 ? '10px' : 0,
				width: 'auto',
				minWidth: level > 0 ? '90%' : '100px',
				alignSelf: level > 0 ? 'flex-end' : 'flex-start',
				backgroundColor: levelColors[level] ?? 'white',
				boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
				borderRadius: '8px',
				marginBottom: '10px',
				marginLeft: level > 0 ? '20px' : '10px',
				color: level >= 4 ? 'black' : 'white',
				position: 'relative',
			}}
			onMouseEnter={() => setShowDeleteIcon(true)}
			onMouseLeave={() => setShowDeleteIcon(false)}
			className="pageBoxContainer"
		>
			<div
				style={{
					padding: '10px',
					fontSize: `${3 - level / 2}rem`,
					fontWeight: 'bold',
					marginBottom: '10px',
					alignSelf: level === 0 ? 'center' : 'flex-start',
					textTransform: 'uppercase',
					letterSpacing: '1px',

					whiteSpace: 'nowrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis', // add this to shorten long names with an ellipsis,
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-around',
				}}
			>
				{name}
				{showDeleteIcon && (
					<div
						style={{
							position: 'absolute',
							top: '-20px',
							right: '-20px',
							cursor: 'pointer',
							backgroundColor: 'red',
							width: '40px',
							height: '40px',
							color: 'white',
							fontSize: '20px',
							borderRadius: '20px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						onClick={() => handleDelete(name)}
					>
						X
					</div>
				)}
				<AddPageButton
					onAddPage={(newSubPage) => {
						setSubPages([...subPages, newSubPage]);
					}}
				/>
			</div>
			{subPages.map((page, index) => {
				return (
					<PageBox
						level={level + 1}
						name={page}
						id={page.id}
						key={`${page}-${index}`}
						handleDelete={handleDeleteSubpage}
					/>
				);
			})}
		</div>
	);
};
