import React, { Component } from 'react';
import './Readings.css';

class ReadingList extends Component {
    render() {
	return (
		<p>Official todo conceptual breakdown <ReadingItem title="Thinking in React" url="https://reactjs.org/docs/thinking-in-react.html" />.</p>
	);
    }
}

class ReadingItem extends Component {
    render() {
	return (
		<a className="Readings-item" href="{this.props.url}">{this.props.title}</a>
	);
    }
}

class ReadingNotes extends Component {
    render() {
	return (
		<p className="Readings-notes">Use <code>props</code> for communicating from parent to child, with the idea of <em>one-way data flow</em> aka <em>one-way binding</em>. Use <code>state</code> only for interactivity, for things which change over time. React – hopefully productively – breaks the separation of content and presentation and instead groups content and it's function into <em>components</em>.</p>
	);
    }
}

export { ReadingList, ReadingNotes};

