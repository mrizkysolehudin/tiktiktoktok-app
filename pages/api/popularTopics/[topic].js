import client from "@/utils/client";
import { topicPostsQuery } from "@/utils/queries";

export default async function handler(req, res) {
	if (req.method === "GET") {
		const { topic } = req.query;

		const query = topicPostsQuery(topic);

		const data = await client.fetch(query);

		res.status(200).json(data);
	}
}
