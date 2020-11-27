import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import {AlbumBE, ArmyBomb, ArmyMembershipKit, BTSMemories, BTSMuster, PhotoCardBinder, WinterPackage, BeWaterWithBTS, SeasonGreetings} from '../../assets';

let data = [
    {
        key: 1,
        gambar: AlbumBE,
        name: 'Album BE',
        price: '600.000'
    },
    {
        key: 2,
        gambar: ArmyBomb,
        name: 'Army Bomb',
        price: '900.000'
    },
    {
        key: 3,
        gambar: ArmyMembershipKit,
        name: 'Army Membership Kit',
        price: '1.000.000'
    },
    {
        key: 4,
        gambar: BTSMemories,
        name: 'BTS Memories',
        price: '900.000'
    },
    {
        key: 5,
        gambar: BTSMuster,
        name: 'BTS Muster',
        price: '900.000'
    },
    {
        key: 6,
        gambar: PhotoCardBinder,
        name: 'Photo Card Binder',
        price: '400.000'
    },
    {
        key: 7,
        gambar: WinterPackage,
        name: 'Winter Package',
        price: '700.000'
    },
    {
        key: 8,
        gambar: BeWaterWithBTS,
        name: 'Be Water With BTS',
        price: '400.000'
    },
    {
        key: 9,
        gambar: SeasonGreetings,
        name: 'Season Greetings',
        price: '700.000'
    }
]

export default function Home({navigation}) {
    const onPressed = (data) => {
        navigation.navigate('Detail', data);
    };
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor='#9e66ff' barStyle="light-content" translucent/>
            
            {/* lIST */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((data) => (
                    <TouchableOpacity key={data.key} onPress={() => onPressed(data)}>
                        <View style={styles.listWrapper}>
                            <Image source={data.gambar} style={styles.image}/>
                            <View style={styles.listTextWrapper}>
                                <Text style={styles.textTitle}>{data.name}</Text>
                                <Text style={styles.subTitle}>Rp. {data.price}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
    subTitle:{
        fontSize:20, 
        color:'#9e66ff', 
        paddingTop: 40
    },
    textTitle:{
        fontSize:20, 
        fontWeight: 'bold'
    },
    listTextWrapper:{
        marginLeft:15, 
        justifyContent: 'center'
    },
    listWrapper:{
        paddingHorizontal:20, 
        paddingVertical: 15, 
        backgroundColor: '#fff', 
        flexDirection: 'row', 
        borderWidth:0.5, 
        borderColor: '#d1d1d1'
    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 30,
      },
    topWrapper:{
        height: 70, 
        backgroundColor: 'white', 
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: '#9e66ff'
    },
    topTextWrapper:{
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'white'
    }
  });
  