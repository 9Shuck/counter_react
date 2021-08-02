import React, { useState, useEffect } from "react";
import SecondCounter from "./secondCounter.jsx";
import ResetButton from "./resetButton.jsx";

//include images into your bundle

//create your first component
export const Home = () => {
	const [stop, setStop] = useState(0);
	const resetButton = () => {
		setStop(!stop);
	};
	return (
		//Posicionar cada card
		<div className="container d-flex  justify-content-center">
			<div className="row">
				<div className="colB col">
					<i className="far fa-clock fa-2x mt-1"></i>
				</div>
				<div className="colButton col">
					<button className="button" onClick={resetButton}>
						Reset
					</button>
				</div>
				<div className="colB col">
					<SecondCounter time={10000} stop={stop} />
				</div>
				<div className="colB col">
					<SecondCounter time={1000} stop={stop} />
				</div>
				<div className="colB col">
					<SecondCounter time={100} stop={stop} />
				</div>
				<div className="colB col">
					<SecondCounter time={10} stop={stop} />
				</div>
				<div className="colB col">
					<SecondCounter time={1} stop={stop} />
				</div>
			</div>
		</div>
	);
};
