import React, { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";
// import BackButton from "../../../shared/components/BackButton";

import * as S from "./styles";

const Register = () => {
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <S.Container>
          <StatusBar barStyle="dark-content" />
          {/* <BackButton /> */}
          <S.Title>Sign up</S.Title>

          <S.Subtitle>
            We promise you to keep your information secret.
          </S.Subtitle>

          <Input iconName="user" placeholder="Name" autoCorrect={false} />
          <Input iconName="mail" placeholder="E-mail" autoCorrect={false} />
          <Input
            iconName="archive"
            placeholder="Driver's License"
            autoCorrect={false}
          />
          <Input iconName="lock" placeholder="Password" secureTextEntry />

          <S.Footer>
            <Button>Register</Button>
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;
