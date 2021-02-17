import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Agenda = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Event Agenda</Text>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Icon
            name="ios-clipboard"
            size={20}
            color="#FFFFFF"
            style={styles.containerIcon}
          />
          <Text style={styles.containerHeader}>Sample Task 01</Text>
        </View>
        <Text style={styles.containerText}>Sample Text</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Icon
            name="ios-clipboard"
            size={20}
            color="#FFFFFF"
            style={styles.containerIcon}
          />
          <Text style={styles.containerHeader}>Sample Task 02</Text>
        </View>
        <Text style={styles.containerText}>Sample Text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#202030',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
    marginTop: 10,
  },
  container: {
    height: 80,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  headerWrapper: {
    flexDirection: 'row',
  },
  containerIcon: {
    marginTop: 12,
    color: '#FFFFFF',
  },
  containerHeader: {
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 10,
    marginLeft: 5,
  },
  containerText: {
    fontWeight: '100',
    color: '#666666',
    fontSize: 20,
    marginTop: 5,
  },
});

export default Agenda;
