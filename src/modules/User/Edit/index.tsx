import React, { useState } from "react";

import Avatar from "../../../components/Avatar";
import BackButton from "../../../components/BackButton";
import Button from "../../../components/Button";
import FormEditPassword from "../../../components/Forms/Edit/Password";
import FormEditProfile from "../../../components/Forms/Edit/Profile";

import * as S from "./styles";

type Option = "general" | "password";

const EditProfile = () => {
  const [option, setOption] = useState<Option>("general");

  const isGeneralSelected = option === "general";

  const onSelectOption = (option: Option) => {
    setOption(option);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.ButtonContainer>
          <BackButton color="white" />
        </S.ButtonContainer>
        <S.Title>Edit Profile</S.Title>
        <Avatar />
      </S.Header>

      <S.Content>
        <S.HeaderContent>
          <S.Option
            isSelected={isGeneralSelected}
            onPress={() => onSelectOption("general")}
          >
            <S.OptionText isSelected={isGeneralSelected}>General</S.OptionText>
          </S.Option>
          <S.Option
            isSelected={!isGeneralSelected}
            onPress={() => onSelectOption("password")}
          >
            <S.OptionText isSelected={!isGeneralSelected}>
              Password
            </S.OptionText>
          </S.Option>
        </S.HeaderContent>
        {option === "general" ? <FormEditProfile /> : <FormEditPassword />}
      </S.Content>
      <S.Footer>
        <S.ButtonWrapper>
          <Button>Save</Button>
        </S.ButtonWrapper>
      </S.Footer>
    </S.Wrapper>
  );
};

export default EditProfile;
