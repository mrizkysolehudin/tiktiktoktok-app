import React from "react";
import logo from "../public/tiktik-logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
	return (
		<div className="fixed left-0 top-0 z-50 w-full bg-white">
			<div className="mx-10 flex h-16 items-center justify-between border-b-2 border-gray-200 px-4 ">
				<div className="relative h-10 w-32">
					<Image
						src={logo}
						fill
						alt="tiktik-logo"
						className=" cursor-pointer"
					/>
				</div>

				<div className="relative">
					<input
						type="text"
						placeholder="Search accounts and videos"
						className="h-12 w-80 rounded-3xl bg-gray-200 px-5 outline-gray-300"
					/>

					<div className="absolute right-5 top-2 flex h-8 items-center border-l-2 border-gray-300 pl-3  text-gray-500 ">
						<BiSearch className="h-6 w-6" />
					</div>
				</div>

				<div className="flex gap-x-10">
					<Link
						href=""
						className="flex items-center rounded border-2 border-gray-300  px-3 font-semibold">
						<span className="-mt-1 mr-2 text-3xl">+</span>
						Upload
					</Link>
					<button className="h-10 w-10 rounded-full bg-green-600">
						L
					</button>

					<button className="mr-6">
						<AiOutlineLogout color="red" fontSize={21} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
