import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './GameBoard';

function App() {
	return (
		<div className="App">
			<h1>Lights Out</h1>
			<GameBoard />
		</div>
	);
}

export default App;
