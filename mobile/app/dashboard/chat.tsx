import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import DashboardLayout from "@/layouts/dahboard-layout";
import { ChatTabIcon } from "@/components/assets/tab-assets";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const messages = [
	{ id: "1", text: "Mommy Titiaraoluwa, please make me coffee" },
	{ id: "2", text: "Daddy Kehinde, can you help me with my homework?" },
	{ id: "3", text: "Grandma Abisola, can we bake cookies together?" },
];

export default function ChatTab() {
	const router = useRouter();
	return (
		<DashboardLayout>
			<View style={styles.container}>
				{messages.length === 0 ? (
					<View style={styles.emptyState}>
						<Text>No messages yet.</Text>
					</View>
				) : (
					<FlatList
						data={messages}
						keyExtractor={(item) => item.id}
						contentContainerStyle={styles.listContent}
						renderItem={({ item }) => (
							<View style={styles.messageRow}>
								<View style={styles.avatarWrapper}>
									<ChatTabIcon color="#474747" />
								</View>
								<View style={styles.messageBubble}>
									<Text style={styles.messageText}>{item.text}</Text>
								</View>
							</View>
						)}
					/>
				)}

				<TouchableOpacity style={styles.fab} activeOpacity={0.8} onPress={() => router.push("/new-message")}>
					<MaterialIcons name="edit" size={28} color="#222" />
				</TouchableOpacity>
			</View>
		</DashboardLayout>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	emptyState: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	listContent: {
		paddingVertical: 24,
		paddingHorizontal: 16,
		paddingBottom: 100,
	},
	messageRow: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 16,
	},
	avatarWrapper: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "#EEE",
		alignItems: "center",
		justifyContent: "center",
	},
	messageBubble: {
		backgroundColor: "#F7F7F7",
		borderRadius: 16,
		paddingVertical: 14,
		paddingHorizontal: 18,
		marginLeft: 12,
		flex: 1,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.04,
		shadowRadius: 2,
		elevation: 1,
	},
	messageText: {
		fontSize: 17,
		color: "#222",
		fontFamily: "System",
	},
	fab: {
		position: "absolute",
		right: 24,
		bottom: 32,
		backgroundColor: "#F7F7F7",
		width: 56,
		height: 56,
		borderRadius: 28,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
});
