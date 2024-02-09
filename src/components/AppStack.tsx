import { createStackNavigator } from "@react-navigation/stack";
import CustomDrawer, { BottomDrawerParamList } from "./CustomDrawer";
import NewMenu from "../screens/NewMenu";
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  CustomDrawer: NavigatorScreenParams<BottomDrawerParamList>;
  NewMenu: undefined;
  Inicio: undefined;
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
    </Stack.Navigator>
  );
};

export default AppStack;
