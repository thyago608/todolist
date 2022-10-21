import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <ActivityIndicator color="#111" size={30} />
    </Container>
  );
}
