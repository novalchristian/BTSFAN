import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, Button, Alert } from 'react-native'

export default function HomeDetail() {
    return (
        <View style={styles.container}>
            <View style={styles.topWrapper}>
                <Text style={styles.topTextWrapper}>Pendaftaran Pendakian Gunung</Text>
            </View>
            <View style={styles.textInputWrapper}>
                <Text style={styles.textInputText}>Nama :</Text>
                <TextInput placeholder={'Masukkan Nama Anda'} style={styles.textInput}/>
            </View>
            <View style={styles.textInputWrapper}>
                <Text style={styles.textInputText}>Nomor KTP :</Text>
                <TextInput placeholder={'Masukkan Nomor KTP Anda'} style={styles.textInput}/>
            </View>
            <View style={styles.textInputWrapper}>
                <Text style={styles.textInputText}>Alamat :</Text>
                <TextInput placeholder={'Masukkan Alamat Anda'} style={styles.textInput}/>
            </View>
            <View style={styles.textInputWrapper}>
                <Text style={styles.textInputText}>Lama Mendaki :</Text>
                <TextInput placeholder={'Masukkan Lama Waktu Mendaki'} style={styles.textInput}/>
            </View>
            <View style={{backgroundColor: 'white', padding: 20}}>
                <Button title='Submit' color="green" onPress={() => Alert.alert('Selamat Mendaki :)')}/>
            </View>
        </View>
    )
}

const {width, height} = Dimensions.get("screen");
const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1, 
        borderRadius: 40, 
        paddingHorizontal:10, 
        marginVertical: 10
    },
    textInputText:{
        paddingTop: 10, 
        fontSize:16, 
        fontWeight: 'bold'
    },
    textInputWrapper:{
        paddingTop:10, 
        backgroundColor: 'white', 
        paddingHorizontal: 20
    },
    topWrapper:{
        height: 70, 
        backgroundColor: 'brown', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    topTextWrapper:{
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'white'
    },
    container: {
      width,
      height,
      backgroundColor: 'white'
    },
  });
  