import { StyleSheet, View, Text } from "react-native";
import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/Navbar";

const HomeView = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Header />
      <Navbar navigation={navigation} />
    </View>
  );
};

export default HomeView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
