import {useEffect, useState} from "react";
import {ImageBackground, Text, View} from "react-native";
import {TemperatureText} from "./components/Temperature/TemperatureText";
import {s} from "./App.style";
import hotBg from "./assets/hot.png";
import coldBg from "./assets/cold.png";
import {InputTemp} from "./components/InputTemp/InputTemp";
import {DEFAULT_TEMPERATURE, DEFAULT_UNITS, UNITS} from "./constant";
import {
  getOppositUnit,
  convertTemperatureTo,
  isIceTemperature,
} from "./services/temperature-service";
import {ButtonConvert} from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNITS);
  const [currentBg, setCurrentBg] = useState("hot");
  const oppositeUnit = getOppositUnit(currentUnit);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  }

  const convert = () => {
    setCurrentUnit(oppositeUnit);
  };

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBg = isIceTemperature(inputValue, currentUnit);
      setCurrentBg(isColdBg ? coldBg : hotBg);
    }
  }, [inputValue, currentUnit]);
  return (
    <ImageBackground source={currentBg} style={s.container}>
      <View style={s.workspace}>
        <TemperatureText
          value={getConvertedTemperature()}
          unit={oppositeUnit}
        />
        <InputTemp
          defaultValue={DEFAULT_TEMPERATURE}
          onChangeText={setInputValue}
          unit={currentUnit}
        />
        <ButtonConvert unit={currentUnit} onClick={convert} />
      </View>
    </ImageBackground>
  );
}
