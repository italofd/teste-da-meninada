import React, { useState } from "react";

const ClickWithState = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<button onClick={() => setCount((prev) => prev + 1)}>
					Hi, click me to add one to the counter :devil:
				</button>
				<button onClick={() => setCount((prev) => prev - 1)}>
					Hi, click me to subtract one to the counter :devil:
				</button>
			</div>
			<p>Counting: {count}</p>
		</>
	);
};

export default ClickWithState;
