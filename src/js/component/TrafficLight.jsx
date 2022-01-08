import React from "react";
import { useState } from "react";

const TrafficLight = () => {
	const [hColor, setHcolor] = useState("");

	return (
		<div className="bigDiv">
			<div className="stem"></div>
			<div className="lightHousing">
				<div
					onClick={() => setHcolor("red")}
					className={`red light ${
						hColor == "red" && "selected"
					}`}></div>
				<div
					onClick={() => setHcolor("yellow")}
					className={`yellow light ${
						hColor == "yellow" && "selected"
					}`}></div>
				<div
					onClick={() => setHcolor("green")}
					className={`green light ${
						hColor == "green" && "selected"
					}`}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
