import VideoCard from "@/components/VideoCard";
import React from "react";
import { GoVerified } from "react-icons/go";

const Profile = () => {
	return (
		<div>
			<section className="mt-2 flex items-center gap-x-11">
				<p className="h-28 w-28 rounded-full bg-blue-500 text-center">
					L
				</p>

				<div>
					<h3 className="flex items-center gap-x-2 text-2xl font-bold">
						buebubebueube <GoVerified className="text-blue-500" />
					</h3>
					<p className="-mt-0.5 text-gray-500">buebuebuebube</p>
				</div>
			</section>

			<section className="mt-11">
				<div className="flex gap-x-10 border-b-2 border-gray-200 text-xl font-semibold">
					<button className="underline underline-offset-4">
						Videos
					</button>
					<button>Liked</button>
				</div>

				<VideoCard />
			</section>
		</div>
	);
};

export default Profile;
