import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (!req.query.page) {
		return res.status(400).json({ message: "Page number is required" });
	}

	const { page } = req.query;
	try {
		const { data } = await axios.get(
			`https://611ed3bf9771bf001785c639.mockapi.io/api/v1/products?page=${page}&limit=10`
		);
		return res.status(200).json({ shoes: data, hasMore: Number(page) < 5 });
	} catch (error) {
		return res.status(500).json({ error });
	}
};
