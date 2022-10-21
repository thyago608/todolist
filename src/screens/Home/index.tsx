import { SafeAreaView } from "react-native-safe-area-context";
import { Task } from "@components/Task";
import { Container, Heading, TaskList } from "./styles";

export function Home() {
  return (
    <SafeAreaView>
      <Container>
        <Heading>Today</Heading>
        <TaskList>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </TaskList>
      </Container>
    </SafeAreaView>
  );
}
