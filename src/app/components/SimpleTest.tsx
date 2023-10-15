import React from "react";

const SimpleTest = (state: {
	description: string;
	title: string;
	link: string;
	options: string[];
}) => (
	<>
		<div>
			<h1>{state.title}</h1>
		</div>
		<div>
			<p>{state.description}</p>
			<a href="state.link">{state.link}</a>
		</div>
		{state.options.map((option) => (
			<p>{option}</p>
		))}
	</>
);

export default SimpleTest;
