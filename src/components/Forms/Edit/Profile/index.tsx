import React from "react";
import Input from "../../../Input";

const FormEditProfile = () => {
  return (
    <>
      <Input iconName="user" placeholder="Name" />
      <Input iconName="mail" placeholder="E-mail" />
      <Input iconName="package" placeholder="Document" />
    </>
  );
};

export default FormEditProfile;
