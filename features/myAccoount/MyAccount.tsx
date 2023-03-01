import { StyleSheet, View, Text } from "react-native";
import Navbar from "../../components/navBar/Navbar";
import ProfileCard from "./ProfileCard";

const MyAccount = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ProfileCard />
      <Navbar navigation={navigation} />
    </View>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
