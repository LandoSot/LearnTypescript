import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import WorkoutDetailScreen from '../Screens/WorkoutDetailScreen'
import BottomTabNav from './Bottom'

const Stack = createStackNavigator()

export default function RootNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name='RootNav'
          component={BottomTabNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='WorkoutDetail'
          component={WorkoutDetailScreen}
          options={{
            title: 'Workout Info',
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}