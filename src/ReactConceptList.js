import React, { Component } from 'react';
import './ReactConceptList.css';
import Search from './Search.js';
import ReactConcept from './ReactConcept.js';

class ReactConceptList extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    filterText: '',
	}
	this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
	this.setState({
	    filterText: filterText.toLowerCase()
	});
    }

    render() {
	var conceptlist = [];
	conceptlist = this.props.concepts.filter(
	    c => c.toLowerCase().match(this.state.filterText)
	).map(
	    c => <ReactConcept name={c} key={c} />
	);
	return (
		<div className="ReactConceptList">
		<Search
	    filterText={this.state.filterText}
	    onFilterTextChange={this.handleFilterTextChange} />
    		<ul className="ReactConceptList-fundamental-concepts">
		{conceptlist}
	    </ul>
		</div>
	);
    }
}

export default ReactConceptList;
