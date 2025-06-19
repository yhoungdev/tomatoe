import { SafeAreaView, StyleSheet, View } from "react-native";
import AuthenticatedProfilePanel from "@/components/profile/authenticatedProfilePanel";
import ContainerLayout from "@/layouts/containerLayout";

export default function DashboardLayout({
	children,
}: {
	children: JSX.Element;
}) {
	return (
		<SafeAreaView style={styles.container}>
			<ContainerLayout>
				<View>
					<AuthenticatedProfilePanel />
					<View>{children}</View>
				</View>
			</ContainerLayout>
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
