import React, { useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import BottomSheetModule, {
	BottomSheetModuleRef,
} from "@/components/module/bottom-sheet-modal";
import PrimaryButton from "@/components/ui/button";
import { TelevisionSvg, TvButtonIcon } from "@/components/assets";
import ConnectTVModule from "@/components/module/essentials/connect-tv";

export default function NoTVFound() {
	const sheetRef = useRef<BottomSheetModuleRef>(null);

	return (
		<View style={styles.parent}>
			<View style={styles.bgImage}>
				<TelevisionSvg />
			</View>

			<View style={{ gap: 50, flex: 0, justifyContent: "space-between" }}>
				<Text style={styles.textStyle}>No TV Connected Yet</Text>

				<PrimaryButton onPress={() => sheetRef.current?.present()}>
					<View style={styles.buttonChild}>
						<TvButtonIcon />
						<Text style={{ color: "white", fontWeight: "600" }}>
							Connect TV
						</Text>
					</View>
				</PrimaryButton>
			</View>

			<BottomSheetModule ref={sheetRef} snapPoints={["45%"]}>
				<ConnectTVModule onAuthenticate={() => sheetRef.current?.dismiss()} />
			</BottomSheetModule>
		</View>
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
	parent: {
		justifyContent: "space-between",
		paddingVertical: 20,
		height: "90%",
	},
	buttonChild: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
});
