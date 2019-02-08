import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button
 } 
from 'react-native';


class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="go to home" onPress={() => this.props.navigation.navigate('Home')}></Button>
      </View>
    );
  }
}


export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
