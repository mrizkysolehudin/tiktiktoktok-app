import React from "react";
import { MdOutlineVideocamOff } from "react-icons/md";
import { BiCommentX } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const NoResult = ({ text }) => {
	return (
		<div className="mt-40 flex w-full flex-col  items-center sm:justify-center">
			<p className="text-5xl md:text-8xl">
				{text === "No Videos" ? (
					<MdOutlineVideocamOff />
				) : text === "No Accounts" ? (
					<CgProfile />
				) : (
					<BiCommentX />
				)}
			</p>
			<p className=" text-2xl">{text}</p>
		</div>
	);
};

export default NoResult;
