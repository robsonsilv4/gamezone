import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: 'Inicio',
    },
  },
  About: {
    screen: AboutStack,
    navigationOptions: {
      title: 'Sobre',
    },
  },
});

export default createAppContainer(RootDrawerNavigator);
