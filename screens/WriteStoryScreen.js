import * as React from 'react'
import {StyleSheet, TouchableOpacity, View, KeyboardAvoidingView, Alert } from 'react-native'
import {StoryName, Author} from 'react-native'
import {TextInput} from 'react-navigation'
import {CreateWriteContainer} from 'react-navigation'
import {AppHeader} from '../App'
import db from '../config'
import firebase from 'firebase';

 

export default function Write() {
  return (
    <View StoryName={StoryName}></View>
  );
  return (
    <View Author={Author}></View>
  );
}

export default function TextInput() {
  StoryName : {
 <The dog Tale/> 
}
Author : {
    <Jack Walery/>
}

} 


render(){
  return(
    <KeyboardAvoidingView style = {{alignItems:'center', marginBottom:50}}> 
    <TextInput 
            style={styles.inputBox}
            placeholder="User@example.com"
            keyboardType="Microsoft"
            onChangeText={(text)=>{
              this.setState({
                Write: text
              })
            }}/>
           
            </KeyboardAvoidingView>
   )
  }
  Alert.alert("Your Story Has Been Submitted");


<TouchableOpacity 
style={styles.SubmitButton}
onPress={this.SubmitButton}
>
  <Text style={styles.ButtonText}>Submit Book</Text>
</TouchableOpacity>

export default class WriteStoryScreen{
  render(){
    return(
      <CreateWriteContainer/>
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