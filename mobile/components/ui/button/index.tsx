import React from "react";
import { Text, Pressable } from "react-native";
import styles from "./button";

interface IButtonProps {
	onPress?: () => void;
	children?: React.ReactNode;
	disabled?: boolean;
}

const PrimaryButton = ({ children, onPress, disabled }: IButtonProps) => (
	<Pressable
		style={[styles.button, disabled && { opacity: 0.5 }]}
		onPress={disabled ? undefined : onPress}
		disabled={disabled}
	>
		<Text style={styles.buttonText}>{children}</Text>
	</Pressable>
);

export default PrimaryButton;
