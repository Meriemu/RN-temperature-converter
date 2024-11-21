import {TouchableOpacity, Text} from "react-native";
import {s} from "./ButtonConvert.style";

export const ButtonConvert = ({unit, onClick}) => {
  return (
    <TouchableOpacity style={s.button} onPress={onClick}>
      <Text style={s.text}> Convert to {unit} </Text>
    </TouchableOpacity>
  );
};
