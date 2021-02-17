import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Food = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Foods & Drinks</Text>
      <Text style={styles.subText}>To be deliver during the event!</Text>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Icon
            name="md-pint"
            size={20}
            color="#FFFFFF"
            style={styles.containerIcon}
          />
          <Text style={styles.containerHeader}>Drink</Text>
        </View>
        <Text style={styles.containerText}>Chocolate Flavored Milk</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Icon
            name="md-pizza"
            size={20}
            color="#FFFFFF"
            style={styles.containerIcon}
          />
          <Text style={styles.containerHeader}>Snack</Text>
        </View>
        <Text style={styles.containerText}>Burger</Text>
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
  subText: {
    fontWeight: '100',
    color: '#666666',
    fontSize: 20,
    marginBottom: 10,
    marginTop: -5,
  },
});

export default Food;
