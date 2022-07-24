import React from "react"
import { Workout } from '../JSON/DataTypes'
import { getData } from '../Storage/AsyncStorage'
import { useIsFocused } from "@react-navigation/native"

export const useWorkout = () => {
  const [workouts, setWorkouts] = React.useState<Workout[]>([])
  const isFocus = useIsFocused()

  React.useEffect(() => {
    async function setData() {
      setWorkouts(await getData('workout-data'))
    }

    isFocus &&
      setData()

  }, [isFocus])

  return workouts
}