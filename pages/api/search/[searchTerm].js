import client from "@/utils/client";
import { searchPostsQuery } from "@/utils/queries";

export default async function handler(req, res) {
	if (req.method === "GET") {
		const { searchTerm } = req.query;

		const query = searchPostsQuery(searchTerm);

		const dataSearch = await client.fetch(query);

		res.status(200).json(dataSearch);
	}
}
