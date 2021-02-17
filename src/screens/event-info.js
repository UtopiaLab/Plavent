import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EventInfo = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Event Info Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#202030',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
});

export default EventInfo;
