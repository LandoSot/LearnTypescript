import React from 'react'
import { Text } from 'react-native'

export function VICWANT_TextBold(props: Text['props']) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: 'VICWANT-Bold' }]}
    />
  )
}

export function VICWANT_TextRegular(props: Text['props']) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: 'VICWANT-Regular' }]}
    />
  )
}