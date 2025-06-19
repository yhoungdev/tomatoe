// components/ConnectTVModal.tsx
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "@/components/ui/button";
import COLORS from "@/constants/Colors";

const OTP_LENGTH = 6;

export default function ConnectTVModule({
	onAuthenticate,
}: {
	onAuthenticate: () => void;
}) {
	const [code, setCode] = useState(Array(OTP_LENGTH).fill(""));
	const [activeIndex, setActiveIndex] = useState(0);
	const inputRefs = useRef<TextInput[]>([]);

	const handleChange = (value: string, idx: number) => {
		if (!/^\d*$/.test(value)) return;
		const newCode = [...code];
		newCode[idx] = value;
		setCode(newCode);

		if (value && idx < OTP_LENGTH - 1) {
			inputRefs.current[idx + 1]?.focus();
			setActiveIndex(idx + 1);
		}
		if (!value && idx > 0) {
			setActiveIndex(idx - 1);
		}
	};

	const handleKeyPress = (e: any, idx: number) => {
		if (e.nativeEvent.key === "Backspace" && !code[idx] && idx > 0) {
			inputRefs.current[idx - 1]?.focus();
			setActiveIndex(idx - 1);
		}
	};

	const handleFocus = (idx: number) => setActiveIndex(idx);

	return (
		<View style={styles.modalContent}>
			<Text style={styles.modalTitle}>Enter Code on TV</Text>
			<Text style={{ textAlign: "center", marginBottom: 20 }}>
				We sent a code on the app of your TV to continue.
			</Text>
			<View style={styles.otpRow}>
				{Array.from({ length: OTP_LENGTH }).map((_, idx) => (
					<TextInput
						key={idx}
						ref={ref => (inputRefs.current[idx] = ref!)}
						style={[
							styles.otpBox,
							(code[idx] || activeIndex === idx) && { borderColor: COLORS.PRIMARY },
						]}
						value={code[idx]}
						onChangeText={value => handleChange(value, idx)}
						onKeyPress={e => handleKeyPress(e, idx)}
						onFocus={() => handleFocus(idx)}
						keyboardType="numeric"
						maxLength={1}
						textAlign="center"
						autoFocus={idx === 0}
					/>
				))}
			</View>
			<View style={{ width: 300, marginTop: 20 }}>
				<PrimaryButton onPress={onAuthenticate} disabled={code.some(d => !d)}>
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
	otpRow: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "80%",
		marginTop: 20,
		marginBottom: 8,
	},
	otpBox: {
		width: 44,
		height: 54,
		borderWidth: 1.5,
		borderColor: COLORS.BORDER,
		borderRadius: 8,
		marginHorizontal: 5,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.BACKGROUND,
		fontSize: 22,
		color: COLORS.TEXT,
		fontWeight: "600",
	},
});
