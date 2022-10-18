import React, { useState } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import styles from './style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


const Delivery = () => {
    const [data, setData] = useState([
        {
            "address": "13 Han Thuyen, D.1, HCM city",
            "location": "285 CMT8, D.10, HCM city",
            "price": 334000,
            "active": "Delivered",
            "orderID": "247-96024",
            "orderDate": "20/04/2020, 04:20",
            "products": [
                {
                    "pictures": "../../assets/picture/Image5.png",
                    "productsName": "Capuccino",
                    "info1": "Size: Small",
                    "info2": "69.000 ₫ x 1",
                },
                {
                    "pictures": "../../assets/picture/Image5.png",
                    "productsName": "Smoky burger",
                    "info1": "Adds on: Double-patty, Emmento",
                    "info2": "250.000 ₫ x 1",
                },
            ]
        },
        {
            "address": "13 Han Thuyen, D.1, HCM city",
            "location": "285 CMT8, D.10, HCM city",
            "price": 334000,
            "active": "Delivery failed",
            "orderID": "247-96025",
            "orderDate": "20/04/2020, 04:20",
            "products": [
                {
                    "pictures": "../../assets/picture/Image5.png",
                    "productsName": "Capuccino",
                    "info1": "Size: Small",
                    "info2": "69.000 ₫ x 1",
                },
                {
                    "pictures": "../../assets/picture/Image5.png",
                    "productsName": "Smoky burger",
                    "info1": "Adds on: Double-patty, Emmento",
                    "info2": "250.000 ₫ x 1",
                },
            ]
        },
        {
            "address": "13 Han Thuyen, D.1, HCM city",
            "location": "285 CMT8, D.10, HCM city",
            "price": 334000,
            "active": "Delivered",
            "orderID": "247-96024",
            "orderDate": "20/04/2020, 04:20",
            "products": [
                {
                    "pictures": "../../assets/picture/Image5.png",
                    "productsName": "Capuccino",
                    "info1": "Size: Small",
                    "info2": "69.000 ₫ x 1",
                },
                {
                    "pictures": "../../assets/picture/Image5.png",
                    "productsName": "Smoky burger",
                    "info1": "Adds on: Double-patty, Emmento",
                    "info2": "250.000 ₫ x 1",
                },
            ]
        },

    ])
    return (
        <ScrollView>
            <View style={styles.mainView}>
                <Text>Order History</Text>

                {/* {data.map((value, index) => {
                    return <TouchableOpacity key={value.orderID} >
                        <View style={styles.productsView}>
                            <View style={styles.lexableView}>
                                <Text style={value.active === "Delivered" ? {color:"#00AB56", backgroundColor:"#EFFFF4", borderRadius:5,padding:5} : {display:"none"}}>{value.active}</Text>
                                <Text style={value.active === "Delivery failed" ? {color:"#FF424E", backgroundColor:"#FFF0F1", borderRadius:5,padding:5} : {display:"none"}}>{value.active}</Text>
                                <Text style={value.active === "Preparing" ? {color:"#FC820A", backgroundColor:"#FFF5EB", borderRadius:5,padding:5} : {display:"none"}}>{value.active}</Text>
                                <Text>{value.orderDate}</Text>
                            </View>
                            <View style={{ ...styles.lexableView2, borderBottomWidth: 1, borderBottomColor: "#C7C7C7" }}>
                                <FontAwesome5 name="store" style={styles.icon1} />
                                <Text>{value.orderDate}</Text>
                            </View>
                            <View style={styles.lexableView2}>
                                <Ionicons name="location" style={styles.icon2} />
                                <Text>{value.location}</Text>
                            </View>
                            <View style={styles.lexableView}>
                                <Text>Capuccino (x1), Smoky hamburger </Text>
                                <Text style={{ fontWeight: "bold" }}>{value.price} ₫</Text>
                            </View>
                            <Text>(x1)</Text>
                        </View>
                    </TouchableOpacity>
                })} */}
            </View>
        </ScrollView>
    )
}


export default Delivery