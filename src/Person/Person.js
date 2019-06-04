import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
	const name = props.name;
	const age = props.age;
	const children = props.children;

	const style = {
		'@media (min-width: 500px)': {
			width: '450px',

		}
	};

	return (
		<div className="Person" style={style}>
			<p onClick={props.click}>I'm {name} and I am <b>{age}</b> years old!</p>
			<p>{children}</p>
			<input type="text" onChange={props.changed} value={name}/>
		</div>
	);
};

export default Radium(person);