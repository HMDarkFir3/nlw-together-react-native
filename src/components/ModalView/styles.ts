//styled-components
import styled from "styled-components/native";

//Types
type Props = {
  marginView: number;
};

export const Overlay = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.overlay};
`;

export const Container = styled.View<Props>`
  flex: 1;
  margin-top: ${(props) => props.marginView + "px"};
`;

export const Bar = styled.View`
  align-self: center;

  width: 39px;
  height: 2px;

  margin-top: 13px;
  margin-bottom: 20px;

  background-color: ${(props) => props.theme.colors.secondary30};
  border-radius: 2px;
`;
