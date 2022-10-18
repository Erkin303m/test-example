import React from 'react'
import styles from './style'
import StorePickup from './StorePickup';
import Delivery from './Delivery';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Order = () => {
    return (

        <Tab.Navigator style={styles.TabMenu}>
            <Tab.Screen name="Store pickup" component={StorePickup} />
            <Tab.Screen name="Delivery" component={Delivery} />
        </Tab.Navigator>

    )
}

export default Order





