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
						gap: 20,
					}}
				>
					<Text style={styles.textStyle}>
						Transform your TV into a chatty superstar!
					</Text>

					<PrimaryButton title={"Continue with Google"} onPress={() => {}}>
						Continue with Google.
					</PrimaryButton>
				</View>
			</View>
		</ContainerLayout>
	);
}

export default IndexHomePage;
