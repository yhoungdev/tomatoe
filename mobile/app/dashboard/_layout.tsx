import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

const tabs = [
	{
		name: "index",
		title: "Home",
		icon: "home",
	},
	{
		name: "settings",
		title: "Settings",
		icon: "cog",
	},
	{
		name: "chat",
		title: "Chat",
		icon: "comments",
	},
];

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "blue",
				headerShown: false,
			}}
		>
			{tabs.map((tab) => (
				<Tabs.Screen
					key={tab.name}
					name={tab.name}
					options={{
						title: tab.title,

						tabBarIcon: ({ color }) => (
							<FontAwesome size={28} name={tab.icon} color={color} />
						),
					}}
				/>
			))}
		</Tabs>
	);
}
