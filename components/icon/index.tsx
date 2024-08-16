import AntDesign from "@expo/vector-icons/AntDesign";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

interface IconProps {
  size: number;
  color: string;
  name: any;
  type?: "AntDesign" | "MaterialCommunityIcons" | "MaterialIcons" | "FontAwesome";
  style?: any;
}

const Icon: React.FC<IconProps> = ({ size, color, name, type, style }) => {
  switch (type) {
    case "AntDesign":
      return <AntDesign name={name} size={size} color={color} style={style} />;
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    case "MaterialIcons":
      return (
        <MaterialIcons name={name} size={size} color={color} style={style} />
      );
    case "FontAwesome":
      return (
        <FontAwesome name={name} size={size} color={color} style={style} />
      );
    default:
      return <AntDesign name={name} size={size} color={color} style={style} />;
  }
};

export default Icon;
