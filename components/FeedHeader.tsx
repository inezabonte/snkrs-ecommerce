import React from "react";
import Image from "next/image";
import nikeLogo from "public/images/snkrs.svg";

export default function FeedHeader() {
	return (
		<header className="flex justify-between items-center py-2 px-4 border-b border-t">
			<div>
				<Image src={nikeLogo} height={35} width={50} />
			</div>
			<div className="space-x-5">
				<a href="">Feed</a>
				<a href="">In Stock</a>
				<a href="">Upcoming</a>
			</div>
			<div></div>
		</header>
	);
}
