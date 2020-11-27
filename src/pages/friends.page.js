import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../config/FIREBASE';

export default class Friends extends Component {
  constructor(props) {
    super(props)

    this.state = {
      kontaks: {},
      kontaksKey: []
    }
  }

  componentDidMount(){
    this.ambilData();
  }

  ambilData = () => {
    FIREBASE.database()
      .ref("Kontak")
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data}

        this.setState({
          kontaks: kontakItem,
          kontaksKey: Object.keys(kontakItem)
        })
      })
  }

  removeData = (key) => {
    Alert.alert(
      "Info",
      "Anda yakin ingin menghapus teman anda ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          FIREBASE.database()
          .ref('Kontak/' + key)
          .remove();
          this.ambilData();
          Alert.alert('Hapus', 'Sukses hapus data')
        }}
      ],
      { cancelable: false }
    );
  }

  render() {
    const {kontaks, kontaksKey} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>BTS FRIEND</Text>
        </View>
        <View style={styles.garis}/>

        <View style={styles.listKontak}>
          {kontaksKey.length > 0 ? (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView}>
              {kontaksKey.map((key) => (
                  <View {...this.props} key={key} style={styles.listWrapper}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={styles.listTextTitle}>{kontaks[key].nama}</Text>
                      <TouchableOpacity onPress={() => this.removeData(key)}>
                        <View style={{backgroundColor: '#fff', padding:5, borderRadius: 20}}>
                          <Text style={{color: '#9e66ff'}}>Remove</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.listTextSubTitle}>{kontaks[key].alamat}</Text>
                    <Text style={styles.listTextSubTitleWA}>{kontaks[key].nomorWA}</Text>
                    
                  </View>
              ))}
            </ScrollView>
          ) : (
            <View style={{alignItems:'center'}}>
              <Text>Anda Tidak punya teman</Text>
            </View>
          )}
        </View>

        <View style={styles.wrapperButton}>
            <TouchableOpacity style={styles.buttonAdd} onPress={() => this.props.navigation.navigate('Friends-Detail')}>
                <FontAwesomeIcon icon={faPlus} size={15} color={'white'}/>
            </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const {width, height} = Dimensions.get("screen");
const styles = StyleSheet.create({
  ScrollView:{
    marginBottom: 70
  },
  listTextTitle:{
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  },
  listTextSubTitle:{
    color: '#fff',
    fontSize: 12,
  },
  listTextSubTitleWA:{
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop:10
  },
  listWrapper:{
    padding: 20,
    borderRadius: 30,
    marginBottom: 10,
    backgroundColor: '#9e66ff'
  },
  container: {
    flex: 1,
  },
  wrapperButton:{
      flex:1,
      position: 'absolute',
      bottom: 0,
      right: 0,
      margin:20
  },
  buttonAdd:{
      padding:20,
      backgroundColor: 'red',
      borderRadius: 30,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
  },
  header:{
    paddingHorizontal: 30,
    paddingTop: 30
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#424242'
  },
  garis:{
    borderWidth:1,
    marginTop: 10,
    borderColor: '#424242'
  },
  listKontak:{
    paddingHorizontal: 30,
    marginTop: 20
  }

});
