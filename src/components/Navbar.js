/** @format */
import '../styles/Navbar.css';
import React, { useState } from 'react';

import { AddPageButton } from './AddPageButton';
import { PageBox } from './PageBox';

export const Navbar = () => {
	const [mainPages, setMainPages] = useState(['Page 1', 'Page 2', 'Page 3']);

  const deleteMainPage = (name) => {
		const updatedPages = mainPages.filter((page) => page !== name);
		setMainPages(updatedPages);
	};

	return (
		<div className="navbarContainer">
			<div className="horizontalPageList">
				{mainPages.map((page, index) => {
					return <PageBox key={`${page}-${index}`} name={page} level={0} handleDelete={deleteMainPage} />;
				})}
			</div>
			<AddPageButton
				onAddPage={(newPage) => {
					setMainPages([...mainPages, newPage]);
				}}
			/>
		</div>
	);
};
