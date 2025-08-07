import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  name: Yup.string().required().min(1).label("Name"),
});

function RegisterScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField icon="account" name="account" placeholder="Name" />
        <AppFormField icon="email" name="email" placeholder="Email" />
        <AppFormField icon="lock" name="password" placeholder="Password" />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

export default RegisterScreen;
