import React, { useState } from "react";
import { MdFavorite } from "react-icons/md";

const LoveButton = () => {
	const [loved, setLoved] = useState(false);

	return (
		<div>
			<button onClick={() => setLoved(!loved)}>
				{loved ? (
					<div className="rounded-full  bg-gray-100 p-2 pt-2.5 text-2xl  ">
						<MdFavorite />
					</div>
				) : (
					<div className="rounded-full  bg-gray-100 p-2 pt-2.5 text-2xl text-red-500 ">
						<MdFavorite />
					</div>
				)}
			</button>

			<p className="-mt-2 font-semibold">1</p>
		</div>
	);
};

export default LoveButton;
