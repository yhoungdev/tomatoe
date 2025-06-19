import { SafeAreaView, StyleSheet, View } from "react-native";
import AuthenticatedProfilePanel from "@/components/profile/authenticatedProfilePanel";

export default function DashboardLayout({
	children,
}: {
	children: JSX.Element;
}) {
	return (
		<SafeAreaView style={styles.container}>
			<AuthenticatedProfilePanel />
			<View>{children}</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "#fff",
	},
});
