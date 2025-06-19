import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import ContainerLayout from "@/layouts/containerLayout";
import PrimaryButton from "@/components/ui/button";
import { TelevisionSvg, TvButtonIcon } from "@/components/assets";
import {
	useFonts,
	IBMPlexMono_500Medium,
} from "@expo-google-fonts/ibm-plex-mono";
import AppLoading from "expo-app-loading";
import AuthenticatedProfilePanel from "@/components/profile/authenticatedProfilePanel";
import BottomSheetModule, {
	BottomSheetModuleRef,
} from "@/components/module/bottom-sheet-modal";

function IndexHomePage() {
	const [fontsLoaded] = useFonts({
		IBMPlexMono_500Medium,
	});

	const sheetRef = useRef<BottomSheetModuleRef>(null);
	const [code, setCode] = useState(["", "", "", "", "", ""]);

	const handleCodeChange = (value, index) => {
		const updatedCode = [...code];
		updatedCode[index] = value;
		setCode(updatedCode);
	};

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<ContainerLayout>
			<View style={styles.parent}>
				<View>
					<AuthenticatedProfilePanel />
				</View>

				<View style={styles.bgImage}>
					<TelevisionSvg />
				</View>

				<View style={{ gap: 50, flex: 0, justifyContent: "space-between" }}>
					<Text style={styles.textStyle}>Connect your TV with your Mobile</Text>

					<PrimaryButton onPress={() => sheetRef.current?.present()}>
						<View style={styles.buttonChild}>
							<TvButtonIcon />
							<Text style={{ color: "white", fontWeight: "semibold" }}>
								Connect TV
							</Text>
						</View>
					</PrimaryButton>
				</View>
			</View>

			<BottomSheetModule ref={sheetRef} snapPoints={["45%"]}>
				<View style={styles.modalContent}>
					<Text style={styles.modalTitle}>Enter Code on TV</Text>
					<Text style={{ textAlign: "center", marginBottom: 20 }}>
						We sent a code on the app of your TV to continue.
					</Text>
					<View style={styles.codeInput}>
						{code.map((digit, index) => (
							<TextInput
								key={index}
								style={styles.codeDigit}
								maxLength={1}
								keyboardType="numeric"
								value={digit}
								onChangeText={(value) => handleCodeChange(value, index)}
							/>
						))}
					</View>

					<View style={{ width: 300, marginTop: 20 }}>
						<PrimaryButton onPress={() => sheetRef.current?.dismiss()}>
							<Text style={{ color: "white" }}>Authenticate</Text>
						</PrimaryButton>
					</View>
				</View>
			</BottomSheetModule>
		</ContainerLayout>
	);
}

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
	buttonChild: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	modalContent: {
		width: "100%",
		alignItems: "center",
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	codeInput: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		marginTop: 20,
	},
	codeDigit: {
		width: 40,
		height: 50,
		borderWidth: 1,
		borderColor: "#ccc",
		textAlign: "center",
		fontSize: 20,
		borderRadius: 5,
	},
});

export default IndexHomePage;
