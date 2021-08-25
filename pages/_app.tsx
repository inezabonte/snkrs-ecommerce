import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import CartDataProvider from "lib/CartDataProvider";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>
				<CartDataProvider>
					<Component {...pageProps} />
				</CartDataProvider>
			</ChakraProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
