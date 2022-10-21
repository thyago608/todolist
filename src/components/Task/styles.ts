import styled from "styled-components/native";
import { transparentize } from "polished";
import { THEMES } from "@theme";

export const Content = styled.View`
  margin-bottom: 12px;
  flex-direction: row;
  align-items: flex-start;

  background: #fff;
  border-radius: 8px;
  padding: 20px 16px;
`;

export const Info = styled.View`
  margin: -5px 20px 0;

  align-items: flex-start;
`;

export const Title = styled.Text`
  font-family: ${THEMES.FONT_FAMILY.MEDIUM};
  font-size: ${THEMES.FONT_SIZE.MD};
`;

export const Category = styled.Text`
  font-size: ${THEMES.FONT_SIZE.SM};
  font-family: ${THEMES.FONT_FAMILY.MEDIUM};

  color: ${THEMES.COLORS.ZINC_400};
`;

type PriorityColors = {
  level: "low" | "high" | "normal";
};

const priorityColors = {
  low: {
    text: transparentize(0.2, "#0d9488"),
    bg: transparentize(0.9, "#06b6d4"),
  },
  high: {
    text: transparentize(0.4, "#ef4444"),
    bg: transparentize(0.9, "#f87171"),
  },
  normal: {
    text: "#71717A",
    bg: "transparent",
  },
};

export const Priority = styled.Text<PriorityColors>`
  margin-top: 10px;
  font-size: ${THEMES.FONT_SIZE.XS};
  font-family: ${THEMES.FONT_FAMILY.MEDIUM};
  text-transform: capitalize;

  background: ${({ level }) => priorityColors[level].bg};
  color: ${({ level }) => priorityColors[level].text};
  padding: 2px 5px;
  border-radius: 10px;
`;
