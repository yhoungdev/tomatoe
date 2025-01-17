import React, { JSX } from "react";
import { Text } from "react-native";

interface ITypography {
	children: JSX.Element;
}
function Typography({ children }: ITypography): JSX.Element {
	return <Text>{children}</Text>;
}

export default Typography;
