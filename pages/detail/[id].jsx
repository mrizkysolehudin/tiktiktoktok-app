import CommentSection from "@/components/CommentSection";
import LoveButton from "@/components/LoveButton";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";

const Detail = () => {
	const [played, setPlayed] = useState(false);
	const [muted, setMuted] = useState(false);

	return (
		<div className="absolute left-0 top-0 z-30 flex w-full bg-white">
			<section className="flex-2  flex w-9/12 items-center justify-center bg-orange-800 ">
				<div className="relative mx-2 -mt-36">
					<video src="https://cdn.sanity.io/files/k3lpsyu4/production/bddb55e86ea0fcc3037a084ed813f43c63656974.mp4"></video>

					<div className="absolute bottom-8 mx-20 flex  w-9/12 justify-between">
						<button onClick={() => setPlayed(!played)}>
							{played ? (
								<BsFillPauseFill className="h-7 w-7" />
							) : (
								<BsFillPlayFill className="h-7 w-7" />
							)}
						</button>
						<button onClick={() => setMuted(!muted)}>
							{muted ? (
								<HiVolumeOff className="h-6 w-6" />
							) : (
								<HiVolumeUp className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</section>

			<section className="relative w-[700px]">
				<article className="px-10  pt-14">
					<div className="flex gap-x-4">
						<Link
							href="/profile/:id"
							className="h-14 w-14 rounded-full bg-blue-500">
							L
						</Link>
						<div>
							<p className="flex items-center gap-x-2 font-bold">
								bueubeuebbue{" "}
								<GoVerified className="text-blue-500" />
							</p>
							<p>bueubuebu bue </p>
						</div>
					</div>

					<p className="ml-1 mt-4 text-gray-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Vel, iusto.
					</p>

					<div className="mt-8 text-center">
						<LoveButton />
					</div>
				</article>

				<CommentSection />
			</section>
		</div>
	);
};

export default Detail;
