import { TouchableOpacityProps } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Container } from "./styles";

export function ButtonNewTask(props: TouchableOpacityProps) {
  return (
    <Container onPress={props.onPress}>
      <Feather name="plus" size={20} color="#fafafa" />
    </Container>
  );
}
