import { StyleSheet } from "react-native";
import THEME_STYLE from "@/config/theme";

const styles = StyleSheet.create({
	button: {
		backgroundColor: THEME_STYLE.COLOR.primary.tomato,
		padding: 18,
		paddingTop: 12,
		borderRadius: 50,
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "semibold",
	},
});

export default styles;
