import { useState, useEffect } from "react";
import Link from "next/link";
import { RiShoppingCart2Fill } from "react-icons/ri";

type cartTypes = {
	createdAt: string;
	name: string;
	imageUrl: string;
	price: string;
	description: string;
	id: string;
	shoeSize: string;
}[];

export default function CartComponent() {
	const [cartTotal, setCartTotal] = useState(0);
	useEffect(() => {
		const items: string | null = localStorage.getItem("cart");

		if (items != null) {
			const parsedDadata: cartTypes = JSON.parse(items);
			setCartTotal(parsedDadata.length);
		}
	}, []);
	return (
		<Link href="/cart">
			<a className="relative text-gray-500">
				{cartTotal > 0 ? (
					<span className="absolute -top-2 -right-2 bg-red-500 text-white font-medium rounded-full w-4 h-4 text-center">
						{cartTotal}
					</span>
				) : (
					""
				)}
				<RiShoppingCart2Fill className="h-4 w-4" />
			</a>
		</Link>
	);
}
