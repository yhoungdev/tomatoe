import React, { JSX } from "react";
import { View, StyleSheet } from "react-native";

const ContainerStyle = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
	},
});

function ContainerLayout({ children }: { children: JSX.Element }): JSX.Element {
	return <View style={ContainerStyle.container}>{children}</View>;
}

export default ContainerLayout;
