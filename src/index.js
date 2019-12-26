// import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SideMenu from './js/screens/SideMenu';
import HomeScreen from './js/screens/HomeScreen';
import MyNotificationsScreen from './js/screens/MyNotificationsScreen';
// import MapScreen from './js/screens/MapScreen';
import MyCarousel from './js/screens/Parallax';


const AppNavigator = createDrawerNavigator({
  Map: {
    // screen: HomeScreen,
    screen: MyCarousel,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
  // Map: {
  Home: {
    // screen: MapScreen,
    screen: HomeScreen,
  },
}, {
   contentComponent: SideMenu, 
});


const App = createAppContainer(AppNavigator);

export default App; 