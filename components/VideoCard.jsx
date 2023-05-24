import React, { useEffect, useRef, useState } from "react";
import { GoVerified } from "react-icons/go";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const VideoCard = ({ videoPosted }) => {
	const videoRef = useRef(null);

	const [muted, setMuted] = useState(true);
	const [playing, setPlaying] = useState(false);

	const handlePressVideo = () => {
		if (playing) {
			videoRef?.current?.pause();
			setPlaying(false);
		} else {
			videoRef?.current?.play();
			setPlaying(true);
		}
	};

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = muted;
		}
	}, [muted]);

	return (
		<div className="pt-10">
			<article className="w-[93%]">
				<div className="flex items-start gap-x-4">
					<div className="relative h-16 w-16">
						<Image
							alt="Profile-image"
							src={videoPosted?.postedBy?.image}
							fill
							className="rounded-full "
						/>
					</div>

					<div className="flex items-center">
						<h5 className=" font-bold">
							{videoPosted?.postedBy?.userName}
						</h5>
						<span className="ml-2 text-blue-500">
							<GoVerified />
						</span>
						<p className="ml-3 text-sm font-medium text-gray-600">
							{videoPosted?.postedBy?.userName}
						</p>
					</div>
				</div>

				<div className="-mt-7 ml-20">
					<p className="">{videoPosted?.caption}</p>

					<div className="relative mt-4 rounded-2xl bg-gray-100 py-24">
						<Link href="/detail/:id">
							<video
								loop
								ref={videoRef}
								src={videoPosted?.video?.asset?.url}
								className="w-full"></video>
						</Link>

						<div className="absolute bottom-8 mx-20 flex  w-9/12 justify-between">
							<button onClick={() => handlePressVideo()}>
								{playing ? (
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
