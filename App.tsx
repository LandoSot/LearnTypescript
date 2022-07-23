import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import RootNav from './src/Navigation/Stack'
import useCachedResources from './src/Hooks/useCachedResources'

export default function App() {
  const isLoaded = useCachedResources()

  return (
    isLoaded ?
      <>
        <StatusBar style='auto' />
        <RootNav />
      </> : null
  )
}
