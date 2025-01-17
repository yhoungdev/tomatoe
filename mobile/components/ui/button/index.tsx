import React, { forwardRef } from "react";
import { Text, Pressable } from "react-native";
import styles from "./button";

interface IButtonProps {
	onPress?: () => void;
	children?: React.ReactNode;
}

const PrimaryButton = ({ children, onPress }: IButtonProps) => (
	<Pressable style={styles.button} onPress={onPress}>
		<Text style={styles.buttonText}>{children}</Text>
	</Pressable>
);

export default PrimaryButton;
