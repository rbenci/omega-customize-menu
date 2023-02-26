import '../styles/PageBox.css';
import React, { useState } from 'react';
import { AddPageButton } from './AddPageButton';
import { levelColors } from '../styles/levelColors';

export const PageBox = ({ name, id, level }) => {
	const [subPages, setSubPages] = useState([]);

	return (
		<div
			id={id}
			style={{
				margin: level === 0 ? '10px' : 0,
				padding: '1rem',
				width: '90%',
				justifySelf: level > 0 ? 'flex-end' : 'center',
				backgroundColor: levelColors[level] ?? 'white',
				boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
				borderRadius: '8px',
				marginBottom: '10px',
				marginLeft: level > 0 ? '20px' : '10px',
				color: 'white',
			}}
			className="pageBoxContainer"
		>
			<div
				style={{
					fontSize: `${3 - level / 2}rem`,
					fontWeight: 'bold',
					marginBottom: '10px',
					textTransform: 'uppercase',
					letterSpacing: '1px',
					color: level > 0 ? 'white' : 'black',
                    whiteSpace:'nowrap'
				}}
			>
				{name}
			</div>
			{subPages.map((page, index) => {
				return (
					<PageBox
						level={level + 1}
						name={page}
						id={page.id}
						key={`${page}-${index}`}
					/>
				);
			})}
			<AddPageButton
				onAddPage={(newSubPage) => {
					setSubPages([...subPages, newSubPage]);
				}}
			/>
		</div>
	);
};
