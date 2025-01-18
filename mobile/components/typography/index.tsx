import React from "react";
import { Text, StyleProp, TextStyle, StyleSheet } from "react-native";
import { useFonts, IBMPlexMono_500Medium } from "@expo-google-fonts/ibm-plex-mono";

interface ITypography {
	children: React.ReactNode;
	style?: StyleProp<TextStyle>;
}

function Typography({ children, style }: ITypography): JSX.Element {
	const [fontsLoaded] = useFonts({
		IBMPlexMono_500Medium,
	});

	if (!fontsLoaded) {
		return <Text style={[styles.text, style]}>{children}</Text>;
	}

	return <Text style={[styles.text, { fontFamily: 'IBMPlexMono_500Medium' }, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontSize: 16,
		color: '#000',
	},
});

export default Typography;
