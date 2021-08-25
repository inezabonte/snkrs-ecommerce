import React from "react";
import TopHeader from "./TopHeader";
import Footer from "./Footer";

type IndexLayoutProps = {
	children: React.ReactNode;
};

export default function IndexLayout({ children }: IndexLayoutProps) {
	return (
		<div className="space-y-4 m-auto flex flex-col min-h-screen">
			<TopHeader />
			{children}
			<Footer />
		</div>
	);
}
