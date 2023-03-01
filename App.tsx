import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth0Provider } from "react-native-auth0";
import { RootStackParamsList } from "./types/navigatorTypes";
import HomeView from "./features/homeView/HomeView";
import MyAccount from "./features/myAccoount/MyAccount";
import Gems from "./features/gems/Gems";

const Stack = createNativeStackNavigator<RootStackParamsList>();
export default function App() {
  return (
    <Auth0Provider
      domain={"dev-5a5o36s5yv2aqjuj.us.auth0.com"}
      clientId={"uvffDAvusmqr2PGPB8h1H0ZqVkDCloFU"}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeView} />
          <Stack.Screen name='MyAccount' component={MyAccount} />
          <Stack.Screen name='Gems' component={Gems} />
        </Stack.Navigator>
        <StatusBar style='auto' />
      </NavigationContainer>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fff",
  },
});
