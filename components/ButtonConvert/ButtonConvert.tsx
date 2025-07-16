import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./ButtonConvert.style";
import React from "react";

type ButtonTempProps = {
  onPress: () => void;
  unit: string;
};
const ButtonTemp = ({ unit, onPress }: ButtonTempProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={s.btn}>
      <Text style={s.text}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
};

export default ButtonTemp;
