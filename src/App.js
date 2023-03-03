/** @format */

import './styles/App.css';
import { deleteNestedItems, Navbar } from './components/Navbar';
import { createContext, useState } from 'react';
import Popup from 'reactjs-popup';
export const PageContext = createContext();

function App() {
	const [pageStructure, setPageStructure] = useState({});
	const [showPopup, setShowPopup] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [mainPages, setMainPages] = useState([]);

	function createHierarchy(obj, rootKeys) {
		let hierarchy = '';
		rootKeys.forEach((rootKey) => {
			hierarchy += `<ul class="level-1" style="display:inline-block">${createNode(
				obj,
				rootKey,
				1
			)}</ul>`;
		});
		return hierarchy;
	}

	function createNode(obj, key, level) {
		let node = '';
		const indent = 30 * level;
		node += `<li class="level-item" style="margin-left:${indent}px">${
			key.split('-')[0]
		}`;
		if (obj[key]) {
			node += '<ul>';
			obj[key].forEach((subKey) => {
				node += createNode(obj, subKey, level + 1);
			});
			node += '</ul>';
		}
		node += '</li>';
		return node;
	}

	const handleCancelPopup = () => {
		setShowPopup(false);
	};

	const handleSubmit = () => {
		setShowPopup(false);
		setSubmitted(true);
		deleteNestedItems(mainPages);
		setMainPages([]);
		//add functionality to send structure in an email
	};

	const handleSubmitIntention = (e) => {
		e.preventDefault();
		console.log(pageStructure);
		setShowPopup(true);
	};

	return (
		<PageContext.Provider
			value={{
				pageStructure: pageStructure,
				setPageStructure: setPageStructure,
			}}
		>
			<div className={'app'}>
				<header className="header">
					<h1>Create a menu</h1>
					<h3>
						Use the add icon to begin adding pages, you can add subpages to any
						page you create
					</h3>
					<button className={'submitButton'} onClick={handleSubmitIntention}>
						Submit
					</button>
				</header>

				<Navbar mainPages={mainPages} setMainPages={setMainPages} />
				<Popup open={showPopup}>
					<div className="popupContainer">
						<div className="popupContent">
							<h2 className="popupTitle">
								Are you sure you want to submit the following navigation
								structure?
							</h2>
							<div
								className="hierarchy"
								dangerouslySetInnerHTML={{
									__html: createHierarchy(pageStructure, mainPages),
								}}
							></div>
							<p className="popupMessage">
								Pressing "Submit" will notify Omega.
							</p>
							<div className="popupButtons">
								<button
									className="popupButton cancel"
									onClick={handleCancelPopup}
								>
									Cancel
								</button>
								<button className="popupButton submit" onClick={handleSubmit}>
									Submit
								</button>
							</div>
						</div>
					</div>
				</Popup>
			</div>
		</PageContext.Provider>
	);
}

export default App;
