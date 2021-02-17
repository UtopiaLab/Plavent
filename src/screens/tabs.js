import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../config/auth-provider';
import Home from './home';
import EventInfo from './event-info';
import Agenda from './agenda';
import Guests from './guests';
import Food from './food';
import Budget from './budget';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const HomeStack = createStackNavigator();
const EventInfoStack = createStackNavigator();
const AgendaStack = createStackNavigator();
const GuestsStack = createStackNavigator();
const FoodStack = createStackNavigator();
const BudgetStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Tabs = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Overview"
      activeColor="#FFEE00"
      inactiveColor="#FFFFFF"
      barStyle={{backgroundColor: '#FF0066'}}>
      <Tab.Screen
        name="Overview"
        component={HomeSS}
        options={{
          tabBarLabel: 'Overview',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Event Info"
        component={EventInfoSS}
        options={{
          tabBarLabel: 'Event Info',
          tabBarIcon: ({color}) => (
            <Icon
              name="ios-chatbubble-ellipses-sharp"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={AgendaSS}
        options={{
          tabBarLabel: 'Agenda',
          tabBarIcon: ({color}) => (
            <Icon name="reader" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Guests"
        component={GuestsSS}
        options={{
          tabBarLabel: 'Guests',
          tabBarIcon: ({color}) => (
            <Icon name="people-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Foods"
        component={FoodSS}
        options={{
          tabBarLabel: 'Foods',
          tabBarIcon: ({color}) => (
            <Icon name="fast-food" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Budget"
        component={BudgetSS}
        options={{
          tabBarLabel: 'Budget',
          tabBarIcon: ({color}) => (
            <Icon name="md-wallet-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeSS = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF0066',
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
        name="Overview"
        component={Home}
        options={{
          headerRight: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="#FF0066"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerLeft: () => (
            <Icon.Button
              name="ios-exit-outline"
              size={25}
              backgroundColor="#FF0066"
              onPress={() => logout()}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const EventInfoSS = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <EventInfoStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF0066',
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
      <EventInfoStack.Screen
        name="Event Info"
        component={EventInfo}
        options={{
          headerRight: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="#FF0066"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerLeft: () => (
            <Icon.Button
              name="ios-exit-outline"
              size={25}
              backgroundColor="#FF0066"
              onPress={() => logout()}
            />
          ),
        }}
      />
    </EventInfoStack.Navigator>
  );
};

const AgendaSS = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <AgendaStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF0066',
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
      <AgendaStack.Screen
        name="Agenda"
        component={Agenda}
        options={{
          headerRight: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="#FF0066"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerLeft: () => (
            <Icon.Button
              name="ios-exit-outline"
              size={25}
              backgroundColor="#FF0066"
              onPress={() => logout()}
            />
          ),
        }}
      />
    </AgendaStack.Navigator>
  );
};

const GuestsSS = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <GuestsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF0066',
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
      <GuestsStack.Screen
        name="Guests"
        component={Guests}
        options={{
          headerRight: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="#FF0066"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerLeft: () => (
            <Icon.Button
              name="ios-exit-outline"
              size={25}
              backgroundColor="#FF0066"
              onPress={() => logout()}
            />
          ),
        }}
      />
    </GuestsStack.Navigator>
  );
};

const FoodSS = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <FoodStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF0066',
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
      <FoodStack.Screen
        name="Food"
        component={Food}
        options={{
          headerRight: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="#FF0066"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerLeft: () => (
            <Icon.Button
              name="ios-exit-outline"
              size={25}
              backgroundColor="#FF0066"
              onPress={() => logout()}
            />
          ),
        }}
      />
    </FoodStack.Navigator>
  );
};

const BudgetSS = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <BudgetStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF0066',
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
      <BudgetStack.Screen
        name="Budget"
        component={Budget}
        options={{
          headerRight: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="#FF0066"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerLeft: () => (
            <Icon.Button
              name="ios-exit-outline"
              size={25}
              backgroundColor="#FF0066"
              onPress={() => logout()}
            />
          ),
        }}
      />
    </BudgetStack.Navigator>
  );
};

export default Tabs;
