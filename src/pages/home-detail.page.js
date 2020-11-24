import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, Button, Alert } from 'react-native'

export default function HomeDetail() {
    return (
        <View style={styles.container}>
            <Text>Home Detail</Text>
        </View>
    )
}

const {width, height} = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
      width,
      height,
      backgroundColor: 'white'
    },
  });
  