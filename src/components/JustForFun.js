import React from 'react';
import { Link } from 'react-router';

const userArr = () => {
	let r = [];
	for(let i = 0; i < 10; i ++) {
		r.push({ value : Math.floor((Math.random() * 100) + 1) , key : '_' + Math.random().toString(36).substring(7) })
	}
	return r;
}
let count = 1;
const JustForFun = (props) => (
	<div className="well">
		<div className="alert alert-info">
			Just for fun {'page/component'} to play.
		</div>
		<div className="well">
			<Link to='/JustForFun/JFFInnerPage1' className="btn btn-xs btn-info">JFFInnerPage1</Link>&nbsp;
			<Link to='/JustForFun/JFFInnerPage2' className="leftBtn btn btn-xs btn-info">JFFInnerPage2</Link>
		</div>
		{props.children}
	</div>
)

const JFFInnerPage1 = () => {
	const users = userArr();
	console.log(users);
	let li = users.map(v => <li key={v.key+v.value}>{JSON.stringify(v)}</li>);
	console.log("call - " +count); count++;
	return (<div className="alert alert-info"><ul>{li}</ul></div>);
}
const JFFInnerPage2 = () => <div className="alert alert-info"><h3>Nested route/ Child route content goes here</h3></div>;

export { JustForFun, JFFInnerPage1, JFFInnerPage2 };
