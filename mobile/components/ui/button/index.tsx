import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./button";

interface IButtonProps {
	title: string;
	onPress: () => void;
}

const PrimaryButton = ({ title, onPress }: IButtonProps) => (
	<TouchableOpacity style={styles.button} onPress={onPress}>
		<Text style={styles.buttonText}>{title}</Text>
	</TouchableOpacity>
);

export default PrimaryButton;
