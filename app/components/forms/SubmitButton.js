import {} from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton(props) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={props.title} onPress={handleSubmit} />;
}

export default SubmitButton;
