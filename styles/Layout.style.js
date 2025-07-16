import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 50,
  },
  workspace: {
    height: 450,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  madeBy: {
    position: "absolute",
    right: 25,
    bottom: 10,
    fontSize: 12,
    textShadowOffset: { width: 0, height: 10 },
    textShadowRadius: 20,
  },
  madeByCold: {
    color: "#f58727",
    textShadowColor: "#52d7ff",
  },
  madeByHot: {
    color: "#FFF",
    textShadowColor: "#229be2",
  },

  signature: {
    fontFamily: "PermanentMarker",
  },
});
export { s };
