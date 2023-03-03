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

export function deleteNestedItems(obj, rootKey) {
	let newObj = obj;
	if (newObj.hasOwnProperty(rootKey)) {
		const nestedKeys = newObj[rootKey];
		delete newObj[rootKey];
		if (nestedKeys.length === 0) return newObj;

		// Remove references to the key being deleted
		for (let key in newObj) {
			if (newObj[key].includes(rootKey)) {
				newObj[key] = newObj[key].filter((k) => k !== rootKey);
			}
		}

		// Recursively delete all references to the keys under the key being referenced
		nestedKeys.forEach((key) => deleteNestedItems(newObj, key));
	}
	return newObj;
}

export const Navbar = ({mainPages, setMainPages}) => {
	
	const ctx = useContext(PageContext);

	const deleteMainPage = (pageName) => {
		const updatedPages = mainPages.filter((page) => page !== pageName);
		setMainPages(updatedPages);

		const newStruct = deleteNestedItems(ctx.pageStructure, pageName);
		console.log(newStruct);
		ctx.setPageStructure(newStruct);
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

					let newPageStructure = ctx.pageStructure;

					newPageStructure[fullName] = [];

					ctx.setPageStructure(newPageStructure);
				}}
			/>
		</div>
	);
};
