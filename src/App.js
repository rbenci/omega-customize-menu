/** @format */

import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import Directory from './components/Directory';
import AddNameButton from './components/buttons/AddNameButton';
import AddPageDirectory from './components/buttons/AddPageDirectory';
import Item from './components/Item';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PopupWindow from './components/PopupWindow';
import { createHirarchy } from './utils/CreateHtml';
import DeleteButton from './components/buttons/DeleteButton';
import { v4 as uuid } from 'uuid';

const sortableOptions = {
	animation: 200,
	fallbackOnBody: true,
	swapThreshold: 0.65,
	ghostClass: 'ghost',
	group: 'shared',
};

function App() {
	const [list, setList] = useState([
		{ id: uuid(), name: 'New Employees' },
		{ id: uuid(), name: 'Eligibility' },
		{
			id: uuid(),
			name: 'canvas',
			type: 'layout',
			list: [
				{ id: uuid(), name: 'Eligibility' },
				{ id: uuid(), name: 'Open Enrollment' },
				{ id: uuid(), name: 'Newly Benefit Eligible' },
				{ id: uuid(), name: 'Qualifying Event' },
			],
		},
		{ id: uuid(), name: 'Health Plans' },
		{
			id: uuid(),
			name: 'canvas',
			type: 'layout',
			list: [
				{ id: uuid(), name: 'Medical' },
				{ id: uuid(), name: 'Health Savings Account (HSA)' },
				{ id: uuid(), name: 'Prescriptions' },
				{ id: uuid(), name: 'Dental' },
				{ id: uuid(), name: 'Vision' },
				{ id: uuid(), name: 'Telemedicine' },
				{ id: uuid(), name: 'Cost of Coverage' },
			],
		},
		{ id: uuid(), name: 'Valuable Benefits' },
		{
			id: uuid(),
			name: 'canvas',
			type: 'layout',
			list: [
				{ id: uuid(), name: 'Employee Assistance Program (EAP)' },
				{ id: uuid(), name: 'Wellness' },
				{ id: uuid(), name: 'Flexible Spending Account (FSA)' },
				{ id: uuid(), name: '401(K) Retirement Plan' },
				{ id: uuid(), name: 'Life and AD&D' },
				{
					id: uuid(),
					type: 'layout',
					list: [
						{ id: uuid(), name: 'Basic Life Insurace' },
						{ id: uuid(), name: 'Voluntary Life Insurace' },
					],
				},
				{ id: uuid(), name: 'Disability Insurance' },
			],
		},
		{ id: uuid(), name: 'Voluntary Benefits' },
		{
			id: uuid(),
			name: 'canvas',
			type: 'layout',
			list: [
				{ id: uuid(), name: 'Accident' },
				{ id: uuid(), name: 'Critical Illness' },
				{ id: uuid(), name: 'Hospital Indemnity' },
			],
		},
		{ id: uuid(), name: 'Employee Perks' },
		{
			id: uuid(),
			name: 'canvas',
			type: 'layout',
			list: [
				{ id: uuid(), name: 'Paid Time Off (PTO)' },
				{ id: uuid(), name: 'Company Paid Holidays' },
				{ id: uuid(), name: 'Tuition Reimbursement' },
			],
		},
		{ id: uuid(), name: 'Contacts & Resources' },
		{
			id: uuid(),
			name: 'canvas',
			type: 'layout',
			list: [
				{ id: uuid(), name: 'Benefit Resource Center' },
				{ id: uuid(), name: 'Contacts & Resources' },
				{ id: uuid(), name: "What's New This Year?" },
				{ id: uuid(), name: 'Video Library' },
				{ id: uuid(), name: 'Glossary of Terms' },
			],
		},
	]);

	const [showPopup, setShowPopup] = useState(false);
	const [html, setHtml] = useState('');

	const handleCreateHirarchy = (list) => {
		console.log(list);
		const html = createHirarchy(list);
		setHtml(html);
	};

	return (
		<div className="appContainer">
			<Header
				list={list}
				setShowPopup={setShowPopup}
				createHirarchy={handleCreateHirarchy}
			/>
			<div className="listContainer">
				<ReactSortable
					list={list}
					setList={setList}
					style={{
						padding: 10,
						background: '#D3D3D3',
						minHeight: '300px',
					}}
					className="layout"
					{...sortableOptions}
				>
					{list.map((item, index) => {
						if (item.type === 'layout') {
							return (
								<div key={item.id} className="basket">
									<Directory
										{...item}
										indexs={[index]}
										setList={setList}
										bigList={list}
										sortableOptions={sortableOptions}
									/>
									<DeleteButton list={list} setList={setList} item={item} />
								</div>
							);
						}
						return (
							<Item
								key={item.id}
								item={item}
								setList={setList}
								list={list}
								bigList={list}
							/>
						);
					})}
				</ReactSortable>
			</div>

			<div className="addButtonsContainer">
				<AddNameButton setList={setList} list={list} />
				<AddPageDirectory setList={setList} list={list} />
			</div>
			<PopupWindow
				showPopup={showPopup}
				setShowPopup={setShowPopup}
				html={html}
				setList={setList}
			/>
			<ToastContainer />
		</div>
	);
}

export default App;
