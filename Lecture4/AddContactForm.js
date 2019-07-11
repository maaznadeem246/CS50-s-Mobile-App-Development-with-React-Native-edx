import React from 'react';
import {TextInput,StyleSheet,View,Button} from 'react-native';
import PropTypes from "prop-types"


const styles = StyleSheet.create({
    input:{
        padding:5,
        borderColor:'black',
        borderWidth:1,
    }
})

export default class AddContactForm extends React.Component{
    static propTypes = {
        addContact:PropTypes.func,
    }    
    state={
        name:'',
        phone:'',
    }
    handleNameChange = name => {
        this.setState({name})
    }
    handlephoneChange = phone => {
        this.setState({ phone })
    }
    render(){
        return(
            <View style={{paddingTop:30}}>
                <TextInput  
                    style={styles.input} 
                    onChangeText={this.handleNameChange} 
                    value={this.state.name}
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.handlephoneChange} 
                    value={this.state.phone}
                    keyboardType="numeric"
                />
                
                <Button title='Add Contact'/>
            </View>
        )
    }
} 