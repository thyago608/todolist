import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Task } from "@components/Task";
import { tasks } from "@mocks";
import { Container, Heading } from "./styles";

export function Home() {
  return (
    <SafeAreaView>
      <Container>
        <FlatList
          ListHeaderComponent={<Heading>Today</Heading>}
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Task data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </SafeAreaView>
  );
}
