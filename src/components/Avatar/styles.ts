import styled from "styled-components/native";

export const Container = styled.View`
  width: 180px;
  height: 180px;
  margin: 40px auto;
  position: relative;
`;

export const Image = styled.Image`
  width: 100%;
`;

export const ButtonContainer = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: 4px;
  right: 4px;

  align-items: center;
  justify-content: center;
`;
