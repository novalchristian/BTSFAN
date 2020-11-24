import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Logo from '../../assets/logo.jpg';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Initial');
        }, 2000);
    }, [navigation]);
    return(
        <View style={styles.container}>
            <Image source source={Logo} style={styles.image}/>
            <Text style={styles.text}>Merchandise</Text>
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
