import { footerList1, footerList2, footerList3 } from "@/utils/constants";
import React from "react";

const Footer = () => {
	return (
		<div className="hidden px-4 pt-4 text-sm text-gray-400 xl:block">
			<div className="flex flex-wrap gap-x-2 gap-y-2 py-2 ">
				{footerList1.map((item, index) => (
					<p
						key={index}
						className="cursor-pointer text-sm  text-gray-400 hover:underline ">
						{item}
					</p>
				))}
			</div>

			<div className="flex flex-wrap gap-x-2 gap-y-2 py-2  ">
				{footerList2.map((item, index) => (
					<p
						key={index}
						className="cursor-pointer text-sm  text-gray-400 hover:underline ">
						{item}
					</p>
				))}
			</div>

			<div className="flex flex-wrap gap-x-2 gap-y-2 py-2">
				{footerList3.map((item, index) => (
					<p
						key={index}
						className="cursor-pointer text-sm  text-gray-400 hover:underline ">
						{item}
					</p>
				))}
			</div>

			<p className="pt-6">
				copyright © 2022 Toktok. All Rights reserved.
			</p>
		</div>
	);
};

export default Footer;
