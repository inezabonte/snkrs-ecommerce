import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";

export default function TopHeader() {
	return (
		<header className="flex justify-between text-gray-500 text-xs font-light mx-4 mt-2">
			<div>
				<a href="https://www.nike.com/us/en" className="flex items-center">
					<MdKeyboardArrowLeft className="h-6 w-6" />
					<span>Visit Nike.com</span>
				</a>
			</div>
			<div className="space-x-6 flex items-center">
				<a>Join / Log in</a>
				<a>Help</a>
				<a>
					<RiShoppingCart2Fill className="h-4 w-4" />
				</a>
				<a className="flex items-center">
					<MdLocationOn className="h-4 w-4" />
					<span>United States</span>
				</a>
			</div>
		</header>
	);
}
