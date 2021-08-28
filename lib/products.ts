import products from "data/shoes.json";

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
	return products.map((item) => {
		return {
			params: {
				id: item.id,
			},
		};
	});
};

export const getSingleItem = (id: string) => {
	return products.find((element) => element.id === id);
};
