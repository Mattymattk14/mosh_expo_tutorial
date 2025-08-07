import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem(props) {
  return (
    <Swipeable renderRightActions={props.renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={props.onPress}>
        <View style={styles.container}>
          {props.ImageComponent}
          {props.image && <Image style={styles.image} source={props.image} />}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {props.title}
            </AppText>
            {props.subTitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {props.subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
export default ListItem;
