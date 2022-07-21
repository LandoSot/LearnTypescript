import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Workout } from '../JSON/dataTypes'
import data from '../JSON/data.json'
import WorkoutItem from '../Components/WorkoutItem'

export default function HomeSrcreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workouts</Text>
      <FlatList
        data={data as Workout[]}
        keyExtractor={item => item.slug}
        renderItem={WorkoutItem}
      />
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
