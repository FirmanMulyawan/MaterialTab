import React, {Fragment} from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {Dimensions, Pressable, ScrollView, Text, View} from 'react-native'

import AreaSatu from './AreaSatu'
import AreaDua from './AreaDua'
import AreaTiga from './AreaTiga'
import AreaEmpat from './AreaEmpat'
import AreaLima from './AreaLima'
import AreaEnam from './AreaEnam'
import AreaNamaPanjang from './AreaNamaPanjang'
import Header from './Header'
import {} from 'react-native-gesture-handler'

const {Navigator, Screen} = createMaterialTopTabNavigator()

function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <>
      <Header header={state.index} />
      <View style={{backgroundColor: 'black'}}>
        <ScrollView horizontal={true}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key]
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name

            const isFocused = state.index === index

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              })

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name)
              }
            }

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              })
            }

            return (
              <Fragment>
                <Pressable
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{flex: 1}}>
                  <View
                    style={{
                      paddingHorizontal: 20,
                      borderRadius: 6,
                      paddingVertical: 20,
                    }}>
                    <Text style={{color: isFocused ? 'red' : 'white'}}>
                      {label}
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 3,
                      backgroundColor: isFocused ? 'red' : 'transparent',
                    }}
                  />
                </Pressable>
              </Fragment>
            )
          })}
        </ScrollView>
      </View>
    </>
  )
}

const TabScreen = () => {
  return (
    <Navigator
      backBehavior="none"
      lazy={true}
      swipeEnabled={false}
      initialLayout={{width: Dimensions.get('window').width}}
      tabBar={props => <MyTabBar {...props} />}>
      <Screen name="AreaSatu" component={AreaSatu} />
      <Screen name="AreaDua" component={AreaDua} />
      <Screen name="AreaTiga" component={AreaTiga} />
      <Screen name="AreaNamaPanjang" component={AreaNamaPanjang} />
      <Screen name="AreaEmpat" component={AreaEmpat} />
      <Screen name="AreaLima" component={AreaLima} />
      <Screen name="AreaEnam" component={AreaEnam} />
    </Navigator>
  )
}

export default TabScreen
