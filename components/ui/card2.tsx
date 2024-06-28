import React from "react";

import "./testingAnimations.css";
interface Props {}

const CustomCard = (props: Props) => {
	return (
		<div className=" h-[100vh] flex justify-center items-center">
			<div className="profile-card ">
				<div className="info">
					<h2>John Doe</h2>
					<p>Ceo / Founder</p>
				</div>
			</div>
		</div>
	);
};
export default CustomCard;
