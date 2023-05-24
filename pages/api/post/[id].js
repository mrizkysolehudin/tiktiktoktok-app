import client from "@/utils/client";
import { postDetailQuery } from "@/utils/queries";

export default async function handler(req, res) {
	if (req.method === "GET") {
		const { id } = req.query;
		const query = postDetailQuery(id);

		const data = await client.fetch(query);

		res.status(200).json(data);

		// client.fetch(postDetailQuery(id)).then((res) => res.status(200).json(data));
	}
}
