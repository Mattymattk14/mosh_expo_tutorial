import React from "react";
import { useFormikContext } from "formik";
import {} from "react-native";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField(props) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(props.name)}
        onChangeText={handleChange(props.name)}
        width={props.width}
        {...props}
      />
      <ErrorMessage error={errors[props.name]} visible={touched[props.name]} />
    </>
  );
}

export default AppFormField;
