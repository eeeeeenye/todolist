import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'
import { HomeNavigator, ProfileNavigator } from '../Stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({                  // navigation hook보다 편리한 route hook사용          
      tabBarIcon: ({ focused }) => {
        switch (route.name) {                         // 이름에 따라서 변화를 줌
          case '목록':
            return (
              <FontIcon                               // 아이콘 사용
                name="home"
                color={focused ? colors.lightPurple : colors.gray}  //눌렀을 때 light purple, 누르지 않았을 때 gray
                size={20}
                solid
              />
            )
          case '프로필':
            return (
              <FontIcon
                name="user"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.lightPurple,
      inactiveTintColor: colors.gray,
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen name="목록" component={HomeNavigator} />
    <Tab.Screen name="프로필" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
