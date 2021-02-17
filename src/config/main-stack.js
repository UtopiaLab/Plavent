import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from '../screens/tabs';
import {DrawerScreen} from '../screens/drawer-content';

const Drawer = createDrawerNavigator();

class MainStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerPosition="right"
          drawerStyle={{width: '100%'}}
          drawerContent={(props) => <DrawerScreen {...props} />}>
          <Drawer.Screen name="Home" component={Tabs} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default MainStack;
