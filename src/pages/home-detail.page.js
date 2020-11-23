import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function HomeDetail() {
    return (
        <View style={styles.container}>
            <Text>Home Detail</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  