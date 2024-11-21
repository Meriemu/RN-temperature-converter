import {View, Text} from "react-native";
import {s} from "./TemperatureText.style";
export function TemperatureText({value, unit}) {
  return <Text style={s.text}>{value + unit}</Text>;
}
