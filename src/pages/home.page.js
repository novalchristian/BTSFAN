import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView, } from 'react-native';
import {
    GunungBromo,
    GunungIjen,
    GunungPrau,
    GunungRinjani,
    GunungSemeru}
from '../../assets';

let data = [
    {
        key: 1,
        gambar: GunungBromo,
        gunung: 'Gunung Bromo',
        keterangan: 'Gunung yang satu ini sudah sangat terkenal di tengah masyarakat karena pemandangannya yang begitu indah. Gunung Bromo memiliki ketinggian 2.329 mdpl dan terletak di Jawa Timur.'
    },
    {
        key: 2,
        gambar: GunungPrau,
        gunung: 'Gunung Prau',
        keterangan: 'Gunung Prau adalah gunung yang terletak di Dataran Tinggi Dieng. Gunung Prau dengan ketinggian 2.565 mdpl menjadi objek wisata yang populer di kalangan para turis, baik dari berbagai kota di Indonesia, maupun mancanegara.'
    },
    {
        key: 3,
        gambar: GunungIjen,
        gunung: 'Gunung Ijen',
        keterangan: 'Gunung Ijen adalah gunung berapi aktif yang terletak di Jawa Timur, tepatnya di perbatasan Kabupaten Banyuwangi dan Kabupaten Bondowoso. Gunung Ijen sendiri memiliki ketinggian 2.799 mdpl.'
    },
    {
        key: 4,
        gambar: GunungSemeru,
        gunung: 'Gunung Semeru',
        keterangan: 'Gunung Semeru adalah gunung tertinggi yang ada di Pulau Jawa. Ketinggiannya mencapai 3.676 mdpl. Banyak spot menarik yang ada di Gunung Semeru, seperti Danau Ranu Kumbolo, Tanjakan Cinta, dan Oro Oro Ombo.'
    },
    {
        key: 5,
        gambar: GunungRinjani,
        gunung: 'Gunung Rinjani',
        keterangan: 'Gunung Rinjani adalah gunung berapi yang memiliki ketinggian 3.726 mdpl. Gunung ini terletak di Pulau Lombok, Nusa Tenggara Barat.'
    }
]

export default function Home({navigation}) {
    const onPressed = () => {
        navigation.navigate('Detail');
    };
    return (
        <View style={styles.container}>
            <View style={styles.topWrapper}>
                <Text style={styles.topTextWrapper}>Kemana anda ingin mendaki ?</Text>
            </View>

            {/* lIST */}
            <ScrollView style={{marginBottom: 100}}>
                {data.map((e) => (
                    <TouchableOpacity key={e.key} onPress={onPressed}>
                        <View style={{backgroundColor: '#fff', marginVertical: 10, flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 20}}>
                            <View style={{justifyContent: 'center'}}>
                                <Image source={e.gambar} style={styles.image}/>
                            </View>
                            <View style={{flexDirection: 'column', paddingLeft: 10}}>
                                <Text style={{fontSize:18, fontWeight: 'bold'}}>{e.gunung}</Text>
                                <View style={{width: 250}}>
                                    <Text>{e.keterangan}</Text>
                                </View>
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
    image: {
        width: 100,
        height: 100,
        borderRadius: 30,
      },
    topWrapper:{
        height: 100, 
        backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    topTextWrapper:{
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'brown'
    }
  });
  