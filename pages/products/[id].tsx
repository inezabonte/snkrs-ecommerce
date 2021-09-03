import Layout from "@/components/IndexLayout";
import Image from "next/image";
import { useRadioGroup, Grid } from "@chakra-ui/react";
import RadioCard from "@/components/RadioCard";
import { useState, useContext } from "react";
import Header from "@/components/Header";
import { CartDataContext } from "lib/CartDataProvider";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axios from "axios";
import LoadingComponent from "@/components/LoadingComponent";

type ItemTypes = {
	createdAt: string;
	name: string;
	imageUrl: string;
	price: string;
	description: string;
	id: string;
};

export default function ItemPage() {
	const router = useRouter();
	const { id } = router.query;

	const fetchProduct = async () => {
		const { data } = await axios.get(
			`https://611ed3bf9771bf001785c639.mockapi.io/api/v1/products/${id}`
		);
		return data;
	};

	const { data, isLoading } = useQuery(
		[id ? `products/${id}` : null],
		fetchProduct
	);

	const [shoeSize, setShoeSize] = useState("");
	const [cartQuantity, setCartQuantity] = useContext(CartDataContext);

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

	const handleClick = async () => {
		const items: string | null = localStorage.getItem("cart");

		const addedItem = {
			...data,
			shoeSize,
			quantity: "1",
			timestamp: Date.now(),
		};

		if (items != null) {
			const parsedDadata: ItemTypes[] = JSON.parse(items);
			const updatedCart = [...parsedDadata, addedItem];
			localStorage.setItem("cart", JSON.stringify(updatedCart));
			setCartQuantity(cartQuantity + 1);
		} else {
			localStorage.setItem("cart", JSON.stringify([addedItem]));
			setCartQuantity(cartQuantity + 1);
		}
	};

	if (isLoading) {
		return <LoadingComponent />;
	}

	return (
		<Layout>
			<Header title={data.name} />
			<main className="min-h-screen m-4">
				<div className="grid lg:grid-cols-2 justify-items-center items-center">
					<div>
						<figure>
							<Image src={data.imageUrl} width={457} height={514} />
						</figure>
					</div>
					<div className="max-w-sm text-center space-y-8">
						<h2 className="font-medium text-2xl">{data.name}</h2>
						<span className="font-medium">${data.price}</span>
						<p>{data.description}</p>

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
							className="transform bg-black text-white w-full p-4 rounded-full font-medium active:scale-95"
							onClick={handleClick}
						>
							Add To Cart
						</button>
					</div>
				</div>
			</main>
		</Layout>
	);
}
