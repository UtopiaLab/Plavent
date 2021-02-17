import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Guests = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Guest List</Text>
      <Text style={styles.subText}>
        Total Guests: 20 (Adults: 15 | Children: 05)
      </Text>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Icon
            name="people-circle-outline"
            size={20}
            color="#FFFFFF"
            style={styles.containerIcon}
          />
          <Text style={styles.containerHeader}>A. B. C. Perera</Text>
        </View>
        <Text style={styles.containerText}>Adults: 04 | Children: 01</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Icon
            name="people-circle-outline"
            size={20}
            color="#FFFFFF"
            style={styles.containerIcon}
          />
          <Text style={styles.containerHeader}>Sisira Kumara</Text>
        </View>
        <Text style={styles.containerText}>Adults: 03 | Children: 03</Text>
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

export default Guests;
