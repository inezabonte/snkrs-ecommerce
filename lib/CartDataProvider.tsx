import React, { createContext, useState } from "react";

type CartDataProviderProps = {
	children: React.ReactNode;
};

export const CartDataContext = createContext<any>(0);

export default function CartDataProvider({ children }: CartDataProviderProps) {
	const [cartQuantity, setCartQuantity] = useState<any>(0);

	return (
		<CartDataContext.Provider value={[cartQuantity, setCartQuantity]}>
			{children}
		</CartDataContext.Provider>
	);
}
