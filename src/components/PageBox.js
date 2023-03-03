import React, { useContext, useState } from 'react';
import { AddPageButton } from './AddPageButton';
import { levelColors } from '../styles/levelColors';
import '../styles/PageBox.css';
import { PageContext } from '../App';
import { deleteNestedItems, uniqueId } from './Navbar';

export const PageBox = ({ name, level, handleDelete }) => {
	const [subPages, setSubPages] = useState([]);
	const [showDeleteIcon, setShowDeleteIcon] = useState(false);
	const ctx = useContext(PageContext);

	const handleDeleteSubpage = (pageName) => {
		const updatedPages = subPages.filter((page) => page !== pageName);
		setSubPages(updatedPages);

		const newStruct = deleteNestedItems(ctx.pageStructure, pageName);

		ctx.setPageStructure(newStruct);
	};

	const pageBoxStyle = {
		margin: level === 0 ? '10px' : 0,
		minWidth: level > 0 ? '90%' : '',
		alignSelf: level > 0 ? 'flex-end' : 'flex-start',
		backgroundColor: levelColors[level] ?? 'white',
		boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
		borderRadius: '8px',
		marginBottom: '10px',
		marginLeft: level > 0 ? '10px' : '5px',
		color: level >= 4 ? 'black' : 'white',
		position: 'relative',
		flex: 1,
		flexShrink: 2,
		flexWrap: 'wrap',
	};

	const pageNameStyle = {
		padding: '10px',
		fontSize: Math.max(20 / ((level + 1) / 2), 12),
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
			key={name}
			style={pageBoxStyle}
			onMouseEnter={() => setShowDeleteIcon(true)}
			onMouseLeave={() => setShowDeleteIcon(false)}
		>
			<div style={pageNameStyle}>
				<span>{name.split('-')[0]}</span>
				{showDeleteIcon && (
					<div className={'deleteIcon'} onClick={() => handleDelete(name)}>
						X
					</div>
				)}
			</div>
			{subPages.map((page) => (
				<PageBox
					level={level + 1}
					name={page}
					handleDelete={handleDeleteSubpage}
					key={page}
				/>
			))}
			<AddPageButton
				onAddPage={(pageName) => {
					const fullName = pageName + '-' + uniqueId();
					setSubPages([...subPages, fullName]);
					const newPageStructure = { ...ctx.pageStructure };
					console.log(newPageStructure);
					if (newPageStructure[name].length > 0) {
						newPageStructure[name] = [...newPageStructure[name], fullName];
					} else {
						newPageStructure[name] = [fullName];
					}

					newPageStructure[fullName] = [];
					ctx.setPageStructure(newPageStructure);
				}}
			/>
		</div>
	);
};
