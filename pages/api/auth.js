import client from "@/utils/client";
import { singleUserQuery } from "@/utils/queries";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const user = req.body;

		await client.fetch(singleUserQuery(user));
		res.status(201).json("Login success");
	}
}
