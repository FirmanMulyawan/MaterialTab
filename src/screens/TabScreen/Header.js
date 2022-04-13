import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Header = ({header}) => {
  const tabHeader = item => {
    if (item === 0) {
      return (
        <View style={[styles.container, {backgroundColor: 'red'}]}>
          <Text style={styles.textItem}>Tab aktif 1</Text>
        </View>
      )
    } else if (item === 1) {
      return (
        <View style={[styles.container, {backgroundColor: 'pink'}]}>
          <Text style={styles.textItem}>Tab aktif 2</Text>
        </View>
      )
    } else if (item === 2) {
      return (
        <View style={[styles.container, {backgroundColor: 'blue'}]}>
          <Text style={styles.textItem}>Tab aktif 3</Text>
        </View>
      )
    } else if (item === 3) {
      return (
        <View style={[styles.container, {backgroundColor: 'purple'}]}>
          <Text style={styles.textItem}>Tab aktif Nama Panjang</Text>
        </View>
      )
    } else if (item === 4) {
      return (
        <View style={[styles.container, {backgroundColor: 'green'}]}>
          <Text style={styles.textItem}>Tab aktif 4</Text>
        </View>
      )
    } else if (item === 5) {
      return (
        <View style={[styles.container, {backgroundColor: 'orange'}]}>
          <Text style={styles.textItem}>aktif 5</Text>
        </View>
      )
    } else if (item === 6) {
      return (
        <View style={[styles.container, {backgroundColor: 'lime'}]}>
          <Text style={styles.textItem}>aktif 6</Text>
        </View>
      )
    }
  }

  return <View>{tabHeader(header)}</View>
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textItem: {
    fontSize: 30,
    color: 'white',
  },
})
