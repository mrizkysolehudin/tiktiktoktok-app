import NoResult from "@/components/NoResult";
import VideoCard from "@/components/VideoCard";
import useAuthStore from "@/store/authStore";
import { BASE_URL } from "@/utils";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GoVerified } from "react-icons/go";

const SearchPage = ({ searchVideosResult }) => {
	const [isAccounts, setIsAccounts] = useState(false);

	const { allUsers, fetchAllUsers } = useAuthStore();
	const router = useRouter();
	const { searchTerm } = router.query;

	useEffect(() => {
		fetchAllUsers();
	}, []);

	const allAccounts = allUsers.filter((user) =>
		user.userName.toLowerCase().includes(searchTerm.toLowerCase())
	);

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
					{allAccounts?.length ? (
						allAccounts?.map((account) => (
							<div className="flex gap-x-3 border-b-2 border-gray-300 pb-2">
								<div className="relative h-10 w-10 sm:h-12 sm:w-12">
									<Image
										src={account?.image}
										fill
										className="rounded-full"
									/>
								</div>

								<div>
									<p className="flex items-center gap-x-2 font-bold sm:text-xl">
										{account?.userName}{" "}
										<GoVerified className="text-blue-500" />
									</p>
									<p className=" text-sm font-medium text-gray-400">
										{account?.userName}
									</p>
								</div>
							</div>
						))
					) : (
						<NoResult text="No Accounts" />
					)}
				</section>
			) : searchVideosResult?.length ? (
				<article>
					{searchVideosResult?.map((video, index) => (
						<div className="mb-10">
							<VideoCard key={index} videoPosted={video} />
						</div>
					))}
				</article>
			) : (
				<NoResult text="No Videos" />
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
