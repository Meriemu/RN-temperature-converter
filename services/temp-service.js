import { UNITS } from "@/constants/Constant";

export const getOppositUnit = (unit) => {
  return unit === UNITS.Celcius ? UNITS.Fahrenheit : UNITS.Celcius;
};

export const convertTempTo = (unit, val) => {
  if (unit === UNITS.Fahrenheit) {
    return val * 1.8 + 32;
  } else {
    return (val - 32) / 1.8;
  }
};
