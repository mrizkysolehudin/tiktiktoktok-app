import client from "@/utils/client";
import {
	singleUserQuery,
	userCreatedPostsQuery,
	userLikedPostsQuery,
} from "@/utils/queries";

export default async function handler(req, res) {
	if (req.method === "GET") {
		const { id } = req.query;

		const dataUser = await client.fetch(singleUserQuery(id));
		const dataLikedVideos = await client.fetch(userLikedPostsQuery(id));
		const dataUserVideos = await client.fetch(userCreatedPostsQuery(id));

		res.status(200).json({
			dataAccount: dataUser[0],
			dataLikedVideos,
			dataUserVideos,
		});
	}
}
