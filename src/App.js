/** @format */

import './styles/App.css';
import {Navbar} from './components/Navbar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<div className="App">
				<h1>Omega Customize Menu</h1>
				<Navbar />
			</div>
		</DndProvider>
	);
}

export default App;
