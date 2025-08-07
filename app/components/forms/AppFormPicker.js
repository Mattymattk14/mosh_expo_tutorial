import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker(props) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={props.items}
        numberOfColumns={props.numberOfColumns}
        onSelectItem={(item) => setFieldValue(props.name, item)}
        placeholder={props.placeholder}
        PickerItemComponent={props.PickerItemComponent}
        selectedItem={values[props.name]}
        width={props.width}
      />
      <ErrorMessage error={errors[props.name]} visible={touched[props.name]} />
    </>
  );
}

export default AppFormPicker;
