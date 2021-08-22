import type { NextApiRequest, NextApiResponse } from "next";
import shoes from "data/shoes.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json(shoes);
};
