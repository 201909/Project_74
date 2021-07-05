import * as React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';
import { CreateReadContainer } from 'react-navigation';
import {CreateAppHeader}from 'react-navigation'
import {AppHeader} from '../App'
import { SearchBar } from 'react-native-elements';
export default function Read() { 
    return (
      <View style={styles.container}>
          <Text>Read Story</Text>
     </View>
    );
  }
  
  export default class ReadStoryScreen{
    render(){
      return(
        <CreateReadContainer/>
     )
     state = {
      search: '',
    };
    }
  }
  updateSearch = (search) => {
    this.setState({ search });
  };

  render();{
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Something Here"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});