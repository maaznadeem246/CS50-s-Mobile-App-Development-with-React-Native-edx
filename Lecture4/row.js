
import React from 'react'
import {View,Text,StyleSheet} from "react-native"

const styels = StyleSheet.create({
    row:{
        padding:20
    }
})

const Row = props => (
    <View style={styels.row}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </View>
)

export default Row;