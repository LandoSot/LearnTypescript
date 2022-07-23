import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeSrcreen from '../Screens/HomeScreen'
import PlannerScreen from '../Screens/PlannerScreen'
import { FontAwesome5 } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator()

export default function BottomTabNav() {
  return (
    <BottomTab.Navigator initialRouteName='Home'>
      <BottomTab.Screen
        name='Home'
        component={HomeSrcreen}
        options={{
          tabBarIcon: ({ color, size }) =>
            <FontAwesome5 name="home" size={size} color={color} />
        }}
      />
      <BottomTab.Screen
        name='Planner'
        component={PlannerScreen}
        options={{
          tabBarIcon: ({ color, size }) =>
            <FontAwesome5 name="clock" size={size} color={color} />
        }}
      />
    </BottomTab.Navigator>
  )
}