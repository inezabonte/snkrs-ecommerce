import Layout from "components/IndexLayout";
import axios from "axios";
import Image from "next/image";
import { getAllProducstIds } from "lib/products";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRadioGroup, Grid, FormControl } from "@chakra-ui/react";
import RadioCard from "components/RadioCard";
import { useState, FormEvent } from "react";

type ItemTypes = {
	createdAt: string;
	name: string;
	imageUrl: string;
	price: string;
	description: string;
	id: string;
};

type ItemPagetypes = {
	productData: ItemTypes;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getAllProducstIds();

	return {
		paths,
		fallback: false,
	};
};

export default function ItemPage({ productData }: ItemPagetypes) {
	const [shoeSize, setShoeSize] = useState("");
	const options = [
		"M 6 / W 7.5",
		"M 6.5 / W 8",
		"M 7 / W 8.5",
		"M 7.5 / W 9",
		"M 8 / W 9.5",
		"M 8.5 / W 10",
		"M 9 / W 10.5",
		"M 9.5 / W 11",
		"M 10 / W 11.5",
		"M 10.5 / W 12",
		"M 11 / W 12.5",
		"M 11.5 / W 13",
		"M 12 / W 13.5",
		"M 12.5 / W 14",
	];

	const { getRootProps, getRadioProps } = useRadioGroup({
		name: "shoeSize",
		onChange: setShoeSize,
	});

	const group = getRootProps();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(shoeSize);
	};

	return (
		<Layout title={productData.name}>
			<main className="max-w-6xl mx-auto">
				<div className="flex flex-col items-center md:flex-row md:justify-between">
					<div>
						<figure>
							<Image src={productData.imageUrl} width={457} height={514} />
						</figure>
					</div>
					<div className="max-w-sm text-center space-y-4">
						<h2 className="font-medium text-2xl">{productData.name}</h2>
						<span className="font-medium">${productData.price}</span>
						<p>{productData.description}</p>
						<form onSubmit={handleSubmit} className="space-y-4">
							<Grid {...group} gridTemplateColumns="repeat(2, 1fr)">
								{options.map((value) => {
									const radio = getRadioProps({ value });
									return (
										<RadioCard key={value} {...radio}>
											{value}
										</RadioCard>
									);
								})}
							</Grid>
							<button
								className="bg-black text-white w-full p-4 rounded-full font-medium"
								type="submit"
							>
								Add To Cart
							</button>
						</form>
					</div>
				</div>
			</main>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data } = await axios.get(
		`https://611ed3bf9771bf001785c639.mockapi.io/api/v1/products/${params.id}`
	);

	return {
		props: {
			productData: data,
		},
	};
};
