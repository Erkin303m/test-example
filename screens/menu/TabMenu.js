import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Stores from '../Stores/Stores';
import Order from '../Order/Order';
import Profile from '../Profile/Profile';
import HeaderOrder from '../Order/HeaderOrder';





export default function App({ navigation }) {
    const Tab = createBottomTabNavigator();

    return <Tab.Navigator tabBarOptions={{ activeTintColor: '#1A94FF' }} >
        <Tab.Screen name="Home"
            component={Home}
            options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Feather name="home" color={color} size={size} />
                ),
            }} />
        <Tab.Screen name="Stores"
            component={Stores}
            options={{
                headerShown: false,
                tabBarLabel: 'Stores',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="store" color={color} size={size} />
                ),
            }} />
        <Tab.Screen name="Order"
            component={Order}
            options={{
                headerShown: true,
                // tabBarLabel: 'Order',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="border-all" color={color} size={size} />
                ),
                headerTitle: (props) => <HeaderOrder {...props} />
            }} />

        <Tab.Screen name="Profile"
            component={Profile}
            options={{
                headerShown: false,
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                ),
            }} />

    </Tab.Navigator>
}