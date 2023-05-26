import React from "react";
import { GoVerified } from "react-icons/go";
import NoResult from "./NoResult";
import Image from "next/image";
import useAuthStore from "@/store/authStore";

const CommentSection = ({
	comment,
	addComment,
	setComment,
	isPostingComment,
	allComments,
}) => {
	const { allUsers, userProfile } = useAuthStore();

	return (
		<div className="mt-4 border-b-2 border-t-2 border-gray-200 bg-[#F8F8F8] px-10  pt-4">
			<section className="h-[457px] overflow-scroll scrollbar-hide">
				{allComments?.length > 0 ? (
					allComments?.map((commentItem, index) => (
						<div key={index}>
							{allUsers?.map(
								(userComment, index2) =>
									userComment?._id ===
										(commentItem?.postedBy?._ref ||
											commentItem?.postedBy?._id) && (
										<div key={index2} className="mb-4">
											<div className="flex gap-x-2">
												<div className="relative h-9 w-9 ">
													<Image
														fill
														alt="profile-image"
														src={userComment?.image}
														className="rounded-full"
													/>
												</div>
												<div>
													<p className="flex items-center gap-x-1 font-semibold">
														{userComment?.userName}{" "}
														<GoVerified className="text-blue-500" />
													</p>
													<p className="-mt-0.5 text-xs text-gray-500">
														{userComment?.userName}
													</p>
												</div>
											</div>

											<p className="mt-1">
												{commentItem?.comment}
											</p>
										</div>
									)
							)}
						</div>
					))
				) : (
					<NoResult />
				)}
			</section>

			{userProfile && (
				<form
					onSubmit={addComment}
					className="mt-3  pb-7 text-gray-400">
					<input
						type="text"
						value={comment}
						onChange={(e) => setComment(e.target.value.trim())}
						placeholder="enter comment..."
						className="h-12 w-9/12 rounded-l-md bg-gray-200 px-4 outline-gray-300"
					/>
					<button
						onClick={addComment}
						className="h-12 rounded-r-md border-2 border-gray-300 px-4">
						{isPostingComment ? "loading..." : "Comment"}
					</button>
				</form>
			)}
		</div>
	);
};

export default CommentSection;
