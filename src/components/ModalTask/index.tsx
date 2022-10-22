import {
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Keyboard,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import SelectDropdown from "react-native-select-dropdown";
import { ICategory } from "../../interfaces/Category";
import {
  Container,
  Content,
  Form,
  Label,
  Input,
  Task,
  Category,
  Time,
  TimeButton,
  TimeButtonContent,
  TimeButtonText,
  Tags,
  TagsContent,
  TagsTitle,
  Done,
  DoneContent,
} from "./styles";
import { useState } from "react";

export function ModalTask(props: ModalProps) {
  const category: ICategory[] = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "work",
    },
    {
      id: 3,
      name: "leisure",
    },
    {
      id: 4,
      name: "snack",
    },
  ];

  const [isDateTimePicker, setIsDateTimePicker] = useState(false);

  function handleOpenDateTimePicker() {
    setIsDateTimePicker(true);
  }

  function handleCloseDateTimePicker() {
    setIsDateTimePicker(false);
  }

  return (
    <Modal
      statusBarTranslucent
      transparent
      onRequestClose={props.onRequestClose}
      visible={props.visible}
    >
      <Container>
        <Content>
          <TouchableWithoutFeedback onPress={props.onRequestClose}>
            <Feather name="x" size={20} />
          </TouchableWithoutFeedback>
          <Form>
            <Task>
              <Label>To-do</Label>
              <Input />
            </Task>
            <Category>
              <Label>Project</Label>
              <SelectDropdown
                data={category}
                defaultButtonText="Select a category"
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                renderDropdownIcon={() => <AntDesign name="down" />}
                dropdownStyle={styles.dropDownStyle}
                rowTextStyle={styles.rowTextStyle}
                selectedRowTextStyle={styles.selectedRowTextStyle}
                statusBarTranslucent={true}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem: ICategory) => {
                  return selectedItem.name;
                }}
                rowTextForSelection={(item: ICategory) => {
                  return item.name;
                }}
              />
            </Category>
            <Tags>
              <Label>Tags</Label>
              <TouchableWithoutFeedback>
                <TagsContent>
                  <Feather name="plus" size={15} color="#3b82f6" />
                  <TagsTitle>Add tags</TagsTitle>
                </TagsContent>
              </TouchableWithoutFeedback>
            </Tags>
            <Time>
              <Label>Time</Label>
              <TimeButton onPress={handleOpenDateTimePicker}>
                <TimeButtonContent>
                  <TimeButtonText>Horário</TimeButtonText>
                  <Feather name="clock" size={15} color="#c0c0c0" />
                </TimeButtonContent>
              </TimeButton>

              {isDateTimePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date()}
                  mode="time"
                  is24Hour={true}
                  onChange={handleCloseDateTimePicker}
                />
              )}
            </Time>
            <Done onPress={props.onRequestClose}>
              <DoneContent>Done</DoneContent>
            </Done>
          </Form>
        </Content>
      </Container>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#eee7e7",
  },
  buttonTextStyle: {
    textTransform: "capitalize",
    fontSize: 14,
  },
  dropDownStyle: {
    backgroundColor: "#fafafa",
    borderRadius: 8,
  },
  rowTextStyle: {
    textTransform: "capitalize",
  },
  selectedRowTextStyle: {
    color: "#3b82f6",
  },
});
