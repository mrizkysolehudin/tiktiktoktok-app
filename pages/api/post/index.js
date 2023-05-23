import client from "@/utils/client";
import { allPostsQuery } from "@/utils/queries";

export default async function handler(req, res) {
	if (req.method === "GET") {
		const data = await client.fetch(allPostsQuery);

		res.status(200).json(data);
	} else if (req.method === "POST") {
		try {
			const res = await client.create(req.body);

			res.status(201).json("Video created");
		} catch (error) {
			console.log(error.message);
			res.status(500).json("Internal server error");
		}
	}
}
