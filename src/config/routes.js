import React, {useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import AuthStack from './auth-stack';
import MainStack from './main-stack';
import {AuthContext} from './auth-provider';
import Loading from '../screens/loading';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const {initializing, setInitializing} = useState(true);

  const onAuthStateChanged = (xuser) => {
    setUser(xuser);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return <Loading />;
  }

  if (!user) {
    return <AuthStack />;
  }

  return <MainStack />;
};

export default Routes;
