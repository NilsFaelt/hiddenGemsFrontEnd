import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    width: "100%",
  },
  backgroundImage: {
    width: "100%",
    height: 400,
  },
  buttonWrapper: {
    flex: 1,
    overflow: "scroll",
    position: "absolute",
    bottom: 40,
  },
});
