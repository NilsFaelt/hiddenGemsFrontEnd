import { TouchableOpacity, Text } from "react-native";
import { mainButtonStyles } from "../buttonsStyle";
import { buttonStyles } from "./buttonStyle";
interface Props {
  title: string;
}
const Button = ({ title }: Props) => {
  return (
    <TouchableOpacity
      style={[mainButtonStyles.container, buttonStyles.container]}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
