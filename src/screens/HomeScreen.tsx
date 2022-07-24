import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import WorkoutItem from '../Components/WorkoutItem'
import { useWorkout } from '../Hooks/useWorkout'

export default function HomeSrcreen({ navigation }: NativeStackHeaderProps) {
  const workouts = useWorkout()

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
