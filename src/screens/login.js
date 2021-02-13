import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Images from '../config/images';
import CustomButton from '../components/button';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry: true,
    };
  }
  render() {
    return (
      <ImageBackground source={Images.background} style={styles.background}>
        <View style={styles.view}>
          <View style={styles.header}>
            <Animatable.Text
              style={styles.logoText}
              animation="bounceIn"
              duration={1500}>
              plavent
            </Animatable.Text>
            <Text style={styles.titleText}>Sign In!</Text>
          </View>
          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <View style={styles.action}>
              <Icon
                name="user"
                size={25}
                color="#FFFFFF"
                style={styles.inputIcons}
              />
              <TextInput
                style={styles.textInput}
                placeholder="E-mail"
                placeholderTextColor="#666677"
                autoCapitalize="none"
                onChangeText={(val) => this.textInputChange(val)}
              />
              {this.state.check_textInputChange ? (
                <Icon
                  name="check-circle-o"
                  color="green"
                  size={20}
                  style={styles.verifyIcons}
                />
              ) : null}
            </View>

            <View style={styles.action}>
              <Icon
                name="lock"
                size={25}
                color="#FFFFFF"
                style={styles.inputIcons}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                placeholderTextColor="#666677"
                autoCapitalize="none"
                secureTextEntry={this.state.secureTextEntry ? true : false}
                onChangeText={(val) => this.handlePasswordChange(val)}
              />
              <TouchableOpacity
                onPressIn={this.updateSecureText}
                onPressOut={this.updateSecureText}>
                {this.state.secureTextEntry ? (
                  <Icon
                    name="eye-slash"
                    color="grey"
                    size={20}
                    style={styles.verifyIcons}
                  />
                ) : (
                  <Icon
                    name="eye"
                    color="#2680EB"
                    size={20}
                    style={styles.verifyIcons}
                  />
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.signIn}>
              <CustomButton buttonTitle="Sign In" />
            </View>
            <View style={styles.buttonBottom}>
              <Text style={styles.alternativeText}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>

          <Text style={styles.footerText}>Utopia Lab © 2021</Text>
        </View>
      </ImageBackground>
    );
  }

  textInputChange = (val) => {
    if (val.length !== 0) {
      this.setState({email: val});
      this.setState({check_textInputChange: true});
    } else {
      this.setState({email: val});
      this.setState({check_textInputChange: false});
    }
  };

  handlePasswordChange = (val) => {
    this.setState({password: val});
  };

  updateSecureText = () => {
    this.setState({secureTextEntry: !this.state.secureTextEntry});
  };
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
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 100,
    color: '#FFFFFF',
  },
  footerText: {
    color: '#FFFFFF',
    opacity: 0.2,
    top: '90%',
    position: 'absolute',
    margin: 5,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: '#202030',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    width: windowWidth,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    paddingLeft: 20,
    color: '#EEEEEE',
    fontSize: 20,
  },
  signIn: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonBottom: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 30,
  },
  inputIcons: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  verifyIcons: {
    paddingTop: 15,
  },
  alternativeText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '100',
  },
  signUpText: {
    fontSize: 18,
    color: '#FFEE00',
    fontWeight: 'bold',
  },
});

export default Login;
