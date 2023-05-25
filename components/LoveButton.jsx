import useAuthStore from "@/store/authStore";
import React, { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";

const LoveButton = ({ totalLikes, handleClickLike, handleClickDislike }) => {
	const [alreadyLike, setAlreadyLike] = useState(false);
	const { userProfile } = useAuthStore();
	const filterLikes = totalLikes?.filter(
		(item) => item._ref == userProfile?._id
	);

	useEffect(() => {
		if (filterLikes?.length > 0) {
			setAlreadyLike(true);
		} else {
			setAlreadyLike(false);
		}
	}, [totalLikes, filterLikes]);

	return (
		<div>
			{alreadyLike ? (
				<button onClick={handleClickDislike}>
					<div
						className={` rounded-full bg-gray-100 p-2 pt-2.5 text-2xl text-red-500 `}>
						<MdFavorite />
					</div>
				</button>
			) : (
				<button onClick={handleClickLike}>
					<div
						className={`rounded-full bg-gray-100 p-2 pt-2.5 text-2xl`}>
						<MdFavorite />
					</div>
				</button>
			)}

			<p className="-mt-2 font-semibold">{totalLikes?.length || 0}</p>
		</div>
	);
};

export default LoveButton;
