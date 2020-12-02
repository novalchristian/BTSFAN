import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import Logo from '../../assets/logo.jpg';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Initial');
        }, 2000);
    }, [navigation]);
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle="dark-content" translucent/>
            <Image source source={Logo} style={styles.image}/>
            <Text style={styles.text}>FAN</Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    image: {
        width:200, 
        height: 200
      },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
})
