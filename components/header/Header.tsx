import { ScrollView, View, ImageBackground, Text } from "react-native";
import { headerStyle } from "./headerStyle";
import { useAuth0 } from "react-native-auth0";
import Button from "../buttons/button/Button";
import Login from "../buttons/login/Login";
import Loggout from "../buttons/logout/Loggout";

const image = {
  uri: "https://images.unsplash.com/photo-1595804523386-e65c49bb0440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
};

const Header = () => {
  const { user } = useAuth0();
  return (
    <View style={headerStyle.container}>
      <ImageBackground source={image} style={headerStyle.backgroundImage}>
        {user ? <Loggout /> : <Login />}
        <ScrollView horizontal={true} style={headerStyle.buttonWrapper}>
          <Button title='Search' />
          <Button title='Gems' />
          <Button title='Add' />
          <Button title='Add' />
          <Button title='Add' />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Header;
