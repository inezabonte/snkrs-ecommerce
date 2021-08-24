import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import nikeLogo from "public/images/snkrs.svg";

type cartTypes = {
	createdAt: string;
	name: string;
	imageUrl: string;
	price: string;
	description: string;
	id: string;
	shoeSize: string;
}[];

export default function TopHeader() {
	const [cartTotal, setCartTotal] = useState(0);
	useEffect(() => {
		const items: string | null = localStorage.getItem("cart");

		if (items != null) {
			const parsedDadata: cartTypes = JSON.parse(items);
			setCartTotal(parsedDadata.length);
		}
	}, []);

	return (
		<header>
			<div className="flex justify-between text-gray-500 text-xs  mx-4 mt-2">
				<div>
					<a href="https://www.nike.com/us/en" className="flex items-center">
						<MdKeyboardArrowLeft className="h-6 w-6" />
						<span>Visit Nike.com</span>
					</a>
				</div>
				<div className="space-x-6 flex items-center">
					<a>Join / Log in</a>
					<a>Help</a>
					<Link href="/cart">
						<a className="relative">
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
					<a className="flex items-center">
						<MdLocationOn className="h-4 w-4" />
						<span>United States</span>
					</a>
				</div>
			</div>
			<div className="flex justify-between items-center py-2 px-4 border-b border-t">
				<div>
					<Link href="/">
						<a>
							<Image src={nikeLogo} height={35} width={50} />
						</a>
					</Link>
				</div>
				<div className="space-x-8 font-medium">
					<a href="">Feed</a>
					<a href="">In Stock</a>
					<a href="">Upcoming</a>
				</div>
				<div></div>
			</div>
		</header>
	);
}
