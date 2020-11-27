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
        <Image source={Noval} style={styles.image}/>
        {profile.map((profile) => (
          <View key={profile.key} style={styles.textWrapper}>
            <Text style={styles.title}>{profile.title}</Text>
            <Text style={styles.subTitle}>{profile.subTitle}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const {width} = Dimensions.get("screen");
const styles = StyleSheet.create({
  textWrapper:{
    marginTop:20, 
    alignItems: 'center'
  },
  subTitle:{
    fontSize: 23, 
    fontWeight: 'bold'
  },
  title:{
    fontSize: 15
  },
  image:{
    width:170, 
    height: 180, 
    borderRadius: 150
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});
