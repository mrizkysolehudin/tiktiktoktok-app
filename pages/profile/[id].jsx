import NoResult from "@/components/NoResult";
import VideoCard from "@/components/VideoCard";
import { BASE_URL } from "@/utils";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { GoVerified } from "react-icons/go";

const Profile = ({ data }) => {
	const [showUserVideos, setShowUserVideos] = useState(false);

	return (
		<div>
			<section className="mt-2 flex items-center gap-x-11">
				<div className="relative h-28 w-28">
					<Image
						src={data?.dataAccount?.image}
						fill
						className="rounded-full"
					/>
				</div>

				<div>
					<h3 className="flex items-center gap-x-2 text-2xl font-bold">
						{data?.dataAccount?.userName}{" "}
						<GoVerified className="text-blue-500" />
					</h3>
					<p className="-mt-0.5 text-gray-500">
						{data?.dataAccount?.userName}
					</p>
				</div>
			</section>

			<section className="mt-11">
				<div className="flex gap-x-10 border-b-2 border-gray-200 text-xl font-semibold">
					<button
						onClick={() => setShowUserVideos(true)}
						className={`${
							showUserVideos && "underline underline-offset-4"
						}`}>
						Videos
					</button>
					<button
						onClick={() => setShowUserVideos(false)}
						className={`${
							!showUserVideos && "underline underline-offset-4"
						}`}>
						Liked
					</button>
				</div>

				{showUserVideos ? (
					data?.dataUserVideos?.map((userVideos, index) => (
						<div className="mb-28">
							<VideoCard key={index} videoPosted={userVideos} />
						</div>
					))
				) : data?.dataLikedVideos.length ? (
					data?.dataLikedVideos?.map((likedVideos, index) => (
						<div className="mb-28">
							<VideoCard key={index} videoPosted={likedVideos} />
						</div>
					))
				) : (
					<NoResult text="No Videos" />
				)}
			</section>
		</div>
	);
};

export const getServerSideProps = async ({ query: { id } }) => {
	let res;
	res = await axios.get(`${BASE_URL}/api/profile/${id}`);

	return {
		props: {
			data: res.data,
		},
	};
};

export default Profile;
