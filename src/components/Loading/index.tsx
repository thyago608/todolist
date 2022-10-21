import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <ActivityIndicator color="#FFFF" />
    </Container>
  );
}
