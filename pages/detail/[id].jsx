import CommentSection from "@/components/CommentSection";
import LoveButton from "@/components/LoveButton";
import useAuthStore from "@/store/authStore";
import { BASE_URL } from "@/utils";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { MdCancel } from "react-icons/md";

const Detail = ({ detailPost }) => {
	const [playing, setPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const [post, setPost] = useState(detailPost);

	const router = useRouter();
	const videoRef = useRef();
	const { userProfile } = useAuthStore();

	const handlePlayVideo = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
	};

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = isMuted;
		}
	}, [isMuted]);

	const handleLike = async (like) => {
		if (userProfile) {
			const { data } = await axios.put(`${BASE_URL}/api/likeVideo`, {
				userId: userProfile?._id,
				postId: post?._id,
				like,
			});

			setPost({ ...post, likes: data?.likes });
		}
	};

	return (
		<div className="absolute left-0 top-0 z-30 flex w-full bg-white">
			<section className="flex-2  flex w-9/12 items-center justify-center bg-orange-800 ">
				<article className="-mt-60">
					<button onClick={() => router.back()}>
						<MdCancel className="absolute top-0 m-6 text-4xl text-gray-300 hover:text-gray-300/80" />
					</button>

					<div className="relative">
						<video
							ref={videoRef}
							onClick={() => handlePlayVideo()}
							src={post?.video?.asset?.url}
							className="w-[760px] cursor-pointer"></video>

						<button
							onClick={() => handlePlayVideo()}
							className="absolute left-[44%] top-[44%] ">
							{!playing && (
								<BsFillPlayFill className="h-16 w-16 text-white" />
							)}
						</button>
					</div>

					<div className="relative">
						<button
							onClick={() => setIsMuted(!isMuted)}
							className="absolute right-16 top-10 text-white">
							{isMuted ? (
								<HiVolumeOff className="h-8 w-8" />
							) : (
								<HiVolumeUp className="h-8 w-8" />
							)}
						</button>
					</div>
				</article>
			</section>

			<section className="relative w-[700px]">
				<article className="px-10  pt-14">
					<div className="flex gap-x-4">
						<Link
							href="/profile/:id"
							className="relative h-14 w-14">
							<Image
								fill
								alt="profile-image"
								src={post?.postedBy?.image}
								className="rounded-full"
							/>
						</Link>
						<div>
							<p className="flex items-center gap-x-2 font-bold">
								{post?.postedBy?.userName}{" "}
								<GoVerified className="text-blue-500" />
							</p>
							<p>{post?.postedBy?.userName} </p>
						</div>
					</div>

					<p className="ml-1 mt-4 text-gray-700">{post?.caption}</p>

					<div className="mt-8 text-center">
						{userProfile && (
							<LoveButton
								totalLikes={post?.likes}
								handleClickLike={() => handleLike(true)}
								handleClickDislike={() => handleLike(false)}
							/>
						)}
					</div>
				</article>

				<CommentSection />
			</section>
		</div>
	);
};

export const getServerSideProps = async ({ params: { id } }) => {
	let res = await axios.get(`${BASE_URL}/api/post/${id}`);

	return {
		props: {
			detailPost: res.data,
		},
	};
};

export default Detail;
