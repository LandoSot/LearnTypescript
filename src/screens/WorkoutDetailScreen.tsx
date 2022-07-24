import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Workout } from '../JSON/DataTypes'

export default function WorkoutDetailScreen({ navigation, route }: Navigation) {
  const workout = route.params.item

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout.name}</Text>
      <Button title='check' onPress={() => alert('Open modal')}>Check Sequence</Button>
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
