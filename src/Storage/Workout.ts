import { containsKey, storeData } from "./AsyncStorage"
import data from '../JSON/Data.json'

export const initWorkouts = async (key: string) => {
  const hasworkouts = await containsKey(key)

  if (!hasworkouts) {
    console.log('Storing data...')
    await storeData(key, data)
  }
}
