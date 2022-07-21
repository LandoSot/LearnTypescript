import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { FlatList, Text, View } from 'react-native'
import { Workout } from '../JSON/dataTypes'
import data from '../JSON/data.json'

export default function HomeSrcreen({ navigation }: NativeStackHeaderProps) {
  const renderItem = ({ item }: { item: Workout }) => {
    return (
      <Text>{item.name} - {item.difficulty}</Text>
    )
  }

  return (
    <View>
      <FlatList
        data={data as Workout[]}
        keyExtractor={item => item.slug}
        renderItem={renderItem}
      />
    </View>
  )
}
