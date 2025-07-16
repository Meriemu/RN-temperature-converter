import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { s } from "./InputTemp.style";
type inputType = {
  defaultValue: number;
  onChange: (text: number) => void;
  unit: string;
};
const InputTemp = ({ defaultValue, onChange, unit }: inputType) => {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder="température"
        onChangeText={(t) => {
          const num = Number(t);
          onChange(isNaN(num) ? 0 : num);
        }}
        keyboardType="numeric"
        // maxLength={4}
        defaultValue={defaultValue.toString()}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
};

export default InputTemp;
