import { TouchableOpacity, Text, SafeAreaView } from "react-native";
import { logonLogoutButtonStyles } from "./loginLogoutButtonStyle";
import { useAuth0 } from "react-native-auth0";

const Login = () => {
  const { authorize, user } = useAuth0();
  const onPressLogin = async () => {
    try {
      await authorize({});
    } catch (err) {
      console.log(err);
    }
  };
  console.log(user);
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={onPressLogin}
        style={logonLogoutButtonStyles.container}
      >
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
