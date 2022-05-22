import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import PlanetHeader from '../components/planet-header'
import Text from '../components/text/text'
import { PLANET_LIST } from '../data/planet-list'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <PlanetHeader />
        <FlatList
            contentContainerStyle={styles.list}
            data={PLANET_LIST}
            keyExtractor={(item, index) => item.name}
            renderItem={({item, index}) => {
                const { name, color } = item
                return(
                    <Pressable onPress={() => navigation.navigate('Details')} style={styles.item}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.circle, { backgroundColor: color }]} />
                            <Text preset='h4' style={styles.itemName}>{name}</Text>
                        </View>
                        <AntDesign name="right" size={18} color="white" />
                    </Pressable>
                );
            }}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing[4],
        justifyContent: 'space-between',
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[4]
    },
    list: {
        padding: spacing[4]
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    separator: {
        borderBottomColor: colors.white,
        borderWidth: 0.5
    }

})