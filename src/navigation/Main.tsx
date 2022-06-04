import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Test from '~components/Test'

const MainStack = createNativeStackNavigator()

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="test" component={Test} />
  </MainStack.Navigator>
)
