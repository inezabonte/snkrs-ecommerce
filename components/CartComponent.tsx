import { useEffect, useContext } from "react";
import Link from "next/link";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { CartDataContext } from "lib/CartDataProvider";

type cartTypes = {
	createdAt: string;
	name: string;
	imageUrl: string;
	price: string;
	description: string;
	id: string;
	shoeSize: string;
	quantity: string;
}[];

export default function CartComponent() {
	const [cartQuantity, setCartQuantity] = useContext(CartDataContext);
	useEffect(() => {
		const items: string | null = localStorage.getItem("cart");

		if (items != null) {
			const parsedData: cartTypes = JSON.parse(items);
			setCartQuantity(parsedData.length);
		}
	}, []);
	return (
		<Link href="/cart">
			<a className="relative text-gray-500">
				{cartQuantity > 0 ? (
					<span className="absolute -top-2 -right-2 bg-red-500 text-white font-medium rounded-full w-4 h-4 text-center">
						{cartQuantity}
					</span>
				) : (
					""
				)}
				<span className="sr-only">Cart {cartQuantity} items </span>
				<RiShoppingCart2Fill className="h-4 w-4" />
			</a>
		</Link>
	);
}
