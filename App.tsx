import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import RootNav from './src/Navigation/Stack'

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <RootNav />
    </>
  )
}
