import useAuthStore from "@/store/authStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoVerified } from "react-icons/go";

const SuggestedAccounts = () => {
	const { allUsers } = useAuthStore();

	return (
		<div className=" border-b-2 border-gray-200 px-6 pb-5 pt-2">
			<h3 className="font-semibold text-gray-600">Suggested accounts</h3>

			<div className="-ml-2 mt-2 flex flex-col ">
				{allUsers.length ? (
					allUsers?.map((account, index) => (
						<Link
							key={index}
							href={`/profile/${account?._id}`}
							className="flex  gap-x-3 rounded px-3 pb-1 hover:bg-gray-200">
							<div className="relative mt-2 h-8  w-8">
								<Image
									fill
									src={account?.image}
									className="rounded-full"
								/>
							</div>
							<div className="text-start">
								<p className="mt-1 flex items-center font-bold">
									{account?.userName}{" "}
									<GoVerified className="ml-1 text-blue-500" />
								</p>
								<p className=" -mt-1 text-sm text-gray-500">
									{account?.userName}
								</p>
							</div>
						</Link>
					))
				) : (
					<div className="ml-3 font-bold text-gray-400">
						No accounts
					</div>
				)}
			</div>
		</div>
	);
};

export default SuggestedAccounts;
