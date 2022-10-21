import styled from "styled-components/native";
import { THEMES } from "@theme";

export const Container = styled.TouchableOpacity`
  width: 50px;
  height: 50px;

  border-radius: 10px;

  position: absolute;
  bottom: 20px;
  right: 20px;

  background: ${THEMES.COLORS.BLUE_500};

  display: flex;
  align-items: center;
  justify-content: center;
`;
