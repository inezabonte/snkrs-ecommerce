import axios from "axios";

type ProductTypes = {
	createdAt: string;
	name: string;
	imageUrl: string;
	price: string;
	description: string;
	id: string;
}[];

type DataTypes = {
	data: ProductTypes;
};

export const getAllProducstIds = async () => {
	const { data }: DataTypes = await axios.get(
		"https://611ed3bf9771bf001785c639.mockapi.io/api/v1/products"
	);

	return data.map((item) => {
		return {
			params: {
				id: item.id,
			},
		};
	});
};
