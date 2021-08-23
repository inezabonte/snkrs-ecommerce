import React from "react";
import TopHeader from "./TopHeader";
import FeedHeader from "./FeedHeader";
import Head from "next/head";

type IndexLayoutProps = {
	children: React.ReactNode;
	title?: string;
};

export default function IndexLayout({ children, title }: IndexLayoutProps) {
	return (
		<div className="space-y-4">
			<Head>
				<title>{title ? title : "Nike SNKRS"}</title>
				<link rel="icon" href="https://www.nike.com/favicon.ico" />
			</Head>
			<TopHeader />
			<FeedHeader />
			{children}
		</div>
	);
}
