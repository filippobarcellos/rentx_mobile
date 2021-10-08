import React from "react";

import Input from "../../../Input";

const FormEditPassword = () => {
  return (
    <>
      <Input iconName="lock" placeholder="Password" />
      <Input iconName="lock" placeholder="Password Confirmation" />
      <Input iconName="lock" placeholder="New Password" />
    </>
  );
};

export default FormEditPassword;
