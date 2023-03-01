import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { useAuth0 } from "react-native-auth0";

const ProfileCard = () => {
  const { user, getCredentials } = useAuth0();

  const profileImage = { uri: `${user?.picture}` };
  const backUpImage = {
    uri: "https://images.unsplash.com/photo-1595804523386-e65c49bb0440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
  };
  console.log(user);

  return (
    <View style={cardStyles.container}>
      <ImageBackground source={backUpImage} style={cardStyles.container}>
        <Image
          source={user ? profileImage : backUpImage}
          style={cardStyles.img}
        />
        <Text style={cardStyles.text}>{user?.name}</Text>
      </ImageBackground>
    </View>
  );
};

export default ProfileCard;

export const cardStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "black",
    top: 0,
    width: "100%",
    height: 80,
    borderBottomWidth: 1,
    borderColor: "black",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 45,
    borderColor: "white",
    borderWidth: 3,
  },
  text: {
    color: "white",
    marginTop: 56,
    marginLeft: 10,
  },
});
