import Layout from "components/IndexLayout";
import { useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import LoadingComponent from "components/LoadingComponent";

type productItem = {
	createdAt: string;
	name: string;
	imageUrl: string;
	price: string;
	description: string;
	id: string;
};

export default function IndexPage() {
	const {
		isLoading,
		data: products,
		error,
	} = useQuery("products", () =>
		axios
			.get("https://611ed3bf9771bf001785c639.mockapi.io/api/v1/products")
			.then((res) => res.data)
	);

	if (isLoading) {
		return <LoadingComponent />;
	}
	if (error) {
		return <LoadingComponent />;
	}

	return (
		<Layout>
			<main className=" ">
				<div className="grid grid-cols-picture-grid gap-2 place-content-center">
					{products.map((item: productItem) => (
						<figure>
							<Link href={`/products/${item.id}`}>
								<a>
									<Image width={264} height={297} src={item.imageUrl} />
								</a>
							</Link>
						</figure>
					))}
				</div>
			</main>
		</Layout>
	);
}
