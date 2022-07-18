import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNav from './Bottom'

const Stack = createStackNavigator()

export default function RootNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='RootNav' component={BottomTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}