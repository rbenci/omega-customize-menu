/** @format */

import React from 'react';
import SubmitBtn from './buttons/SubmitBtn';
import Logo from '../assets/images/logo.png';

export default function Header({ list, setShowPopup, createHirarchy }) {
	return (
		<div className="headerContainer">
			<img src={Logo} width={'300px'} height="auto" alt="Omega company logo" />
			<div className="headerMain">
				<h1>Customize your menu</h1>
				<ul>
					<li>Use the "New Page" button to create a new page</li>
					<li>
						Use the "New Sublevel" button to create a sublevel for a the
						navigation
					</li>
					<li>Drag and drop to arrange the heirarchy of your navigation</li>
					<li>
						The page heirarchy below is an example of a popularly used
						navigation structure
					</li>
				</ul>

				<SubmitBtn
					list={list}
					setShowPopup={setShowPopup}
					createHirarchy={createHirarchy}
				/>
			</div>
			<hr />
		</div>
	);
}
