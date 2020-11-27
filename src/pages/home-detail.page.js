import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, Button, Alert, Image, TouchableOpacity } from 'react-native'

export default function HomeDetail({route}) {
    const {gambar, name, price} = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image source={gambar} style={styles.image}/> 
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>Rp. {price} /pcs</Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert('You are the real BTS FAN :)')} style={styles.button}>
                <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
        </View>
    )
}

const {width, height} = Dimensions.get("screen");
const styles = StyleSheet.create({
    buttonText:{
        color: '#fff', 
        fontWeight: 'bold'
    },
    button:{
        backgroundColor: 'green', 
        width: 100, 
        height: 50, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius:10, 
        position: 'absolute', 
        bottom: 40, 
        right: 40
    },
    subTitle:{
        fontSize: 18, 
        marginTop: 10
    },
    title:{
        fontSize: 25, 
        fontWeight: 'bold'
    },
    textWrapper:{
        padding: 20
    },
    image:{
        height: 350, 
        width:412
    },
    imageWrapper:{
        alignItems: 'center', 
        borderTopWidth: 5, 
        borderBottomWidth: 5, 
        borderColor: '#9e66ff'
    },
    container: {
      flex:1,
      backgroundColor: 'white',
      position: 'relative'
    },
  });
  