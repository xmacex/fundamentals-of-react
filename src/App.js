import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactConceptList from './ReactConceptList.js';

class App extends Component {
    render() {
	return (
	    <div className="App">
		<header className="App-header">
		  <img src={logo} className="App-logo" alt="logo" />
		  <h1 className="App-title">Fundamentals of React</h1>
		</header>
		
		<p className="App-motivation">Whatever those might be. From what I know, the
	    potentials are the following:</p>
		<ReactConceptList />
	    </div>
	);
    }
}

export default App;
