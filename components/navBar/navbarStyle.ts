import { StyleSheet } from "react-native";

export const navbarStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "grey",
  },
  iconWrapper: {
    marginTop: 10,
    flex: 1,
    alignItems: "center",
    fontSize: 0.3,
  },
});
