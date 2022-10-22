import styled from "styled-components/native";
import { transparentize } from "polished";
import { THEMES } from "@theme";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  background: ${THEMES.COLORS.BACKGROUND};
  padding: 50px 20px 0;

  width: 100%;
  height: 100%;

  align-items: flex-end;
`;

export const Form = styled.View`
  margin-top: 50px;
  width: 100%;
  height: 100%;
`;

export const Task = styled.View``;

export const Label = styled.Text`
  font-family: ${THEMES.FONT_FAMILY.SEMI_BOLD};
  font-size: ${THEMES.FONT_SIZE.SM};
  color: ${THEMES.COLORS.STONE_500};
`;

export const Input = styled.TextInput`
  border: 1px solid ${transparentize(0.8, "#737373")};
  border-radius: 8px;

  color: ${THEMES.COLORS.BLACK_800};

  height: 40px;
  padding: 0 20px;
`;

export const Category = styled.View`
  margin-top: 25px;
`;

export const Tags = styled.View`
  margin-top: 25px;
`;

export const TagsContent = styled.View`
  margin-top: 15px;

  flex-direction: row;
  align-items: center;
`;

export const TagsTitle = styled.Text`
  margin-left: 5px;

  color: ${THEMES.COLORS.BLUE_500};
  font-family: ${THEMES.FONT_FAMILY.MEDIUM};
  font-size: ${THEMES.FONT_SIZE.SM};
`;

export const Time = styled.View`
  margin-top: 30px;
`;

export const TimeButton = styled.TouchableWithoutFeedback`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const TimeButtonContent = styled.View`
  margin-top: 10px;
  padding: 12px;

  border: 1px solid ${transparentize(0.8, "#737373")};
  border-radius: 8px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TimeButtonText = styled.Text`
  color: ${THEMES.COLORS.BLACK_800};
  font-size: ${THEMES.FONT_SIZE.SM};
  font-family: ${THEMES.FONT_FAMILY.MEDIUM};
`;

export const Done = styled.TouchableWithoutFeedback`
  position: absolute;
`;

export const DoneContent = styled.Text`
  background: ${THEMES.COLORS.BLUE_500};
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  color: ${THEMES.COLORS.SLATE_50};
  font-size: ${THEMES.FONT_SIZE.SM};
  font-family: ${THEMES.FONT_FAMILY.MEDIUM};

  margin: auto 0;
`;
