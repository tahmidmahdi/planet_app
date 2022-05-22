import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import Text from './text/text'

export default function PlanetHeader() {
  return (
    <View style={styles.container}>
      <Text preset='h2'>THE PLANETS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing[5],
        borderBottomWidth: 0.2,
        borderBottomColor: colors.white
    }
})