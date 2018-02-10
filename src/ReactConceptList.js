import React, { Component } from 'react';
import './ReactConceptList.css';
import ReactConcept from './ReactConcept.js';

class ReactConceptList extends Component {
    render() {
	return (
    		<ul className="App-fundamental-concepts">
		<ReactConcept name="Components" />
	  	<ReactConcept name="JSX" />
		<ReactConcept name="Events" />
		<ReactConcept name="Props and state" />
		<ReactConcept name="Events" />
		<ReactConcept name="TypeScript" />
		<ReactConcept name="some advanced topics &hellip;" />
		</ul>
	);
    }
}

export default ReactConceptList;
