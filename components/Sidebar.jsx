import React, { useState } from "react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import PopularTopics from "./PopularTopics";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";

const Sidebar = () => {
	const [hideMenu, setHideMenu] = useState(false);

	return (
		<div className="mb-6 flex w-[70px] flex-col justify-start border-0 border-gray-100 p-3 xl:w-[400px] ">
			<div className="border-b-2 border-gray-200">
				<button className="mb-3 flex w-full items-center gap-x-3 px-3 py-4 text-2xl font-semibold hover:bg-black/10">
					<AiFillHome />{" "}
					<span className="hidden text-xl xl:block">For You</span>
				</button>
			</div>

			<div className="ml-3 mt-4 text-2xl xl:hidden">
				{hideMenu ? (
					<button onClick={() => setHideMenu(false)}>
						<AiOutlineMenu />
					</button>
				) : (
					<button
						onClick={() => setHideMenu(true)}
						className="text-red-500">
						<ImCancelCircle />
					</button>
				)}
			</div>

			{!hideMenu && (
				<>
					<PopularTopics />
					<SuggestedAccounts />
					<Footer />
				</>
			)}
		</div>
	);
};

export default Sidebar;
