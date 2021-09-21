import React from "react";
import Avatar from "../../../components/Avatar";
import BackButton from "../../../components/BackButton";
import Input from "../../../components/Input";

import * as S from "./styles";

const EditProfile = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.ButtonContainer>
          <BackButton color="white" />
        </S.ButtonContainer>
        <S.Title>Edit Profile</S.Title>
        <Avatar />
      </S.Header>

      <Input />
      <Input />
      <Input />
    </S.Wrapper>
  );
};

export default EditProfile;
