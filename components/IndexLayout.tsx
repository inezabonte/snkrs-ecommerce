import React from "react";
import TopHeader from "./TopHeader";
import FeedHeader from "./FeedHeader";

type IndexLayoutProps = {
	children: React.ReactNode;
};

export default function IndexLayout({ children }: IndexLayoutProps) {
	return (
		<div className="space-y-4">
			<TopHeader />
			<FeedHeader />
			{children}
		</div>
	);
}
