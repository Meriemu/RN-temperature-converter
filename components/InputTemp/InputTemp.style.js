import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input: {
    borderRadius: 20,
    backgroundColor: "white",
    height: 50,
    paddingLeft: 25,
    fontFamily: "SpaceMono",
  },

  unit: {
    position: "absolute",
    fontSize: 30,
    alignSelf: "flex-end",
    paddingRight: 20,
    fontFamily: "SpaceMono",
  },
});
export { s };
