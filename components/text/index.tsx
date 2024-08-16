import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { StyleSheet } from "react-native";

interface IProps extends TextProps {
  style?: TextStyle;
  children?: React.ReactNode;
  color?: string;
  size?: number;
  fontWeight?: any;
}

const TextComponent: React.FC<IProps> = (props) => {
  const { style, children, color, size, fontWeight, ...rest } = props;
  return (
    <Text
      {...rest}
      style={[
        {
          color: color,
          fontSize: size,
          fontWeight: fontWeight,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default TextComponent;
