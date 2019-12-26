import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Drawer } from 'react-native-paper';

const menuItems = [
  {
    id:1,
    label: "Home",
    icon: require('../../../assets/icons8-chat-40.png'),
    active: 'home'
  },
  {
    id:2,
    label: "Notifications",
    icon: require('../../../assets/icons8-notification-40.png'),
    active: 'notifications'    
  },
  {
    id:3,
    label: "Map",
    icon: require('../../../assets/icons8-map-pin-40.png'),
    active: 'map'    
  }
];

export default class SideMenu extends React.Component {
  state = {
    active: 'home',
  };

  navigateToScreen = (route, active) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.setState({ active });
  }

  render () {
    const { active } = this.state;
    return (
      <Drawer.Section title="Some title">
        {menuItems.map(item => (

            <Drawer.Item
              key={item.id}
              label={item.label}
              icon={item.icon}
              active={active === item.active}
              onPress={ 
                this.navigateToScreen(item.label, item.active)
              }
            />
          ))
        }
     </Drawer.Section>
    );
  }
}