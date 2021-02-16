import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// export const SignUpButton = ({buttonTitle, navigationPass}) => {
//   const {register} = useContext(AuthContext);
//   return (
//     <TouchableOpacity onPress={() => register(navigationPass)}>
//       <View style={styles.button}>
//         <Text style={styles.buttonText}>{buttonTitle}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

const CustomButton = ({buttonTitle, navigationPass}) => {
  return (
    <TouchableOpacity onPress={navigationPass}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 5,
    backgroundColor: '#FFEE00',
    padding: 15,
    borderRadius: 50,
    shadowOpacity: 1,
    shadowRadius: 3.5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 3,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CustomButton;
