/** @format */
import '../styles/Navbar.css';
import React, { useState } from 'react';
import { PageBox } from './PageBox';

import { AddPageButton } from './AddPageButton';

export const Navbar = () => {
	const [pages, setPages] = useState(['Page 1', 'Page 2', 'Page 3']);

	return (
		<div className="navbarContainer">
			<div className="horizontalPageList">
				{pages.map((pageName, index) => {
					return <PageBox key={`${pageName}-${index}`} name={pageName} />;
				})}
			</div>

			<AddPageButton
				onAddPage={(newPage) => {
					setPages([...pages, newPage]);
				}}
			/>
		</div>
	);
};
