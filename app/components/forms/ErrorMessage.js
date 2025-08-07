import { StyleSheet } from "react-native";
import React from "react";

import AppText from "../AppText";

function ErrorMessage(props) {
  if (!props.visible || !props.error) return null;

  return <AppText style={styles.error}>{props.error}</AppText>;
}

export default ErrorMessage;

const styles = StyleSheet.create({
  error: { color: "red" },
});
