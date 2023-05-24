import React, { useState } from "react";
import logo from "../public/tiktik-logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import useAuthStore from "@/store/authStore";
import { createOrGetUser } from "@/utils";

const Navbar = () => {
	const router = useRouter();
	const { addUser, removeUser, userProfile } = useAuthStore();

	const [searchInputValue, setSearchInputValue] = useState("");

	const handleSearch = async (e) => {
		e.preventDefault();

		if (searchInputValue) {
			router.push(`/search/${searchInputValue}`);
		}
	};

	console.log(userProfile);

	return (
		<div className="fixed left-0 top-0 z-20 w-full bg-white">
			<div className="mx-10 flex h-16 items-center justify-between border-b-2 border-gray-200 px-4 ">
				<Link href="/" className="relative h-10 w-32">
					<Image
						src={logo}
						fill
						alt="tiktik-logo"
						className=" cursor-pointer"
					/>
				</Link>

				<form onSubmit={handleSearch} className="relative">
					<input
						type="text"
						value={searchInputValue}
						onChange={(e) => setSearchInputValue(e.target.value)}
						placeholder="Search accounts and videos"
						className="h-12 w-80 rounded-3xl bg-gray-200 px-5 outline-gray-300"
					/>

					<button
						type="submit"
						className="absolute right-5 top-2 flex h-8 items-center border-l-2 border-gray-300 pl-3  text-gray-500 ">
						<BiSearch className="h-6 w-6" />
					</button>
				</form>

				{userProfile ? (
					<div className="flex gap-x-10">
						<Link
							href="/upload"
							className="flex items-center rounded border-2 border-gray-300 px-3  font-semibold hover:bg-gray-100">
							<span className="-mt-1 mr-2 text-3xl">+</span>
							Upload
						</Link>
						<button className="relative h-10 w-10 rounded-full">
							<Image
								src={userProfile?.image}
								alt="Profile-image"
								fill
								className=" rounded-full"
							/>
						</button>

						<button
							onClick={() => {
								googleLogout();
								removeUser();
							}}
							className="mr-6 rounded-full p-2 hover:bg-gray-200">
							<AiOutlineLogout color="red" fontSize={21} />
						</button>
					</div>
				) : (
					<div>
						<GoogleLogin
							onSuccess={(response) =>
								createOrGetUser(response, addUser)
							}
							onError={() => console.log("Error")}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
