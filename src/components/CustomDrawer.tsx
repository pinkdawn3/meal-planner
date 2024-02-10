import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import React from "react";
import Homescreen from "../screens/Homescreen";
import WeeklyMenu from "../screens/WeeklyMenu";
import Recipes from "../screens/Recipes";
import AddRecipe from "./cards/AddRecipe";

export type BottomDrawerParamList = {
  Inicio: undefined;
  Recetas: undefined;
  Menú: undefined;
  AddRecipe: undefined;
};

const Drawer = createDrawerNavigator<BottomDrawerParamList>();

const CustomDrawer = () => {
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerTitle: "Menús",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#dbeed0",
    },
    headerTintColor: "black",
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
      initialRouteName="Inicio"
      screenOptions={drawerNavigatorScreenOptions}
    >
      <Drawer.Screen name="Inicio" component={Homescreen} />
      <Drawer.Screen name="Menú" component={WeeklyMenu} />
      <Drawer.Screen name="Recetas" component={Recipes} />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;
