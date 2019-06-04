import React from 'react';

import classes from './Person.css';

const person = (props) => {
	const name = props.name;
	const age = props.age;
	const children = props.children;

	return (
		<div className={classes.Person}>
			<p onClick={props.click}>I'm {name} and I am <b>{age}</b> years old!</p>
			<p>{children}</p>
			<input type="text" onChange={props.changed} value={name}/>
		</div>
	);
};

export default person;