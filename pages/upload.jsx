import useAuthStore from "@/store/authStore";
import { BASE_URL } from "@/utils";
import client from "@/utils/client";
import { topics } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const Upload = () => {
	const [caption, setCaption] = useState("");
	const [topic, setTopic] = useState();
	const [videoAsset, setVideoAsset] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [wrongFileType, setWrongFileType] = useState(false);
	const [posting, setPosting] = useState(false);

	const { userProfile } = useAuthStore();
	const router = useRouter();

	const handleSelectVideo = async (e) => {
		setIsLoading(true);

		const selectedTargetFile = e.target.files[0];
		const fileTypes = ["video/mp4", "video/webm", "video/ogg"];

		if (fileTypes.includes(selectedTargetFile.type)) {
			client.assets
				.upload("file", selectedTargetFile, {
					contentType: selectedTargetFile?.type,
					filename: selectedTargetFile?.name,
				})
				.then((data) => {
					setVideoAsset(data);
					setIsLoading(false);
				});
		} else {
			setWrongFileType(true);
			setIsLoading(false);
		}
	};

	const handlePost = async () => {
		if (caption && videoAsset && topic) {
			setPosting(true);

			const data = {
				_type: "post",
				caption: caption,
				video: {
					_type: "file",
					asset: {
						_type: "reference",
						_ref: videoAsset?._id,
					},
				},
				userId: userProfile?._id,
				postedBy: {
					_type: "postedBy",
					_ref: userProfile?._id,
				},
				topic: topic,
			};

			await axios.post(`${BASE_URL}/api/post`, data);

			router.push("/");
		}
	};

	return (
		<div className="absolute left-0 top-16  min-h-screen w-full bg-gray-100 pb-10">
			<div className="mx-auto mt-10 rounded-xl bg-white px-14 py-10 sm:py-40 xl:max-w-5xl xl:py-10">
				<h3 className="text-3xl font-bold">Upload video</h3>
				<p className="mt-2 text-gray-400">
					Post a video to your account
				</p>

				<form onSubmit={handlePost} className="mt-10 gap-x-5 sm:flex ">
					<section className="group relative h-96 rounded-xl border-4 border-dashed border-gray-300 p-6 pl-10 hover:border-orange-400 hover:bg-gray-100 sm:w-[37%] sm:pl-7 md:w-[45%] md:pl-5 lg:pl-20 xl:w-[27%] xl:pl-5">
						{isLoading ? (
							<p className="mt-[80%] text-center">Loading...</p>
						) : videoAsset ? (
							<video
								loop
								controls
								src={videoAsset?.url}
								className="h-[332px] rounded-lg bg-black"></video>
						) : (
							<>
								<input
									type="file"
									onChange={handleSelectVideo}
									className="absolute left-0 top-0 z-10 h-full w-full bg-gray-400 opacity-0"
								/>

								<div className="absolute top-0 -ml-1 mt-6 text-center">
									<div className="flex flex-col items-center ">
										<FaCloudUploadAlt className="text-6xl" />
										<p className="text-xl font-semibold">
											Select video to upload
										</p>
									</div>

									<div className="mt-8 flex flex-col gap-y-4 text-sm text-gray-400">
										<p>MP4 or WebM or ogg</p>
										<p>720x1280 resolution or higher</p>
										<p>Up to 10 minutes</p>
										<p>Less than 2 GB</p>
									</div>

									{wrongFileType && (
										<p className="absolute  -ml-1 w-52 text-lg font-bold text-red-500">
											Please select a video file
										</p>
									)}

									<p className="mt-10 w-full rounded-md bg-orange-500 py-2 font-semibold text-white group-hover:bg-orange-600">
										Select file
									</p>
								</div>
							</>
						)}
					</section>

					<section className="mt-5 text-black sm:w-8/12">
						<div>
							<div>
								<label className="font-semibold">Caption</label>
								<input
									type="text"
									value={caption}
									onChange={(e) => setCaption(e.target.value)}
									className="mt-2 h-9 w-full rounded border-2 border-gray-300 px-5 py-5 outline-none"
								/>
							</div>
							<div className="mt-4">
								<label className="font-semibold">
									Choose a topic
								</label>
								<select
									onChange={(e) => setTopic(e.target.value)}
									className="mt-2  w-full rounded border-2 border-gray-300 px-4 py-3">
									{topics.map((item) => (
										<option
											key={item?.name}
											value={item?.name}>
											{item?.name}
										</option>
									))}
								</select>
							</div>

							<div className="mt-12 flex gap-x-6 font-semibold">
								<button className="rounded border-2 border-gray-300 px-8 py-2 hover:bg-gray-100 sm:px-16">
									Discard
								</button>
								<button
									disabled={videoAsset?.url ? false : true}
									onClick={handlePost}
									className="rounded bg-orange-500 px-11 py-2 text-white hover:bg-orange-600 disabled:bg-gray-400 sm:px-20">
									{posting ? "loading..." : "Post"}
								</button>
							</div>
						</div>
					</section>
				</form>
			</div>
		</div>
	);
};

export default Upload;
