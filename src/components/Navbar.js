/** @format */
import '../styles/Navbar.css';
import React, { useContext, useState } from 'react';
import { AddPageButton } from './AddPageButton';
import { PageBox } from './PageBox';
import { PageContext } from '../App';
import { v4 as uuidv4 } from 'uuid';

export const uniqueId = () => {
	return uuidv4();
};

export const Navbar = () => {
	const [mainPages, setMainPages] = useState([]);
	const ctx = useContext(PageContext);

	const deleteMainPage = (pageName) => {
		const updatedPages = mainPages.filter((page) => page !== pageName);
		setMainPages(updatedPages);

		const newPageStructure = { ...ctx.pageStructure };
		delete newPageStructure[pageName];

		ctx.setPageStructure(newPageStructure);
	};

	return (
		<div className={'navbarContainer'}>
			{mainPages.length > 0 && (
				<div className={'horizontalPageList'}>
					{mainPages.map((page) => {
						return (
							<PageBox
								key={page}
								name={page}
								level={0}
								handleDelete={deleteMainPage}
							/>
						);
					})}
				</div>
			)}
			<AddPageButton
				onAddPage={(pageName) => {
					const fullName = pageName + '-' + uuidv4();
					setMainPages([...mainPages, fullName]);

					const newPageStructure = { ...ctx.pageStructure };
					newPageStructure[fullName] = [];
					ctx.setPageStructure(newPageStructure);
				}}
			/>
		</div>
	);
};
