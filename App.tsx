import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import UserInfoProvider from "./src/providers/RecipeProvider";
import CustomDrawer from "./src/components/CustomDrawer";

// endpoint: 172.16.102.33:8888/users/all

export default function App() {
  return (
    <UserInfoProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <CustomDrawer />
        </NavigationContainer>
      </View>
    </UserInfoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce8e6",
  },
});
