import Layout from "components/IndexLayout";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Select } from "@chakra-ui/react";
import Header from "components/Header";

type cartTypes = {
	createdAt: string;
	name: string;
	imageUrl: string;
	price: string;
	description: string;
	id: string;
	shoeSize: string;
}[];

export default function CartPage() {
	const [cart, setCart] = useState<cartTypes>([]);
	const [total, setTotal] = useState(0);
	useEffect(() => {
		const items: string | null = localStorage.getItem("cart");

		if (items != null) {
			const parsedData: cartTypes = JSON.parse(items);
			setCart((currentValue) => [...currentValue, ...parsedData]);

			parsedData.forEach((element) => {
				setTotal((currentValue) => currentValue + parseInt(element.price));
			});
		}
	}, []);

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

	return (
		<Layout>
			<Header title="Nike Store. Cart." />
			<main className="min-h-screen mx-4">
				<div className="grid md:grid-cols-2 gap-6 max-w-6xl m-auto justify-items-center ">
					<div className="w-full space-y-8 border-b pb-4">
						<div>
							<h1 className="text-xl font-semibold">Bag</h1>
							<span>
								{cart.length === 0 ? "There are no items in your bag." : ""}
							</span>
						</div>
						<div>
							{cart.map((item) => (
								<div className="flex space-x-4">
									<div>
										<Image src={item.imageUrl} width={150} height={150} />
									</div>
									<div className="w-full">
										<div className="flex justify-between">
											<span className="font-medium">{item.name}</span>
											<span>${item.price}</span>
										</div>
										<div className="text-gray-500">
											<div>
												<span>Men's Shoes</span>
											</div>
											<div className="flex">
												<div className="flex space-x-2">
													<span>Size</span>
													<Select
														placeholder={item.shoeSize}
														variant="unstyled"
													>
														{options.map((option) => (
															<option value={option}>{option}</option>
														))}
													</Select>
												</div>
												<div className="flex space-x-2">
													<span>Quantity</span>
													<Select placeholder="1" variant="unstyled">
														<option>1</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
														<option>6</option>
														<option>7</option>
														<option>8</option>
														<option>9</option>
														<option>10</option>
													</Select>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="space-y-4 w-full lg:w-8/12">
						<div>
							<h1 className="text-xl font-semibold">Summary</h1>
						</div>
						<div className="space-y-4">
							<div className="flex justify-between">
								<span>Subtotal</span>
								<span>${total.toFixed(2)}</span>
							</div>
							<div className="flex justify-between">
								<span>Estimated Shipping & Handling</span>
								<span>$0.00</span>
							</div>
							<div className="flex justify-between">
								<span>Estimated Tax</span>
								<span>-</span>
							</div>
						</div>
						<div className="flex justify-between border-t border-b py-4">
							<span className="font-bold">Total</span>
							<span className="font-bold">${total.toFixed(2)}</span>
						</div>
						<div className="flex flex-col  space-y-4">
							<button className="bg-gray-200 rounded-full py-4 font-bold hover:bg-black hover:text-white">
								Checkout
							</button>
							<button className="bg-gray-200 rounded-full py-4">PayPal</button>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}
