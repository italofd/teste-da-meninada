import React, { useState } from "react";

interface StateTest {
	name: string;
	smokes: boolean;
	age: number;
}

const StateTest = () => {
	const [state, setState] = useState<StateTest[]>([]);

	return (
		<>
			<div>
				{state.map((value) => (
					<>
						<p>{value.name}</p>
						<p>{value.age}</p>
						<p>{value.smokes}</p>
					</>
				))}
			</div>
		</>
	);
};

export default StateTest;
