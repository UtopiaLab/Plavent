import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Page02 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Welcome to Page 02!</Text>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Load this Screen Again!"
          onPress={() => navigation.push('Page 02')}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Go to Previous Page!"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Go to the Home Page!"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Go to the First Page!"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    margin: 5,
  },
});

export default Page02;
