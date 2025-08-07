import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function AppCard(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={props.image}></Image>
        <View style={styles.container}>
          <AppText style={styles.title}>{props.title}</AppText>
          <AppText style={styles.subTitle}>{props.subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  container: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default AppCard;
