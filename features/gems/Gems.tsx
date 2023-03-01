import { StyleSheet, View, Text } from "react-native";
import Navbar from "../../components/navBar/Navbar";

const Gems = ({ navigation }: any) => {
  return (
    <View style={gemsStyle.container}>
      <Navbar navigation={navigation} />
    </View>
  );
};

export const gemsStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Gems;
