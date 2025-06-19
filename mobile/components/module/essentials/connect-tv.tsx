// components/ConnectTVModal.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "@/components/ui/button";

export default function ConnectTVModule({
	onAuthenticate,
}: {
	onAuthenticate: () => void;
}) {
	const [code, setCode] = useState(["", "", "", "", "", ""]);

	const handleCodeChange = (value: string, index: number) => {
		const updated = [...code];
		updated[index] = value;
		setCode(updated);
	};

	return (
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
				<PrimaryButton onPress={onAuthenticate}>
					<Text style={{ color: "white" }}>Authenticate</Text>
				</PrimaryButton>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
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
		width: "80%",
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
