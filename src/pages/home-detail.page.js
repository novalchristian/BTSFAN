import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, Button, Alert, Image, TouchableOpacity } from 'react-native'

export default function HomeDetail({route}) {
    const {gambar, name, price} = route.params;
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center', borderTopWidth: 5, borderBottomWidth: 5, borderColor: '#9e66ff'}}>
                <Image source={gambar} style={{height: 350, width:412}}/> 
            </View>
            <View style={{padding: 20}}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>{name}</Text>
                <Text style={{fontSize: 18, marginTop: 10}}>Rp. {price} /pcs</Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert('You are the real BTS FAN :)')} style={{backgroundColor: 'green', width: 100, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius:10, position: 'absolute', bottom: 40, right: 40}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Buy</Text>
            </TouchableOpacity>
        </View>
    )
}

const {width, height} = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'white',
      position: 'relative'
    },
  });
  