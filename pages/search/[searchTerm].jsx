import VideoCard from "@/components/VideoCard";
import React, { useState } from "react";
import { GoVerified } from "react-icons/go";

const SearchPage = () => {
	const [tapButton, setTapButton] = useState("accounts");

	const handleTap = (option) => {
		if (option === "accounts") {
			setTapButton("accounts");
		} else {
			setTapButton("videos");
		}
	};

	return (
		<div>
			<section className="mt-4 flex gap-x-10 border-b-2 border-gray-200 text-xl font-semibold">
				<button
					onClick={() => handleTap("accounts")}
					className={`${
						tapButton === "accounts"
							? "underline underline-offset-4"
							: "text-gray-400"
					} `}>
					Accounts
				</button>
				<button
					onClick={() => handleTap("videos")}
					className={`${
						tapButton === "videos"
							? "underline  underline-offset-4"
							: "text-gray-400"
					}`}>
					Videos
				</button>
			</section>

			{tapButton === "accounts" ? (
				<section className="mt-7">
					<div className="flex gap-x-3 border-b-2 border-gray-300 pb-2">
						<p className="h-12 w-12 rounded-full bg-blue-500">L</p>

						<div>
							<p className="flex items-center gap-x-2 text-xl font-bold">
								bubuebueubeube{" "}
								<GoVerified className="text-blue-500" />
							</p>
							<p className=" text-sm font-medium text-gray-400">
								buebuebue
							</p>
						</div>
					</div>
				</section>
			) : (
				<VideoCard />
			)}
		</div>
	);
};

export default SearchPage;
