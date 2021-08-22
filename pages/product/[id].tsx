import Layout from "components/IndexLayout";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import axios from "axios";

export default function ItemPage() {
	const router = useRouter();
	const { id } = router.query;

	const { isLoading, data, error } = useQuery("item", () =>
		axios
			.get(`https://611ed3bf9771bf001785c639.mockapi.io/api/v1/products/${id}`)
			.then((res) => res.data)
	);

	return (
		<Layout>
			<main>
				<h1>Heeey</h1>
			</main>
		</Layout>
	);
}
