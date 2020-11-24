import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import Noval from '../../assets/noval.jpg';

let profile = [
  {
    key: 1,
    title: 'Nama :',
    subTitle: 'Noval Christian Bagariang'
  },
  {
    key: 2,
    title: 'NIM :',
    subTitle: '21120118130060'
  },
  {
    key: 3,
    title: 'Kelompok :',
    subTitle: '05'
  },
  {
    key: 4,
    title: 'Base :',
    subTitle: 'React Native'
  },
]
export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={Noval} style={{width:170, height: 180, borderRadius: 150}}/>
        {profile.map((profile) => (
          <View key={profile.key} style={{marginTop:20, alignItems: 'center'}}>
            <Text style={{fontSize: 15}}>{profile.title}</Text>
            <Text style={{fontSize: 23, fontWeight: 'bold'}}>{profile.subTitle}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const {width} = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});
