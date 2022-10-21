import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Heading, TaskList } from "./styles";

export function Home() {
  return (
    <SafeAreaView>
      <Container>
        <Heading>Today</Heading>
        <TaskList></TaskList>
      </Container>
    </SafeAreaView>
  );
}
