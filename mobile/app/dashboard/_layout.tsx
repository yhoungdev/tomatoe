import { Tabs } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
	HomeTabIcon,
	SettingsTabIcon,
	ChatTabIcon,
} from "@/components/assets/tab-assets";
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

const tabs = [
	{ name: "index", Icon: HomeTabIcon },
	{ name: "chat", Icon: ChatTabIcon },
	{ name: "settings", Icon: SettingsTabIcon },
];

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: styles.tabBar,
				tabBarButton: (props) => (
					<CustomTabBarButton {...props} routeName={route.name} />
				),
			})}
		>
			{tabs.map(({ name, Icon }) => (
				<Tabs.Screen
					key={name}
					name={name}
					options={{
						tabBarIcon: ({ focused }) => (
							<Icon color={focused ? "#111" : "#999"} />
						),
					}}
				/>
			))}
		</Tabs>
	);
}

function CustomTabBarButton({ accessibilityState, children, onPress, routeName }: BottomTabBarButtonProps & { routeName: string }) {
	const isSelected = accessibilityState?.selected;
	const isMiddle = routeName === "chat";

	if (isMiddle) {
		if (!isSelected) {
			return (
				<TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.tabItem}>
					{children}
				</TouchableOpacity>
			);
		}
		return (
			<TouchableOpacity
				onPress={onPress}
				activeOpacity={0.8}
				style={styles.middleButtonWrapper}
			>
				<View style={styles.middleButtonPill}>{children}</View>
			</TouchableOpacity>
		);
	}

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.tabItem, isSelected && styles.tabItemActive]}
			activeOpacity={0.7}
		>
			{children}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		position: "absolute",
		bottom: 15,
		left: 10,
		backgroundColor: "#EFEFEFCC",
		borderRadius: 50,
		height: 72,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 0,
		elevation: 0,
		marginHorizontal: 0,
	},
	tabItem: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 40,
		height: 48,
		alignSelf: "center",
		backgroundColor: "transparent",
		marginHorizontal: 0,
	},
	tabItemActive: {
		backgroundColor: "#fff",
		borderRadius: 40,
		paddingHorizontal: 24,
		height: 48,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.10,
		shadowRadius: 3.84,
		elevation: 2,
	},
	middleButtonWrapper: {
		top: -20,
		alignItems: "center",
		justifyContent: "center",
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: "transparent",
	},
	middleButton: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	middleButtonPill: {
		backgroundColor: "#fff",
		borderRadius: 40,
		paddingHorizontal: 24,
		height: 48,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.10,
		shadowRadius: 3.84,
		elevation: 2,
	},
});
