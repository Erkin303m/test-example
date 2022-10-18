import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './style'

const StorePickup = () => {
    return (
        <ScrollView style={styles.mainScrollView}>
            <View style={styles.mainView}>
                <Text>Store Pickup</Text>
            </View>
        </ScrollView>
    )
}


export default StorePickup