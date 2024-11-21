import {useState} from "react";
import {View, TextInput, Text} from "react-native";
import {s} from "./InputTemp.style";

export function InputTemp({defaultValue, onChangeText, unit}) {
  // const [inputText, setInputText] = useState();
  return (
    <View style={s.container}>
      <View>
        <TextInput
          style={s.input}
          placeholder="wright somethning"
          keyboardType="numeric"
          maxLength={4}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
        />
      </View>

      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
