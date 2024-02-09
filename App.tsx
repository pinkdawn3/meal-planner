import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RecipeProvider from "./src/providers/RecipeProvider";
import CustomDrawer from "./src/components/CustomDrawer";
import AppStack from "./src/components/AppStack";

export default function App() {
  return (
    <RecipeProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </View>
    </RecipeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce8e6",
  },
});
