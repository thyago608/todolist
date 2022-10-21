import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import CheckBox from "expo-checkbox";
import { ITask } from "../../interfaces/Task";
import { Content, Title, Category, Priority, Info } from "./styles";

interface TaskProps {
  data: ITask;
}

export function Task({ data }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function toggleCheckboxValue() {
    setIsChecked((oldState) => !oldState);
  }

  return (
    <TouchableWithoutFeedback onPress={toggleCheckboxValue}>
      <Content>
        <CheckBox
          value={isChecked}
          color={isChecked ? "#84cc16" : "#d4d4d4"}
          style={{ borderWidth: 1, borderRadius: 6, width: 18, height: 18 }}
        />
        <Info>
          <Title>{data.title}</Title>
          <Category>{data.category}</Category>
          <Priority level={data.level}>{data.level}</Priority>
        </Info>
      </Content>
    </TouchableWithoutFeedback>
  );
}
