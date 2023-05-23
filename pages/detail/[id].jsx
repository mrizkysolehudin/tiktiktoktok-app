import CommentSection from "@/components/CommentSection";
import LoveButton from "@/components/LoveButton";
import React from "react";
import { GoVerified } from "react-icons/go";

const Detail = () => {
	return (
		<div className="absolute left-0 top-0 z-30 flex w-full flex-nowrap bg-white">
			<section className="flex-2 relative flex w-9/12 items-center justify-center">
				kiri
			</section>

			<section className="relative w-[700px]">
				<article className="px-10  pt-14">
					<div className="flex gap-x-4">
						<p className="h-14 w-14 rounded-full bg-blue-500">L</p>
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
