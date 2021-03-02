import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile210239Navigator from '../features/UserProfile210239/navigator';
import UserProfile210208Navigator from '../features/UserProfile210208/navigator';
import Tutorial210207Navigator from '../features/Tutorial210207/navigator';
import NotificationList210179Navigator from '../features/NotificationList210179/navigator';
import Settings210178Navigator from '../features/Settings210178/navigator';
import Settings210170Navigator from '../features/Settings210170/navigator';
import UserProfile210168Navigator from '../features/UserProfile210168/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile210239: { screen: UserProfile210239Navigator },
UserProfile210208: { screen: UserProfile210208Navigator },
Tutorial210207: { screen: Tutorial210207Navigator },
NotificationList210179: { screen: NotificationList210179Navigator },
Settings210178: { screen: Settings210178Navigator },
Settings210170: { screen: Settings210170Navigator },
UserProfile210168: { screen: UserProfile210168Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
