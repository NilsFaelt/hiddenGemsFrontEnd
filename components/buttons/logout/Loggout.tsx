import { TouchableOpacity, Text } from "react-native";
import { logonLogoutButtonStyles } from "../login/loginLogoutButtonStyle";
import { useAuth0 } from "react-native-auth0";

const Loggout = () => {
  const { clearSession } = useAuth0();
  const onPressLoggOut = async () => {
    console.log("loggout");
    await clearSession();
    try {
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <TouchableOpacity
      onPress={onPressLoggOut}
      style={logonLogoutButtonStyles.container}
    >
      <Text>LOGOUT</Text>
    </TouchableOpacity>
  );
};

export default Loggout;
