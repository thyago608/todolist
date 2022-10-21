import { THEMES } from "@theme";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 32px 32px 0;
`;

export const Heading = styled.Text`
  font-family: ${THEMES.FONT_FAMILY.BOLD};
  font-size: ${THEMES.FONT_SIZE["4XL"]};
  margin-bottom: 32px;
`;
