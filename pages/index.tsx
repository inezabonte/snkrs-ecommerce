import Layout from "@/components/IndexLayout";
import { useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import LoadingComponent from "@/components/LoadingComponent";
import Header from "@/components/Header";
import { useState } from "react";

type productItem = {
	createdAt: string;
	name: string;
	imageUrl: string;
	price: string;
	description: string;
	id: string;
};

export default function IndexPage() {
	const [page, setPage] = useState(1);

	const getAllProducts = async (page = 1) => {
		const { data } = await axios.get(`api/getProducts?page=${page}`);

		return data;
	};

	const { isLoading, data, error, isPreviousData } = useQuery(
		["products", page],
		() => getAllProducts(page),
		{ keepPreviousData: true }
	);

	if (isLoading) {
		return <LoadingComponent />;
	}
	if (error) {
		return <LoadingComponent />;
	}

	const nextpage = () => {
		if (!isPreviousData && data) {
			setPage((old) => old + 1);
		}
	};

	const prevPage = () => setPage((old) => Math.max(old - 1, 1));

	return (
		<Layout>
			<Header />
			<main className="min-h-screen space-y-8">
				<div className="grid grid-cols-picture-grid gap-2 place-content-center">
					{data.shoes.map((item: productItem) => (
						<figure key={item.id}>
							<Link href={`/products/${item.id}`}>
								<a>
									<Image
										width={264}
										height={297}
										src={item.imageUrl}
										alt={item.name}
									/>
								</a>
							</Link>
						</figure>
					))}
				</div>
				<div className="flex justify-center items-center space-x-4">
					<button
						className="bg-gray-200  p-2 rounded font-bold"
						onClick={prevPage}
						disabled={page === 0}
					>
						Previous
					</button>{" "}
					<span className="bg-gray-200  font-bold p-2 px-2 rounded">
						{page}
					</span>
					<button
						className="bg-gray-200  p-2 rounded font-bold"
						onClick={nextpage}
						disabled={isPreviousData || !data?.hasMore}
					>
						Next
					</button>
				</div>
			</main>
		</Layout>
	);
}
