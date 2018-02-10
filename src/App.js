import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ReadingList, ReadingNotes } from './Readings.js';
import ReactConceptList from './ReactConceptList.js';

const CONCEPTS = ['Components',
		  'JSX',
		  'Props and state',
		  'Events',
		  'TypeScript',
		  'some advanced topics...']

class App extends Component {
    render() {
	return (
	    <div className="App">
		<header className="App-header">
		  <img src={logo} className="App-logo" alt="logo" />
		  <h1 className="App-title">Fundamentals of React</h1>
		</header>

		<ReadingList />
		<ReadingNotes />
		
		<p className="App-motivation">From what I know, the
	    candidate fundamentals are following:</p>
		<ReactConceptList concepts={CONCEPTS}/>
	    </div>
	);
    }
}

export default App;
