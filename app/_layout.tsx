import "react-native-reanimated";

import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { s } from "../styles/Layout.style.js";
import { useEffect, useState } from "react";

import InputTemp from "@/components/InputTemp/InputTemp";
import DisplayTemp from "@/components/DisplayTemp/DisplayTemp";
import ButtonConvert from "@/components/ButtonConvert/ButtonConvert";

// import { UNITS } from "../constants/Constant.js";
import { UNITS, DEFAULT_TEMP, DEFAULT_UNIT } from "@/constants/Constant.js";
import { getOppositUnit, convertTempTo } from "@/services/temp-service.js";
import { useFonts } from "expo-font";

const hotBg = require("@/assets/images/hot.png");
const coldBg = require("@/assets/images/cold.png");
const permanentMarker = require("@/assets/fonts/PermanentMarker-Regular.ttf");

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PermanentMarker: permanentMarker,
  });
  if (!fontsLoaded) {
    return null;
  }
  const [value, setValue] = useState(DEFAULT_TEMP);
  const [currentUnit, securrentUnit] = useState(DEFAULT_UNIT);
  const [currentBg, setcurrentBg] = useState();

  const oppositeUnit = getOppositUnit(currentUnit);

  const getConvertedTemp = () => {
    return isNaN(value) ? null : convertTempTo(oppositeUnit, value).toFixed(1);
  };

  const onConvert = () => {
    securrentUnit(oppositeUnit);
    console.log("firs : t", currentUnit);
  };

  useEffect(() => {
    if (
      (currentUnit === UNITS.Celcius && value <= 0) ||
      (currentUnit === UNITS.Fahrenheit && value <= 32)
    ) {
      setcurrentBg(coldBg);
    } else {
      setcurrentBg(hotBg);
    }
  }, [currentUnit, value]);

  return (
    <ImageBackground source={currentBg} style={s.container} resizeMode="cover">
      <View style={s.workspace}>
        <DisplayTemp displayTemp={getConvertedTemp()} unit={oppositeUnit} />
        <InputTemp
          defaultValue={DEFAULT_TEMP}
          onChange={setValue}
          unit={currentUnit}
        />
        <ButtonConvert unit={currentUnit} onPress={onConvert} />
      </View>
      <Text style={[s.madeBy, currentBg == hotBg ? s.madeByHot : s.madeByCold]}>
        Made by <Text style={s.signature}>Meryem ACHEMLAL ツ</Text>
      </Text>
    </ImageBackground>
  );
}
