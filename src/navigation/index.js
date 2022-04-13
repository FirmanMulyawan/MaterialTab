import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import MainScreen from '../screens/Main'
import TabScreen from '../screens/TabScreen'

const {Screen, Navigator} = createStackNavigator()

const Main = () => {
  return (
    <Navigator>
      <Screen name="MainScreen" component={MainScreen} />
      <Screen name="TabScreen" component={TabScreen} />
    </Navigator>
  )
}

export default Main
