import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Task } from "@components/Task";
import { ButtonNewTask } from "@components/ButtonNewTask";
import { tasks } from "@mocks";
import { Container, Heading } from "./styles";
import { ModalTask } from "@components/ModalTask";
import { useState } from "react";

export function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

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
      <ButtonNewTask onPress={handleOpenModal} />
      <ModalTask visible={modalOpen} onRequestClose={handleCloseModal} />
    </SafeAreaView>
  );
}
