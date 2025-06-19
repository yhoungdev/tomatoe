import { View, StyleSheet, Switch } from "react-native";
import { useState } from "react";
import Typography from "@/components/ui/typography";
import COLORS from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

interface SettingItemProps {
	title: string;
	subtitle: string;
	value: boolean;
	onValueChange: (value: boolean) => void;
	activeColor?: string;
	disabled?: boolean
}

export default function SettingsScreen() {
	const [voice, setVoice] = useState(true);
	const [standby, setStandby] = useState(false);
	const [notifications, setNotifications] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.illustration}>
				<FontAwesome name="tv" size={110} color={COLORS.BORDER} />
			</View>
			<Typography variant="h2" style={styles.deviceName}>
				Dominic's Samsung S90D
			</Typography>
			<View style={styles.infoRow}>
				<MaterialIcons name="location-on" size={18} color={COLORS.TEXT_SECONDARY} />
				<Typography variant="body" style={styles.infoText}>
					33°N 87°E
				</Typography>
				<MaterialIcons name="fiber-manual-record" size={8} color={COLORS.TEXT_SECONDARY} style={{ marginHorizontal: 8 }} />
				<Typography variant="body" style={styles.infoText}>
					3 Mins Ago
				</Typography>
			</View>

			<View style={styles.settingsList}>
			<SettingItem
					title="Notifications 🔔"
					subtitle="Receive alerts from your device."
					value={notifications}
					onValueChange={setNotifications}
					activeColor={COLORS.PRIMARY}
					
				/>
				{/* <SettingItem
					title="Voice Recognition 🎙️"
					subtitle="Opens app with voice commands."
					value={voice}
					onValueChange={setVoice}
					activeColor={COLORS.PRIMARY}
					disabled
				/> */}
				<Divider />
				<SettingItem
					title="Standby Mode"
					subtitle="Conserves power, limits performance."
					value={standby}
					onValueChange={setStandby}
					disabled
				/>
				
				
			</View>
		</View>
	);
}

function SettingItem({ title, subtitle, value, onValueChange, activeColor  , disabled = false}: SettingItemProps) {
	return (
		<View style={styles.settingItem}>
			<View style={{ flex: 1 }}>
				<Typography variant="body" style={styles.settingTitle}>
					{title}
				</Typography>
				<Typography variant="caption" style={styles.settingSubtitle}>
					{subtitle}
				</Typography>
			</View>
			<Switch
				value={value}
				onValueChange={onValueChange}
				trackColor={{ false: COLORS.BORDER, true: activeColor || COLORS.SECONDARY }}
				thumbColor={value ? (activeColor || COLORS.SECONDARY) : "#fff"}
				disabled={disabled}
			/>
		</View>
	);
}

function Divider() {
	return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.BACKGROUND,
		paddingHorizontal: 24,
		paddingTop: 40,
	},
	illustration: {
		alignItems: "center",
		marginBottom: 16,
	},
	deviceName: {
		textAlign: "center",
		marginBottom: 8,
		fontFamily: "serif",
	},
	infoRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 32,
		gap: 8,
	},
	infoText: {
		color: COLORS.TEXT_SECONDARY,
		fontSize: 12,
		marginHorizontal: 4,
	},
	settingsList: {
		backgroundColor: COLORS.SURFACE,
		borderRadius: 18,
		paddingVertical: 8,
		marginTop: 8,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.04,
		shadowRadius: 8,
		elevation: 0,
	},
	settingItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 18,
		paddingHorizontal: 12,
	},
	settingTitle: {
		fontWeight: "600",
		color: COLORS.TEXT,
		fontSize:14,
		marginBottom: 2,
	},
	settingSubtitle: {
		color: COLORS.TEXT_SECONDARY,
	},
	divider: {
		height: 1,
		backgroundColor: COLORS.BORDER,
		marginHorizontal: 12,
	},
});
