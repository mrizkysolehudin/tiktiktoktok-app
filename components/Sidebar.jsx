import React from "react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import PopularTopics from "./PopularTopics";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";

const Sidebar = () => {
	return (
		<div className="mb-6 flex w-[400px] flex-col  justify-start border-0 border-gray-100 p-3 ">
			<div className="border-b-2 border-gray-200">
				<button className="mb-3 flex w-full items-center gap-x-3 px-3 py-4 text-2xl font-semibold hover:bg-black/10">
					<AiFillHome /> <span className="text-xl">For You</span>
				</button>
			</div>

			<PopularTopics />
			<SuggestedAccounts />
			<Footer />
		</div>
	);
};

export default Sidebar;
