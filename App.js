import React, { useEffect, useState } from "react";
import { Button, Image, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

import Screen from "./app/components/Screen.js";
import ImageInput from "./app/components/ImageInput.js";
import WelcomeScreen from "./app/screens/WelcomeScreen.js";
import LoginScreen from "./app/screens/LoginScreen.js";
import RegisterScreen from "./app/screens/RegisterScreen.js";
import MyAccountScreen from "./app/screens/MyAccountScreen.js";
import ListingsScreen from "./app/screens/ListingsScreen.js";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen.js";
import ListingEditScreen from "./app/screens/ListingEditScreen.js";
import AuthNavigator from "./app/navigation/AuthNavigator.js";
import navigationTheme from "./app/navigation/navigationTheme.js";
import AppNavigator from "./app/navigation/AppNavigator.js";

const Tweets = (props) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="VIew Tweet"
      onPress={() => props.navigation.navigate("TweetDetails")}
    />
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={navigationTheme}>
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
