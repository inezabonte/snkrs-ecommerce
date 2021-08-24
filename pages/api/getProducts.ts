import type { NextApiRequest, NextApiResponse } from "next";
import shoes from "data/shoes.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
	if (req.query.id) {
		const { id } = req.query;
		const foundProduct = shoes.find((element) => element.id === id);

		return res.status(200).json(foundProduct);
	}

	return res.status(200).json(shoes);
};
