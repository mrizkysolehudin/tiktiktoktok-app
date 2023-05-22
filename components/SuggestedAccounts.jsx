import React from "react";
import { GoVerified } from "react-icons/go";

const SuggestedAccounts = () => {
	return (
		<div className=" border-b-2 border-gray-200 px-6 pb-5 pt-2">
			<h3 className="font-semibold text-gray-600">Suggested accounts</h3>

			<div className="-ml-2 mt-4 flex flex-col gap-y-1">
				<button className="flex  gap-x-3 rounded px-2 py-1 hover:bg-gray-200">
					<p className="mt-1 h-8 w-8 rounded-full bg-red-500">L</p>
					<div className="text-start">
						<p className="mt-1 flex items-center font-bold">
							babuabuau{" "}
							<GoVerified className="ml-1 text-blue-500" />
						</p>
						<p className=" -mt-1 text-sm text-gray-500">
							babuabuau
						</p>
					</div>
				</button>

				<button className="flex  gap-x-3 rounded px-2 py-1 hover:bg-gray-200">
					<p className="mt-1 h-8 w-8 rounded-full bg-red-500">L</p>
					<div className="text-start">
						<p className="mt-1 flex items-center font-bold">
							babuabuau{" "}
							<GoVerified className="ml-1 text-blue-500" />
						</p>
						<p className=" -mt-1 text-sm text-gray-500">
							babuabuau
						</p>
					</div>
				</button>
			</div>
		</div>
	);
};

export default SuggestedAccounts;
