import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetProvider } from "@/components/module/bottom-sheet-modal";
import "../global.css";

export default function RootLayout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<BottomSheetProvider>
				<Stack screenOptions={{ headerShown: false }} />
			</BottomSheetProvider>
		</GestureHandlerRootView>
	);
}
