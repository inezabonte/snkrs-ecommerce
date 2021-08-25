import React from "react";
import Head from "next/head";

export default function Header({ title }: { title: string }) {
	return (
		<Head>
			<title>{title ? title : "Nike SNKRS"}</title>
			<link rel="icon" href="https://www.nike.com/favicon.ico" />
			<meta
				name="description"
				content="Welcome to Your Ultimate Sneaker Destination.
Log in with your Nike⁠ Member account or sign up to shop."
			/>
			<meta property="og:type" content="website" />
			<meta
				name="og:image"
				content="https://secure-images.nike.com/is/image/DotCom/CV8121_004_A_PREM?$SNKRS_COVER_WD$&amp;align=0,1"
			/>
		</Head>
	);
}
