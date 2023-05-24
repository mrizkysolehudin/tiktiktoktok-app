import NoResult from "@/components/NoResult";
import VideoCard from "@/components/VideoCard";
import { BASE_URL } from "@/utils";
import axios from "axios";
import React, { useState } from "react";
import { GoVerified } from "react-icons/go";

const SearchPage = ({ searchVideosResult }) => {
	const [isAccounts, setIsAccounts] = useState(false);

	return (
		<div>
			<section className="mt-4 flex gap-x-10 border-b-2 border-gray-200 text-xl font-semibold">
				<button
					onClick={() => setIsAccounts(true)}
					className={`${
						isAccounts
							? "underline underline-offset-4"
							: "text-gray-400"
					} `}>
					Accounts
				</button>
				<button
					onClick={() => setIsAccounts(false)}
					className={`${
						!isAccounts
							? "underline  underline-offset-4"
							: "text-gray-400"
					}`}>
					Videos
				</button>
			</section>

			{isAccounts ? (
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
			) : searchVideosResult?.length ? (
				<article>
					{searchVideosResult?.map((video, index) => (
						<VideoCard key={index} videoPosted={video} />
					))}
				</article>
			) : (
				<NoResult />
			)}
		</div>
	);
};

export const getServerSideProps = async ({ query: { searchTerm } }) => {
	let res;
	res = await axios.get(`${BASE_URL}/api/search/${searchTerm}`);

	return {
		props: {
			searchVideosResult: res.data,
		},
	};
};

export default SearchPage;
