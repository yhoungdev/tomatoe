import React from "react";
import { Text, View } from "react-native";
import Logo from "@/components/misc/logo";
import THEME_STYLE from "@/config/theme";

const styleContainer = {
	profileData: {
		backgroundColor: THEME_STYLE.COLOR.primary.tomato,
		width: 50,
		height: 50,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},

	containerParent: {
		backgroundColor: THEME_STYLE.COLOR.primary.tomato,
	},
	parent: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
};

function AuthenticatedProfilePanel() {
	return (
		<View style={styleContainer.parent}>
			<Logo />

			<View style={styleContainer.profileData}>
				<Text
					style={{
						color: "white",
						fontWeight: "semibold",
					}}
				>
					EO
				</Text>
			</View>
		</View>
	);
}

export default AuthenticatedProfilePanel;
