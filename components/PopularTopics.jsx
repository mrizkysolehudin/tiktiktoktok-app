import { topics } from "@/utils/constants";
import React from "react";

const PopularTopics = () => {
	return (
		<div className="my-2  border-b-2 border-gray-200 pb-6 pt-2">
			<h3 className="ml-2 font-semibold text-gray-600">Popular Topics</h3>

			<div className="mt-4 flex flex-wrap gap-3">
				{topics.map((topic) => (
					<button className="flex items-center gap-x-3 rounded-full border-2 border-gray-300 px-3 py-1 font-semibold capitalize hover:bg-gray-100">
						<p className="text-2xl">{topic.icon}</p>

						<p>{topic.name}</p>
					</button>
				))}
			</div>
		</div>
	);
};

export default PopularTopics;
