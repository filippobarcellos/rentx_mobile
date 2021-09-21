import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  flex: 1;
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  border-right-width: 2px;
  border-right-color: ${({ theme }) => theme.colors.text.primary};

  align-items: center;
  justify-content: center;
`;
