import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Home = ({navigation}) => {
  return (
    <View style={styles.View}>
      <Text style={styles.bodyText}>WELCOME TO HOME</Text>
      <Button
        style={styles.View1}
        backgroundColor="black"
        title="About us"
        onPress={() => navigation.navigate('About us')}
      />
    </View>
  );
};

const Aboutus = ({navigation}) => {
  return (
    <View style={styles.View}>
      <Text style={styles.bodyText1}>We are</Text>
      <Text style={styles.bodyText}>CREATERS FROM</Text>
      <Text style={styles.bodyText}>TOMORROW</Text>
      <Text style={styles.bodyText1}>This is our first project</Text>
      <Button
        style={styles.View1}
        title="Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About us" component={Aboutus} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 35,
  },
  bodyText1: {
    fontSize: 20,
  },
});

export default App;
