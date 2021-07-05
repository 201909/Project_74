import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {CreateAppContainer} from 'react-navigation'
import {CreateBottomTabNavigator} from 'react-navigation-tabs'
import {WriteStoryScreen} from './screens/WriteStoryScreen'

export default function App() {
  return (
    <View style={styles.container}>
   </View>
  );
}

export class AppHeader extends React.Component{
  render(){
    return(
      <CreateAppContainer/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
