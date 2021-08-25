import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { GrMenu } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import nikeLogo from "public/images/snkrs.svg";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
} from "@chakra-ui/react";
import CartComponent from "./CartComponent";

export default function TopHeader() {
	return (
		<header>
			<div></div>
			<div className="hidden lg:flex  justify-between text-gray-500 text-xs  mx-4 mt-2">
				<div>
					<a href="https://www.nike.com/us/en" className="flex items-center">
						<MdKeyboardArrowLeft className="h-6 w-6" />
						<span>Visit Nike.com</span>
					</a>
				</div>
				<div className="space-x-6 flex items-center">
					<a>Join / Log in</a>
					<a>Help</a>
					<CartComponent />
					<a className="flex items-center">
						<MdLocationOn className="h-4 w-4" />
						<span>United States</span>
					</a>
				</div>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-y-6 items-center py-2 px-4 border-b border-t">
				<div>
					<Link href="/">
						<a>
							<Image src={nikeLogo} height={35} width={50} />
						</a>
					</Link>
				</div>
				<div className="justify-self-end lg:hidden ">
					<div className="flex items-center space-x-4">
						<CartComponent />
						<Menu>
							<MenuButton as={IconButton} icon={<GrMenu />} variant="outline" />
							<MenuList>
								<MenuItem>Join / Log in</MenuItem>
								<MenuItem>Visit Nike.com</MenuItem>
								<MenuItem>Help</MenuItem>
							</MenuList>
						</Menu>
					</div>
				</div>
				<div className="space-x-8 font-medium col-span-2 lg:col-span-1 justify-self-center">
					<Link href="/">
						<a>Feed</a>
					</Link>
					<Link href="/">
						<a>In Stock</a>
					</Link>
					<Link href="/">
						<a>Upcoming</a>
					</Link>
				</div>
			</div>
		</header>
	);
}
