/** @format */

import './styles/App.css';
import { Navbar } from './components/Navbar';
import { createContext, useState } from 'react';
import Popup from 'reactjs-popup';
export const PageContext = createContext();

function App() {
	const [pageStructure, setPageStructure] = useState({});
	const [showPopup, setShowPopup] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleCancelPopup = () => {
		setShowPopup(false);
	};

	const handleSubmit = () => {
		setShowPopup(false);
		setSubmitted(true);
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

				<Navbar />
				<Popup open={showPopup}>
					<div className="popupContainer">
						<div className="popupContent">
							<h2 className="popupTitle">
								Are you sure you want to submit your navigation structure?
							</h2>
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
