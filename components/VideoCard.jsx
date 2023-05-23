import React, { useState } from "react";
import { GoVerified } from "react-icons/go";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import Link from "next/link";

const VideoCard = () => {
	const [muted, setMuted] = useState(true);
	const [played, setPlayed] = useState(false);

	return (
		<div className="divide-y-[1.5px] divide-slate-300 pb-20">
			<article className="w-[93%] py-10">
				<div className="flex items-start gap-x-4">
					<p className="flex h-16 w-16 items-center  justify-center rounded-full bg-blue-600">
						L
					</p>

					<div className="flex items-center">
						<h5 className=" font-bold">Buebeubeu </h5>
						<span className="ml-2 text-blue-500">
							<GoVerified />
						</span>
						<p className="ml-3 text-sm font-medium text-gray-600">
							buebeueu
						</p>
					</div>
				</div>

				<div className="-mt-7 ml-20 text-sm">
					<p className="">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Voluptate velit amet facere molestias natus eaque
						consequatur iusto ullam unde perferendis ad, officiis
						non repudiandae odit tempore quas odio quo
						reprehenderit!
					</p>

					<div className="relative mt-7  rounded-2xl bg-gray-100 py-24">
						<Link href="/detail/:id">
							<video src="https://cdn.sanity.io/files/k3lpsyu4/production/bddb55e86ea0fcc3037a084ed813f43c63656974.mp4"></video>
						</Link>

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
				</div>
			</article>
		</div>
	);
};

export default VideoCard;
