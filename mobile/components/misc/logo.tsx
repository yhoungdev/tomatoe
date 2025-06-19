import React from "react";
import { Text, View } from "react-native";

const styles = {
	emoji: {
		fontSize: 30,
	},
};

function Logo(props) {
	return (
		<View>
			<Text style={styles.emoji}>🍅</Text>
		</View>
	);
}

export default Logo;
