import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MenuScreen from "./src/screens/MenuScreen";
import SemiScreen from "./src/screens/SemiScreen";
import AuthScreen from "./src/screens/AuthScreen";
import AddRobotScreen from "./src/screens/AddRobotScreen";
import RobotListScreen from "./src/screens/RobotListScreen";
import AutoScreen from "./src/screens/AutoScreen";
import EditRobotScreen from './src/screens/EditRobotScreen';
import { setNavigator } from './src/navigationRef';
import { Provider as SemiProvider } from "./src/context/SemiContext";
import { Provider as RobotsProvider } from "./src/context/RobotsContext";

/*------------------------------Screens collector---------------------  */
const stackNavigator = createStackNavigator({
  SignIn:AuthScreen,
  RobotList: RobotListScreen,
  Menu: MenuScreen,
  Semi: SemiScreen,
  Auto: AutoScreen,
  AddRobot: AddRobotScreen,
  EditRobot:EditRobotScreen
});

const App = createAppContainer(stackNavigator);

export default () => {
  return (
    <RobotsProvider>
      <SemiProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
      </SemiProvider>
    </RobotsProvider>
  );
};
