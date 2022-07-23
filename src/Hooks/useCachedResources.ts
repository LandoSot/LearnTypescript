import { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import { initWorkouts } from '../Storage/Workout'

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      const key = 'workout-data'

      try {
        await initWorkouts(key)
        await Font.loadAsync({
          'VICWANT-Bold': require('../Assets/Fonts/EduVICWANTBeginner-Bold.ttf'),
          'VICWANT-Regular': require('../Assets/Fonts/EduVICWANTBeginner-Regular.ttf')
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setIsLoadingComplete(true)
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
