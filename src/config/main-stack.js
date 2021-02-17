import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from '../screens/tabs';

const Drawer = createDrawerNavigator();

class MainStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerPosition="right" drawerStyle={{width: '100%'}}>
          <Drawer.Screen name="Home" component={Tabs} />
          {/* <Drawer.Screen name="Page 02" component={Page02StackScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default MainStack;
