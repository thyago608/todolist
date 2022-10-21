import { TouchableWithoutFeedback } from "react-native";
import { Content, Title, Category, Priority, Info } from "./styles";
import CheckBox from "expo-checkbox";
import { useState } from "react";

export function Task() {
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
          <Title>Pay for utility services</Title>
          <Category>Home</Category>
          <Priority level="low">Low</Priority>
        </Info>
      </Content>
    </TouchableWithoutFeedback>
  );
}
