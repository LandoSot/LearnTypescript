import { StyleSheet, View } from 'react-native'
import { Workout } from '../JSON/dataTypes'
import { VICWANT_TextBold, VICWANT_TextRegular } from './Styled/VICWANT_Text'

export default function WorkoutItem({ item }: { item: Workout }) {
  return (
    <View style={styles.container}>
      <VICWANT_TextBold style={styles.name}>{item.name}</VICWANT_TextBold>
      <VICWANT_TextRegular style={styles.content}>Duration: {item.duration}</VICWANT_TextRegular>
      <VICWANT_TextRegular style={styles.content}>Difficulty: {item.difficulty}</VICWANT_TextRegular>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: 'rgba(0,0,0, 0.1)',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  name: {
    fontSize: 15,
    marginBottom: 5
  },
  content: {
    fontSize: 15
  }
})
