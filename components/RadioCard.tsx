import React from "react";
import { useRadio } from "@chakra-ui/radio";
import { Box } from "@chakra-ui/layout";

export default function RadioCard(props) {
	const { getInputProps, getCheckboxProps } = useRadio(props);

	const input = getInputProps();
	const checkbox = getCheckboxProps();

	return (
		<Box as="label">
			<input {...input} />
			<Box
				{...checkbox}
				cursor="pointer"
				borderWidth="1px"
				_checked={{
					bg: "black",
					color: "white",
				}}
				px={5}
				py={3}
			>
				{props.children}
			</Box>
		</Box>
	);
}
