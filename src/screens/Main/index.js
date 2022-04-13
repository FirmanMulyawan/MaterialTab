import React from 'react'
import {StyleSheet, Button, View} from 'react-native'

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Area Satu"
          onPress={() =>
            navigation.navigate('TabScreen', {
              screen: 'AreaSatu',
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Area Dua"
          onPress={() =>
            navigation.navigate('TabScreen', {
              screen: 'AreaDua',
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Area Tiga"
          onPress={() =>
            navigation.navigate('TabScreen', {
              screen: 'AreaTiga',
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Area Empat"
          onPress={() =>
            navigation.navigate('TabScreen', {
              screen: 'AreaEmpat',
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Area Nama Panjang"
          onPress={() =>
            navigation.navigate('TabScreen', {
              screen: 'AreaNamaPanjang',
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Area lima"
          onPress={() =>
            navigation.navigate('TabScreen', {
              screen: 'AreaLima',
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Area enam"
          onPress={() =>
            navigation.navigate('TabScreen', {
              screen: 'AreaEnam',
            })
          }
        />
      </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 20,
  },
})
