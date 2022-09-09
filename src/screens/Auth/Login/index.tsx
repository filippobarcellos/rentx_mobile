import React, { useState } from "react";
import { StatusBar, KeyboardAvoidingView, Platform } from "react-native";

import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";
// import BackButton from "../../../shared/components/BackButton";

import * as S from "./styles";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Container>
      <StatusBar barStyle="dark-content" />
      {/* <BackButton /> */}

      <S.Title>We're almost there</S.Title>

      <S.Subtitle>Login to start a rent awesome cars.</S.Subtitle>

      <Input iconName="mail" placeholder="E-mail" />
      <Input
        iconName="lock"
        iconRightName="eye"
        placeholder="Password"
        onRightIconClick={onShowPassword}
        showPassword={showPassword}
        secureTextEntry={showPassword}
      />

      <S.ForgotPasswordButton>
        <S.ForgotPasswordText>Forgot my password</S.ForgotPasswordText>
      </S.ForgotPasswordButton>

      <S.Footer>
        <Button style={{ marginBottom: 8 }}>Login</Button>
        <Button variant="white">Register</Button>
      </S.Footer>
    </S.Container>
  );
};

export default Login;
