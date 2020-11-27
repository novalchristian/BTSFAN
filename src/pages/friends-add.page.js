import React, {Component} from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import InputData from '../component/input-data';
import FIREBASE from '../config/FIREBASE/index';

export default class FriendsAdd extends Component{
    constructor(props) {
        super(props)

        this.state = {
            nama: '',
            nomorWA: '',
            alamat: '',
        }
    }

    onChangeText = (namaState, value) => {
        this.setState({
            [namaState] : value
        })
    }

    onSubmit = () => {
        if(this.state.nama && this.state.nomorWA && this.state.alamat){
            const kontakReferensi = FIREBASE.database().ref('Kontak');
            const kontak = {
                nama: this.state.nama,
                nomorWA: this.state.nomorWA,
                alamat: this.state.alamat
            }

            kontakReferensi
                .push(kontak)
                .then((data) => {
                    Alert.alert('Sukses', 'Kontak Tersimpan');
                    this.props.navigation.replace('Friends');
                })
                .then((error) => {
                    console.log("Error : ", error);
                })

        }else{
            Alert.alert('Error', 'Nama, Nomor WA, dan Alamat wajib diisi');
        }
        
    }

    render (){
        return (
            <View style={styles.container}>
                <InputData 
                    label="Nama :" 
                    placeholder="Masukkan Nama"
                    onChangeText={this.onChangeText}
                    value={this.state.nama}
                    namaState="nama"
                />
                <InputData 
                    label="Nomor WA :" 
                    placeholder="Masukkan No.WA" 
                    keyboardType="number-pad"
                    onChangeText={this.onChangeText}
                    value={this.state.nomorWA}
                    namaState="nomorWA"
                />
                <InputData 
                    label="Alamat :" 
                    placeholder="Masukkan Alamat" 
                    isTextArea={true}
                    onChangeText={this.onChangeText}
                    value={this.state.alamat}
                    namaState="alamat"
                />

                <View>
                    <Button title="Submit" onPress={() => this.onSubmit()}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 50,
        backgroundColor: 'white'
    },

})
