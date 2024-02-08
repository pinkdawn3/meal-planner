import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import React from "react";
import Homescreen from "../screens/Homescreen";
import WeeklyMenu from "../screens/WeeklyMenu";
import Recipes from "../screens/Recipes";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerTitle: "App de Alba",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#FFB6C1",
    },
    headerTintColor: "white",
    drawerItemStyle: {
      width: "93%",
    },
    drawerActiveTintColor: "white",
    drawerActiveBackgroundColor: "#FFB6C1",
    drawerInactiveTintColor: "white",
    drawerInactiveBackgroundColor: "#d182a3",
    drawerType: "slide",
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={drawerNavigatorScreenOptions}
    >
      <Drawer.Screen name="Inicio" component={Homescreen} />
      <Drawer.Screen name="Menú" component={WeeklyMenu} />
      <Drawer.Screen name="Recetas" component={Recipes} />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;
