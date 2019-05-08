import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import ListItem from './src/components/ListItem/ListItem'
import PlaceList from './src/components/PlaceList/PlaceList';


export default class App extends Component{
  state = {
    places: []
  }

  placeSubmitHandler = placeName => {
      if(placeName.trim() === ''){
        return
      }

      // jadi state places akan berisi data(array) yg lama, dan yang baru diinput
      this.setState(prevState => {
        return{
          places: prevState.places.concat(placeName) 
      }
    })
  }

  render() {
    const outputList = this.state.places.map((place, i) => {
      return <ListItem key={i} placeName = {place}/>
    })

    return (
      <View style={styles.container}>
        <PlaceInput onSubmitHandler = {this.placeSubmitHandler}/>
        <View>{outputList}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 26
  }
});
