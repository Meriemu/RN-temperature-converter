import { Text, View } from "react-native";
import { s } from "./DisplayTemp.style";
import React from "react";

type displayTempType = {
  displayTemp: string | null;
  unit: string;
};
const DisplayTemp = ({ displayTemp, unit }: displayTempType) => {
  return (
    <View>
      <Text style={s.text}>
        {displayTemp} {unit}
      </Text>
    </View>
  );
};

export default DisplayTemp;
