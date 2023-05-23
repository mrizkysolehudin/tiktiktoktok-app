import React from "react";
import { GoVerified } from "react-icons/go";

const commentz = (
	<div className="mb-4">
		<div className="flex gap-x-2">
			<p className="h-9 w-9 rounded-full bg-blue-600">L</p>
			<div>
				<p className="flex items-center gap-x-1 font-semibold">
					buebuebue <GoVerified className="text-blue-500" />
				</p>
				<p className="-mt-0.5 text-xs text-gray-500">buebxsuebue</p>
			</div>
		</div>

		<p className="mt-1">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
			eveniet.
		</p>
	</div>
);

const CommentSection = () => {
	return (
		<div className="mt-4 border-b-2 border-t-2 border-gray-200 bg-[#F8F8F8] px-10  pt-4">
			<section className="h-[457px] overflow-scroll scrollbar-hide">
				{commentz}
				{commentz}
				{commentz}
				{commentz}
				{commentz}
				{commentz}
			</section>

			<section className="mt-3  pb-7 text-gray-400">
				<input
					type="text"
					placeholder="enter comment..."
					className="h-12 w-9/12 rounded-l-md bg-gray-200 px-4"
				/>
				<button className="h-12 rounded-r-md border-2 border-gray-300 px-4">
					Comment
				</button>
			</section>
		</div>
	);
};

export default CommentSection;
