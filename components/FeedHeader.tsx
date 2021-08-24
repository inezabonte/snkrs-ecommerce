import React from "react";
import Image from "next/image";
import nikeLogo from "public/images/snkrs.svg";
import Link from "next/link";

export default function FeedHeader() {
	return (
		<header className="flex justify-between items-center py-2 px-4 border-b border-t">
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
		</header>
	);
}
