import {StyleSheet} from "react-native";
const s = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input: {
    //  position: "relative",
    backgroundColor: "#FFF",
    borderRadius: 20,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  unit: {
    position: "absolute",
    fontSize: 30,
    alignSelf: "flex-end",
    paddingRight: 25,
  },
});

export {s};
