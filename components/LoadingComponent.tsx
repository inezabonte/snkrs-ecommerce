import Layout from "./IndexLayout";
import { Spinner } from "@chakra-ui/react";

export default function LoadingComponent() {
	return (
		<Layout>
			<div className="flex justify-center min-h-screen">
				<Spinner
					thickness="5px"
					speed="0.5s"
					emptyColor="gray.200"
					color="gray.500"
					size="xl"
				/>
			</div>
		</Layout>
	);
}
