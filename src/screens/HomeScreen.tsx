import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { Workout } from '../JSON/DataTypes'
import WorkoutItem from '../Components/WorkoutItem'
import { getData } from '../Storage/AsyncStorage'

export default function HomeSrcreen({ navigation }: NativeStackHeaderProps) {
  const [workouts, setWorkouts] = React.useState<Workout[]>([])

  React.useEffect(() => {
    async function setData() {
      setWorkouts(await getData('workout-data'))
    }

    setData()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workouts</Text>
      <FlatList
        data={workouts}
        keyExtractor={item => item.slug}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => navigation.navigate('WorkoutDetail', { item: item })}>
              <WorkoutItem item={item} />
            </Pressable>
          )
        }}
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
