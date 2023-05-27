import { topics } from "@/utils/constants";
import Link from "next/link";
import React, { useState } from "react";

const PopularTopics = () => {
	const [currentTopic, setCurrentTopic] = useState("");

	return (
		<div className="my-2 border-b-2 border-gray-200 pb-6 pt-2">
			<h3 className="ml-2 hidden font-semibold text-gray-600 xl:block">
				Popular Topics
			</h3>

			<div className="mt-4 flex flex-wrap gap-3">
				{topics.map((topic, index) => (
					<Link
						key={index}
						href={`/?topic=${topic.name}`}
						onClick={() => setCurrentTopic(topic?.name)}
						className={`${
							currentTopic == topic.name
								? "border-pink-600 text-pink-600"
								: "border-gray-300"
						} flex items-center gap-x-3 rounded-full px-3  py-1 font-semibold capitalize hover:bg-gray-100 xl:border-2`}>
						<p className="text-2xl">{topic.icon}</p>

						<p className="hidden xl:block">{topic.name}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default PopularTopics;
