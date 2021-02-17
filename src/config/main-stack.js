import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home';
import Page02 from '../screens/page02';

const HomeStack = createStackNavigator();
const Page02Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0B020C',
        },
        headerTitleStyle: {
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontFamily: 'roboto',
          fontSize: 24,
          textAlign: 'center',
        },
        headerTintColor: '#FFFFFF',
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="#000000"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const Page02StackScreen = ({navigation}) => {
  return (
    <Page02Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0B020C',
        },
        headerTitleStyle: {
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontFamily: 'roboto',
          fontSize: 24,
          textAlign: 'center',
        },
        headerTintColor: '#FFFFFF',
      }}>
      <Page02Stack.Screen name="Page 02" component={Page02} />
    </Page02Stack.Navigator>
  );
};

class MainStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerPosition="right" drawerStyle={{width: '100%'}}>
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="Page 02" component={Page02StackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default MainStack;
