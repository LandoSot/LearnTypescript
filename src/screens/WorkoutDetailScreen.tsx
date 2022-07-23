import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import { Workout } from '../JSON/DataTypes'

export default function WorkoutDetailScreen({ navigation, route }: Navigation) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workouts Detail</Text>
      <Text>{route.params.item.slug}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold'
  }
})

type Navigation = NativeStackHeaderProps & {
  route: {
    params: {
      item: Workout
    }
  }
}
