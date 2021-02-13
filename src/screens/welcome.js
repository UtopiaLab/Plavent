import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Images from '../config/images';
import CustomButton from '../components/button';

class Welcome extends Component {
  render() {
    return (
      <ImageBackground source={Images.background} style={styles.background}>
        <View style={styles.view}>
          <Animatable.Text
            style={styles.logoText}
            animation="bounceIn"
            duration={1500}>
            plavent
          </Animatable.Text>
          <Text style={styles.titleText}>Hello!</Text>
          <Text style={styles.subTitle}>Let's Get Started!</Text>
          <CustomButton
            buttonTitle="Continue"
            navigationPass={() => this.props.navigation.navigate('Login')}
          />
          <Text style={styles.footerText}>Utopia Lab © 2021</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    textTransform: 'uppercase',
    fontSize: 32,
    color: '#FFFFFF',
    letterSpacing: 8,
    marginVertical: 20,
    position: 'absolute',
    top: '20%',
  },
  titleText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFFFFF',
  },
  subTitle: {
    color: '#202030',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: '20%',
  },
  footerText: {
    color: '#FFFFFF',
    opacity: 0.2,
    top: '90%',
    position: 'absolute',
    bottom: 5,
    margin: 5,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Welcome;
