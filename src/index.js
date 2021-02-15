import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import Routes from './config/routes';
import {AuthProvider} from './config/auth-provider';

class Plavent extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
    );
  }
}

export default Plavent;
