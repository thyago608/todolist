import Feather from "@expo/vector-icons/Feather";
import { Container } from "./styles";

export function ButtonNewTask() {
  function handlePress() {
    console.log("AISIAJSIJAS");
  }

  return (
    <Container onPress={handlePress}>
      <Feather name="plus" size={20} color="#fafafa" />
    </Container>
  );
}
