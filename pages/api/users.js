import client from "@/utils/client";
import { allUsersQuery } from "@/utils/queries";

export default async function handler(req, res) {
	if (req.method === "GET") {
		const data = await client.fetch(allUsersQuery());

		res.status(200).json(data);
	}
}
