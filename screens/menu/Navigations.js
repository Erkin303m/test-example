import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home/Home';
import TabMenu from "./TabMenu"
import OrderDetails from "../Order/OrderDetails"
import OrderHistory from '../Order/OrderHistory';


const Stack = createNativeStackNavigator();

const Navoigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tab" component={TabMenu} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="orderDetails" component={OrderDetails} options={{ headerShown: false, headerBackTitleVisible: false }} />
                <Stack.Screen name="orderHistory" component={OrderHistory} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navoigation