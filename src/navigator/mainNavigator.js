import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings210312Navigator from '../features/Settings210312/navigator';
import UserProfile210310Navigator from '../features/UserProfile210310/navigator';
import UserProfile210279Navigator from '../features/UserProfile210279/navigator';
import Tutorial210278Navigator from '../features/Tutorial210278/navigator';
import NotificationList210250Navigator from '../features/NotificationList210250/navigator';
import Settings210249Navigator from '../features/Settings210249/navigator';
import Settings210241Navigator from '../features/Settings210241/navigator';
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
Settings210312: { screen: Settings210312Navigator },
UserProfile210310: { screen: UserProfile210310Navigator },
UserProfile210279: { screen: UserProfile210279Navigator },
Tutorial210278: { screen: Tutorial210278Navigator },
NotificationList210250: { screen: NotificationList210250Navigator },
Settings210249: { screen: Settings210249Navigator },
Settings210241: { screen: Settings210241Navigator },
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
