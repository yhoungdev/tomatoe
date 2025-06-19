import React from "react";
import { Text, StyleSheet, TextProps, TextStyle } from "react-native";
import COLORS from "@/constants/Colors";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "caption"
  | "label";

export interface ITypography extends TextProps {
  variant?: TypographyVariant;
  color?: string;
  weight?: TextStyle["fontWeight"];
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
}

const variantStyles: Record<TypographyVariant, TextStyle> = {
  h1: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.TEXT,
    letterSpacing: 0.2,
  },
  h2: {
    fontSize: 26,
    fontWeight: "700",
    color: COLORS.TEXT,
  },
  h3: {
    fontSize: 22,
    fontWeight: "600",
    color: COLORS.TEXT,
  },
  h4: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.TEXT,
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
    color: COLORS.TEXT,
  },
  caption: {
    fontSize: 13,
    fontWeight: "400",
    color: COLORS.TEXT_SECONDARY,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    color: COLORS.TEXT_SECONDARY,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
};

const Typography = ({
  variant = "body",
  color,
  weight,
  style,
  children,
  ...rest
}: ITypography) => {
  return (
    <Text
      style={[
        variantStyles[variant],
        color ? { color } : undefined,
        weight ? { fontWeight: weight } : undefined,
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Typography; 