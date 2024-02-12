import { createStackNavigator } from "@react-navigation/stack";
import CustomDrawer, { BottomDrawerParamList } from "./CustomDrawer";
import NewMenu from "../screens/NewMenu";
import { NavigatorScreenParams } from "@react-navigation/native";
import AddRecipe from "./cards/AddRecipe";
import Recipes from "../screens/Recipes";

export type RootStackParamList = {
  CustomDrawer: NavigatorScreenParams<BottomDrawerParamList>;
  NewMenu: undefined;
  NewRecipe: undefined;
  Inicio: undefined;
  Recetas: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CustomDrawer"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
      <Stack.Screen name="NewMenu" component={NewMenu} />
      <Stack.Screen name="NewRecipe" component={AddRecipe} />
      <Stack.Screen name="Recetas" component={Recipes} />
    </Stack.Navigator>
  );
};

export default AppStack;
