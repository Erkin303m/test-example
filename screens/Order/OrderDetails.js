import React, { useState } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';


const Delivery = ({ route }) => {
    const { state } = route.params;
    console.log(state);
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.mainScrollView}>
            <View style={styles.mainView3}>
                <View style={styles.topView}>
                    <View style={styles.topView}>
                        <View style={{ paddingStart: 15, flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Order')
                            }}>
                                <MaterialIcons style={{ marginEnd: 10, fontWeight: "bold", fontSize: 25 }} name='keyboard-arrow-left' />
                            </TouchableOpacity>

                            <Text style={styles.topWord}>Order {state.orderID}</Text>
                        </View>
                    </View>
                    <View style={styles.topRightView}>
                        <View style={styles.iconBorder}>
                            <TouchableOpacity>
                                <Entypo name="dots-three-horizontal" color={"black"} />
                            </TouchableOpacity>

                        </View>
                        <View style={styles.iconBorder2}>
                            <TouchableOpacity>
                                <Feather name="x" color={"black"} />
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
            </View>

            <View>
                <Image source={require("./../../assets/pictures/Image7.png")} style={styles.pictureCoffeeMan} />

                <View style={{ paddingStart: 15, paddingEnd: 15 }}>
                    <View style={styles.pictureBottomView}>
                        <Text style={{ fontWeight: "bold" }}>{state.active}</Text>
                        <Text style={styles.wordButton}>Contact support</Text>
                    </View>
                </View>
                <View style={{ paddingStart: 15, paddingEnd: 15 }}>
                    <Text style={{ marginTop: 25, fontWeight: "bold" }}>General info</Text>

                    <View style={styles.pictureBottomView2}>
                        <View style={{ ...styles.pictureBottomView3, borderBottomWidth: 1, borderBottomColor: "#C7C7C7" }}>
                            <Text>Order ID</Text>
                            <Text style={{ fontWeight: "bold" }}>{state.orderID}</Text>
                        </View>
                        <View style={styles.pictureBottomView3}>
                            <Text>Order date</Text>
                            <Text style={{ fontWeight: "bold" }}>{state.orderDate}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ paddingStart: 15, paddingEnd: 15 }}>
                    <Text style={{ marginTop: 25, fontWeight: "bold" }}>Shipping details</Text>

                    <View style={styles.productsView}>

                        <View style={{ ...styles.lexableView2, borderBottomWidth: 1, borderBottomColor: "#C7C7C7" }}>
                            <FontAwesome5 name="store" style={styles.icon1} />
                            <View>
                                <Text>From store</Text>
                                <Text style={{ fontWeight: "bold" }}>{state.address}</Text>
                            </View>
                        </View>
                        <View style={styles.lexableView2}>
                            <Ionicons name="location" style={styles.icon2} />
                            <View>
                                <Text>To</Text>
                                <Text style={{ fontWeight: "bold" }}>{state.location}</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={{ paddingStart: 15, paddingEnd: 15 }}>
                    <Text style={{ marginTop: 25, fontWeight: "bold" }}>Product info</Text>

                    <View style={styles.productsView}>

                        <View style={{ ...styles.lexableView2, borderBottomWidth: 1, borderBottomColor: "#C7C7C7" }}>
                            <Image source={state.products[0].pictures} style={{ marginEnd: 15 }} />
                            <View>
                                <Text style={{ fontWeight: "bold" }}>{state.products[0].productsName}</Text>
                                <Text>{state.products[0].info1}</Text>
                                <Text>{state.products[0].info2}</Text>
                            </View>
                        </View>
                        <View style={styles.lexableView2}>
                            <Image source={state.products[1].pictures} style={{ marginEnd: 15 }} />
                            <View>
                                <Text style={{ fontWeight: "bold" }}>{state.products[1].productsName}</Text>
                                <Text>{state.products[1].info1}</Text>
                                <Text>{state.products[1].info2}</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={{ paddingStart: 15, paddingEnd: 15 }}>
                    <Text style={{ marginTop: 25, fontWeight: "bold" }}>Payment info</Text>

                    <View style={styles.productsView}>
                        <View style={styles.lexableView2}>
                            <Image source={require("./../../assets/pictures/momo.png")} style={{ marginEnd: 15 }} />
                            <View>
                                <Text>Payment method</Text>
                                <Text style={{ fontWeight: "bold" }}>Momo</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ paddingStart: 15, paddingEnd: 15, paddingBottom: 20, marginTop: 10 }}>

                    <View style={styles.pictureBottomView2}>

                        <View style={styles.pictureBottomView3}>
                            <Text>Price</Text>
                            <Text style={{ fontWeight: "bold" }}>{state.price} ₫</Text>
                        </View>
                        <View style={styles.pictureBottomView3}>
                            <Text>Shipping fee</Text>
                            <Text style={{ fontWeight: "bold" }}>15.000 ₫</Text>
                        </View>
                        <View style={styles.pictureBottomView3}>
                            <Text>Promotion</Text>
                            <Text style={{ fontWeight: "bold", color: "green" }}>-50.000 ₫</Text>
                        </View>
                        <View style={styles.pictureBottomView3}>
                            <Text>Total</Text>
                            <Text style={{ fontWeight: "bold", color: "green" }}>299.000 ₫</Text>
                        </View>
                    </View>
                </View>

            </View>


        </ScrollView>
    )
}


export default Delivery