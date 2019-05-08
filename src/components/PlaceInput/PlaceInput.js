import React, { Component } from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

class PlaceInput extends Component{
    state = {
        placeName: ''
    }

    placeNameChangeHandler = (value) => {
        this.setState({placeName: value })
    }

    render(){
        return (
            <View style = {styles.inputContainer}>
                <TextInput 
                    style = {styles.placeInput} 
                    placeholder = 'Add some cities..'
                    onChangeText = {this.placeNameChangeHandler}    
                />
                <Button 
                    style = {styles.placeButton} 
                    title = 'Add'
                    onPress = {() => {this.props.onSubmitHandler(this.state.placeName)}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '70%',
    },
    placeButton: {
        width: '30%'
    }

})

export default PlaceInput;