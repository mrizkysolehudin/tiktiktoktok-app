import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const Upload = () => {
	return (
		<div className="absolute left-0 top-16  w-full bg-gray-100 pb-10">
			<div className="mx-auto mt-10 max-w-5xl rounded-xl bg-white px-14 py-10">
				<h3 className="text-3xl font-bold">Upload video</h3>
				<p className="mt-2 text-gray-400">
					Post a video to your account
				</p>

				<div className="mt-10 flex gap-x-5">
					<section className="group relative h-96 w-[27%] rounded-xl border-4 border-dashed border-gray-300 p-6 hover:border-orange-400 hover:bg-gray-100">
						<input
							type="file"
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

							<button className="mt-10 w-full rounded-md bg-orange-500 py-2 font-semibold text-white group-hover:bg-orange-600">
								Select file
							</button>
						</div>
					</section>

					<section className="mt-5 w-8/12 text-black">
						<form>
							<div>
								<label className="font-semibold">Caption</label>
								<input
									type="text"
									className="mt-2 h-9 w-full rounded border-2 border-gray-300 px-5 py-5 outline-none"
								/>
							</div>
							<div className="mt-4">
								<label className="font-semibold">
									Choose a topic
								</label>
								<select
									defaultValue="deve"
									type="text"
									className="mt-2 h-9 w-full rounded border-2 border-gray-300 px-10 py-5">
									<option value="">Development</option>
								</select>
							</div>

							<div className="mt-12 flex gap-x-6 font-semibold">
								<button className="rounded border-2 border-gray-300 px-16 py-2 hover:bg-gray-100">
									Discard
								</button>
								<button className="rounded  bg-orange-500 px-20 py-2 text-white hover:bg-orange-600">
									Post
								</button>
							</div>
						</form>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Upload;
