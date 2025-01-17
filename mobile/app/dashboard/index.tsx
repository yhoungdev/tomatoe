import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ContainerLayout from "@/layouts/containerLayout";
import PrimaryButton from "@/components/ui/button";
import { TelevisionSvg } from "@/components/assets";
import {
	useFonts,
	IBMPlexMono_500Medium,
} from "@expo-google-fonts/ibm-plex-mono";
import AppLoading from "expo-app-loading";

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 25,
		textAlign: "center",
		fontFamily: "IBMPlexMono_500Medium",
		marginBottom: 5,
	},
	bgImage: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	emoji: {
		fontSize: 50,
		textAlign: "center",
	},
	parent: {
		flex: 1,
		justifyContent: "space-between",
		paddingVertical: 20,
	},
});

function IndexHomePage() {
	const [fontsLoaded] = useFonts({
		IBMPlexMono_500Medium,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<ContainerLayout>
			<View style={styles.parent}>
				<View>
					<Text style={styles.emoji}>🍅</Text>
				</View>

				<View style={styles.bgImage}>
					<TelevisionSvg />
				</View>

				<View
					style={{
						gap: 50,
						flex: 0,
						justifyContent: "space-between",
					}}
				>
					<Text style={styles.textStyle}>Connect your TV with your Mobile</Text>

					<PrimaryButton>Connect TV</PrimaryButton>
				</View>
			</View>
		</ContainerLayout>
	);
}

export default IndexHomePage;
