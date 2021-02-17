import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../config/auth-provider';

export function DrawerScreen(props) {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Icon
            name="close-sharp"
            size={30}
            color="#FFFFFF"
            style={styles.close}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>PLAVENT</Text>
      </View>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.container} />
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.containerText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.containerText}>Contact</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.containerText}>About</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => logout()}>
          <Text style={styles.containerText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#202030',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#151525',
    width: '100%',
  },
  close: {
    marginTop: 15,
    marginLeft: 15,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    marginTop: 13,
    marginLeft: '22%',
    letterSpacing: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: 40,
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    width: '90%',
    alignItems: 'center',
  },
  containerText: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 20,
    marginTop: 20,
  },
});
