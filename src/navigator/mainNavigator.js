import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen111492Navigator from '../features/CopyOfBlankScreen111492/navigator';
import BlankScreen111482Navigator from '../features/BlankScreen111482/navigator';
import BlankScreen011481Navigator from '../features/BlankScreen011481/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen111492: { screen: CopyOfBlankScreen111492Navigator },
BlankScreen111482: { screen: BlankScreen111482Navigator },
BlankScreen011481: { screen: BlankScreen011481Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
